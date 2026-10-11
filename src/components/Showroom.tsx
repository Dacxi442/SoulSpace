import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Showroom.css';
import { DiamondMotifPattern } from './AfricanPatterns';
import {
  SHOWROOM_CATEGORIES as categories,
  SHOWROOM_BACKGROUNDS as allBgs,
  SHOWROOM_TIMINGS
} from '../data/showroomData';

const T_SLIDE = SHOWROOM_TIMINGS.slide;
const T_INFO = SHOWROOM_TIMINGS.info;
const T_DWELL = SHOWROOM_TIMINGS.dwell;
const T_USER_PAUSE = SHOWROOM_TIMINGS.userPause;

// ─── Phase ───────────────────────────────────────────────────────────────────
type Phase = 'sliding' | 'settle' | 'info' | 'dwell';

export function Showroom(): React.ReactElement {
  const n = categories.length;

  const [active, setActive] = useState(0);
  const [phase, setPhase] = useState<Phase>('sliding');
  const [infoOpen, setInfoOpen] = useState(false);
  const [lineOpen, setLineOpen] = useState(false);
  const [userBusy, setUserBusy] = useState(false); // brief pause after manual nav

  const rootRef = useRef<HTMLElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const phaseTimers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearAll = () => {
    phaseTimers.current.forEach(clearTimeout);
    phaseTimers.current = [];
  };

  // ── Cinematic sequence ────────────────────────────────────────────────────
  const runSequence = useCallback(() => {
    clearAll();
    setPhase('sliding');
    setInfoOpen(false);
    setLineOpen(false);

    const t1 = setTimeout(() => {
      setPhase('settle');
      setLineOpen(true);
    }, T_SLIDE);

    const t2 = setTimeout(() => {
      setPhase('info');
      setInfoOpen(true);
      setLineOpen(false); // Line disappears when card comes in
    }, T_SLIDE + 1100); // wait for line to draw across

    const t3 = setTimeout(() => setPhase('dwell'), T_SLIDE + 1100 + T_INFO);

    phaseTimers.current = [t1, t2, t3];
  }, []);

  // ── Auto-advance ─────────────────────────────────────────────────────────
  const scheduleNext = useCallback(() => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      if (!userBusy) goAuto();
    }, T_DWELL);
  }, [userBusy]); // eslint-disable-line

  useEffect(() => {
    runSequence();
  }, [active, runSequence]);

  useEffect(() => {
    if (phase === 'dwell') scheduleNext();
    return () => { if (resumeTimer.current) clearTimeout(resumeTimer.current); };
  }, [phase, scheduleNext]);

  // ── Parallax ──────────────────────────────────────────────────────────────
  useEffect(() => {
    let tx = 0, ty = 0, cx = 0, cy = 0, raf: number;
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      tx = (e.clientX / window.innerWidth) * 2 - 1;
      ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', onMove);
    const loop = () => {
      cx += (tx - cx) * 0.05;
      cy += (ty - cy) * 0.05;
      rootRef.current?.style.setProperty('--mx', cx.toFixed(3));
      rootRef.current?.style.setProperty('--my', cy.toFixed(3));
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener('pointermove', onMove); cancelAnimationFrame(raf); };
  }, []);

  // ── Connector line ────────────────────────────────────────────────────────
  useEffect(() => {
    let raf: number;
    const loop = () => {
      if (lineOpen && cardRef.current && stageRef.current) {
        // Find the hotspot anchor element on the active image card
        const dot = stageRef.current.querySelector('.showroom-p[data-pos="c"] .showroom-hs-dot') as HTMLElement;
        if (dot && cardRef.current) {
          const db = dot.getBoundingClientRect();
          const cb = cardRef.current.getBoundingClientRect();
          const hx = db.left + db.width / 2;
          const hy = db.top + db.height / 2;

          const vw = window.innerWidth;
          if (vw > 700) {
            // Gateway card is fixed on the right half via CSS.
            // Draw line from dot to the left edge of the gateway card.
            const ex = cb.left;
            const ey = cb.top + cb.height / 2;

            // Wavy connector line
            const dx = ex - hx;
            const dy = ey - hy;
            const mx = (hx + ex) / 2;
            const my = (hy + ey) / 2;
            const amp = Math.min(120, Math.abs(dx) * 0.6); // Wave amplitude

            const d = `M ${hx} ${hy} `
              + `Q ${hx + dx * 0.25} ${hy - amp}, ${mx} ${my} `
              + `Q ${ex - dx * 0.25} ${ey + amp}, ${ex} ${ey}`;

            if (linePathRef.current) {
              linePathRef.current.setAttribute('d', d);
              const len = Math.ceil(linePathRef.current.getTotalLength()) + 4;
              linePathRef.current.style.setProperty('--len', len + '');
            }
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, [lineOpen]);

  // ── Navigation ────────────────────────────────────────────────────────────
  const goAuto = () => {
    setActive(prev => (prev + 1) % n);
  };

  const go = useCallback((dir: number) => {
    if (n < 2) return;
    setUserBusy(true);
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => setUserBusy(false), T_USER_PAUSE);
    setActive(prev => (prev + dir + n) % n);
  }, [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  // ── Swipe ─────────────────────────────────────────────────────────────────
  const swipe = useRef<{ x: number; y: number; on: boolean }>({ x: 0, y: 0, on: false });
  const onPDown = (e: React.PointerEvent) => {
    if ((e.target as Element).closest('button, aside')) return;
    swipe.current = { x: e.clientX, y: e.clientY, on: true };
  };
  const onPUp = (e: React.PointerEvent) => {
    if (!swipe.current.on) return;
    swipe.current.on = false;
    const dx = e.clientX - swipe.current.x;
    const dy = e.clientY - swipe.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) go(dx < 0 ? 1 : -1);
  };

  // ── Derived ───────────────────────────────────────────────────────────────
  const cat = categories[active];
  const infoClass = `showroom-gateway showroom-glass absolute z-20 ${infoOpen ? 'on' : ''}`;
  const lineClass = `showroom-line absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-400 overflow-visible ${lineOpen ? 'on' : 'opacity-0'}`;
  const containerCls = `showroom-container w-full overflow-hidden relative font-sans font-light text-brand-cream antialiased ${phase === 'sliding' ? 'sliding' : ''}`;

  return (
    <section
      id="showroom"
      className={containerCls}
      ref={rootRef}
      role="region"
      aria-label="Category showroom"
      onPointerDown={onPDown}
      onPointerUp={onPUp}
    >
      {/* ── Centered Header Overlay ──────── */}
      <header className="showroom-header">
        <h2 className="font-serif italic font-semibold text-brand-cream tracking-wide leading-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] pointer-events-auto">
          Explore by Category
        </h2>
        {/* <p className="hidden md:block mt-2 max-w-xl text-[12px] sm:text-[13px] text-brand-cream/70 leading-relaxed font-light drop-shadow-md pointer-events-auto">
          Each category represents a dedicated study in proportion, load balance, and African visual language.
        </p> */}

        {/* Product label below header */}
        <div className={`showroom-pill-wrap pointer-events-none transition-all duration-700 ease-out ${phase !== 'sliding' ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'}`}>
          <span className="showroom-pill inline-block rounded-full bg-brand-brown-near-black/50 backdrop-blur-md border border-brand-cream/15 font-mono tracking-[0.2em] uppercase text-brand-cream drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
            {cat.label}
          </span>
        </div>

        {/* Auto-play indicator */}
        <div className="showroom-auto flex items-center justify-center gap-2 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-auto">
          <button
            className={`showroom-auto-dot rounded-full transition-all duration-500 cursor-pointer ${!userBusy ? 'bg-brand-gold shadow-[0_0_0_2px_var(--color-brand-gold)] animate-[pulse-ring_2s_infinite]' : 'bg-brand-cream/30 opacity-60'}`}
            onClick={goAuto}
            aria-label="Resume auto-play"
          />
          <span className="showroom-auto-label font-mono text-brand-cream/50 tracking-[0.2em] uppercase">
            {!userBusy ? 'Auto' : 'Paused'}
          </span>
        </div>
      </header>

      {/* ── Cinema (full section) ───────────────────────────────────────────── */}
      <div className="showroom-cinema absolute inset-0 w-full h-full">
        {/* Crossfade backgrounds */}
        <div className="showroom-bg-stack">
          {allBgs.map((bg, i) => (
            <div
              key={i}
              className={'showroom-bg-layer' + (bg === cat.bg ? ' active' : '')}
              style={{ backgroundImage: 'url(' + bg + ')' }}
            />
          ))}
        </div>

        <DiamondMotifPattern className="text-brand-gold absolute inset-0 pointer-events-none z-10" opacity={0.06} />

        <div className="showroom-vignette" />
        <div className="showroom-shade" />



        {/* Stage */}
        <div className="showroom-stage" ref={stageRef}>
          <div className="showroom-pl">
            {categories.map((c, i) => {
              let pos = 'hidden';
              if (i === active) pos = 'c';
              else if (i === (active - 1 + n) % n) pos = 'l';
              else if (i === (active + 1) % n) pos = 'r';

              return (
                <div
                  key={c.id}
                  className="showroom-p"
                  data-pos={pos}
                  aria-hidden={i !== active}
                >
                  {/* Glass card that constrains the image */}
                  <div className="showroom-card showroom-glass-card">
                    <div className="showroom-card-inner">
                      <img alt={c.label} src={c.img} draggable={false} />
                    </div>
                    {/* Hotspot anchor dot on the image */}
                    {i === active && (
                      <div
                        className="showroom-hs-dot"
                        style={{
                          left: (c.hotspotX * 100).toFixed(1) + '%',
                          top: (c.hotspotY * 100).toFixed(1) + '%',
                        }}
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connector SVG — drawn between hotspot dot and gateway card */}
        {/* <svg className={lineClass} aria-hidden="true">
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="100%" stopColor="rgba(212,163,89,0.7)" />
            </linearGradient>
          </defs>
          <path ref={linePathRef} />
        </svg> */}

        {/* Gateway info card (auto-opens) — using brand tokens from Hero */}
        <aside className={infoClass} ref={cardRef} role="complementary" aria-label={cat.label + ' collection'}>
          <div className="showroom-gateway-body">
            <p className="showroom-g-label font-mono tracking-[0.2em] uppercase text-brand-gold font-medium">Collection</p>
            <h2 className="showroom-g-title font-serif italic font-semibold tracking-wide text-brand-gold leading-tight">{cat.label}</h2>
            <p className="showroom-g-text font-sans leading-relaxed text-brand-cream/70 font-light">{cat.tagline}</p>

            <div className="showroom-g-actions flex flex-row border-t border-brand-gold/20">
              <a href={cat.href} className="group inline-flex flex-1 items-center justify-center gap-2 showroom-btn bg-brand-gold hover:bg-brand-gold-light text-brand-brown-near-black font-sans font-extrabold tracking-[0.15em] uppercase rounded-md border border-brand-gold-light shadow-[0_10px_30px_rgba(212,163,89,0.35)] hover:shadow-[0_14px_36px_rgba(212,163,89,0.55)] transition-all duration-200 whitespace-nowrap">
                Explore
                <svg viewBox="0 0 16 16" className="stroke-current stroke-[1.6] fill-none shrink-0 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </a>
              <a href={cat.href} className="inline-flex flex-1 items-center justify-center showroom-btn bg-brand-purple/85 hover:bg-brand-purple text-brand-cream font-sans font-bold tracking-[0.15em] uppercase rounded-md border border-brand-gold/50 hover:border-brand-gold shadow-[0_10px_28px_rgba(0,0,0,0.5)] transition-all duration-200 whitespace-nowrap">
                View All
              </a>
            </div>
          </div>
        </aside>

        {/* Nav arrows */}
        <button
          className="showroom-arrow showroom-arrow--prev absolute rounded-full flex items-center justify-center bg-brand-brown-near-black/30 border border-brand-cream/20 backdrop-blur-md text-brand-cream cursor-pointer transition-all duration-300 opacity-75 hover:opacity-100 hover:bg-brand-brown-near-black/50 z-30"
          onClick={() => go(-1)}
          aria-label="Previous category"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-brand-cream stroke-[1.3] drop-shadow-sm"><path d="M15 3 6 12l9 9" /></svg>
        </button>
        <button
          className="showroom-arrow showroom-arrow--next absolute rounded-full flex items-center justify-center bg-brand-brown-near-black/30 border border-brand-cream/20 backdrop-blur-md text-brand-cream cursor-pointer transition-all duration-300 opacity-75 hover:opacity-100 hover:bg-brand-brown-near-black/50 z-30"
          onClick={() => go(1)}
          aria-label="Next category"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-brand-cream stroke-[1.3] drop-shadow-sm"><path d="m9 3 9 9-9 9" /></svg>
        </button>

        {/* Progress dots */}
        <div className="showroom-dots absolute left-1/2 -translate-x-1/2 flex z-30" role="tablist" aria-label="Categories">
          {categories.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              aria-selected={i === active}
              className={`showroom-dot rounded-full transition-all duration-400 ease-out cursor-pointer ${i === active ? 'is-active bg-brand-gold border-[1.5px] border-brand-gold' : 'bg-transparent border-[1.5px] border-brand-cream/60 hover:bg-brand-cream/35'}`}
              onClick={() => { go(i > active ? 1 : -1); setActive(i); }}
              aria-label={'View ' + c.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}