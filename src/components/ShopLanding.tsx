import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ChevronLeft, ChevronRight, ShoppingBag, Tag } from 'lucide-react';
import type { CategoryFilter, Product } from '../types';
import { SHOP_PRODUCT_GROUPS } from '../data/shopData';
import { DiamondMotifPattern } from './AfricanPatterns';

/* ════════════════════════════════════════════════════════════════
   SHOP LANDING: everything above the catalogue, in one file.
   Order: 1) Settings  2) Helpers  3) Hero  4) Category cards  5) New in

   YOUR HERO IMAGE: save your photo as  public/shop-hero.jpg  and you're done.
   ════════════════════════════════════════════════════════════════ */

/* ───────────── 1) SETTINGS: edit these ───────────── */
const BRAND = 'SoulSpace';
const BRAND_SUB = 'Creations';
const HERO_IMAGE = '/heroshop.jpg'; // file in your /public folder
const LOGO_SRC = ''; // optional: '/logo.png'. Empty shows the text logo.
const SHOW_TOP_ROW = true; // false if your navbar already shows the logo

// Words on the category cards. The numbers on each card come from your data.
const CATEGORY_COPY = [
  { name: 'Thrift Clothes', line: 'Pre-loved, picked with care', about: 'One-of-one finds with a story already in them. Each piece is chosen for quality, fit and character.' },
  { name: "Women's Bags", line: 'Carry-alls with presence', about: 'Everyday bags with room for the whole day and the finish to lift any outfit.' },
  { name: "Men's Bags", line: 'Structured, made to last', about: 'Clean-lined bags built for the commute and the weekend, made to look better with age.' },
  { name: 'Custom Bags', line: 'Made around you', about: 'Choose the shape, colour and details. Yours is made to order, so no one else carries the same one.' },
  { name: 'New Designs', line: 'Fresh off the bench', about: 'The newest pieces from our studio, released in small runs. Be the first to carry them.' },
  { name: 'Fashion / Accessories', line: 'The finishing touches', about: 'Small pieces that pull an outfit together and make it feel like yours.' },
];

/* ───────────── 2) HELPERS ───────────── */
const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

/** Fades and slides its children in when they scroll into view ('clip' unveils instead) */
const Reveal: React.FC<{ children: React.ReactNode; className?: string; delay?: number; variant?: 'up' | 'clip' }> = ({
  children,
  className = '',
  delay = 0,
  variant = 'up',
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const clip = variant === 'clip';
  const hidden = clip ? '[clip-path:inset(100%_0_0_0)]' : 'translate-y-5 opacity-0';
  const visible = clip ? '[clip-path:inset(0_0_0_0)]' : 'translate-y-0 opacity-100';
  const transition = clip ? 'transition-[clip-path] duration-[1400ms]' : 'transition-[opacity,transform] duration-[900ms]';

  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`${transition} ease-[cubic-bezier(.22,1,.36,1)] ${shown ? visible : hidden} ${className}`}>
      {children}
    </div>
  );
};

/* ───────────── 3) HERO ───────────── */
const FALLBACK_IMAGE = SHOP_PRODUCT_GROUPS.find(g => g.products[0]?.image)?.products[0]?.image;

/** Four nested diamonds, the faint peach pattern in the corners */
const Diamonds: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" fill="none" aria-hidden className={`pointer-events-none absolute z-0 text-brand-terracotta opacity-[0.16] ${className}`}>
    {[[100, 50], [50, 100], [150, 100], [100, 150]].map(([x, y]) => (
      <g key={`${x}-${y}`}>
        <path d={`M${x} ${y - 50}L${x + 50} ${y}L${x} ${y + 50}L${x - 50} ${y}Z`} stroke="currentColor" strokeWidth="14" />
        <path d={`M${x} ${y - 20}L${x + 20} ${y}L${x} ${y + 20}L${x - 20} ${y}Z`} fill="currentColor" />
      </g>
    ))}
  </svg>
);

const Hero: React.FC = () => {
  const [imageFailed, setImageFailed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    // Loads the condensed heading font (Anton) once
    if (!document.getElementById('shop-hero-font')) {
      const link = document.createElement('link');
      link.id = 'shop-hero-font';
      link.rel = 'stylesheet';
      link.href = 'https://fonts.googleapis.com/css2?family=Anton&display=swap';
      document.head.appendChild(link);
    }
    // The arch unveils shortly after the page loads
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setRevealed(true)));
    return () => cancelAnimationFrame(id);
  }, []);

  const src = imageFailed ? FALLBACK_IMAGE : HERO_IMAGE;

  return (
    <section className="relative overflow-hidden bg-brand-cream px-4 pb-10 pt-20 sm:px-6 sm:pt-24 md:min-h-[38rem] lg:min-h-[44rem] lg:px-8 lg:pb-16">
      <Diamonds className="-top-6 left-[46%] w-[clamp(9rem,24vw,18rem)]" />
      <Diamonds className="-bottom-8 -left-8 w-[clamp(7rem,17vw,14rem)]" />

      <div className="mx-auto w-full max-w-7xl">
        {/* Logo and tagline */}
        {SHOW_TOP_ROW && (
          <div className="relative z-10 flex items-center justify-between gap-4">
            {LOGO_SRC ? (
              <img src={LOGO_SRC} alt={`${BRAND} ${BRAND_SUB}`} className="h-12 w-auto sm:h-14" />
            ) : (
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-terracotta text-white sm:h-11 sm:w-11">
                  <ShoppingBag className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-2xl italic leading-none text-brand-brown-dark sm:text-3xl">{BRAND}</p>
                  <p className="mt-1.5 flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.35em] text-brand-brown-dark">
                    <span className="h-px w-3 bg-brand-brown-dark/50" />
                    {BRAND_SUB.toUpperCase()}
                    <span className="h-px w-3 bg-brand-brown-dark/50" />
                  </p>
                </div>
              </div>
            )}
            <p className="hidden items-center gap-3 text-[0.7rem] font-semibold tracking-[0.22em] text-brand-brown-dark sm:flex lg:text-xs">
              FASHION <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" /> STYLE{' '}
              <span className="h-1.5 w-1.5 rounded-full bg-brand-terracotta" /> YOU
            </p>
          </div>
        )}

        {/* Text column. Type sizes scale with the column's own width, so it stays fluid. */}
        <div className="@container relative z-10 mt-10 sm:mt-14 md:mt-16 md:w-[58%] lg:mt-20">
          <Reveal>
            <p className="font-bold tracking-[0.28em] text-brand-brown-dark" style={{ fontSize: 'clamp(0.75rem, 5cqw, 1.6rem)' }}>
              WELCOME TO OUR
            </p>
          </Reveal>

            <h1
              className="mt-2 whitespace-nowrap font-normal uppercase leading-[0.86] text-brand-terracotta"
              style={{ fontFamily: '"Anton", Impact, "Arial Narrow Bold", sans-serif', fontSize: 'min(40cqw, 17rem)' }}
            >
              Shop.
            </h1>

          <Reveal delay={350}>
            <p className="mt-6 max-w-[30ch] text-base leading-relaxed text-brand-brown-dark sm:mt-8 sm:max-w-[34ch] sm:text-lg lg:text-xl">
              Pre-loved finds, handmade bags and the small things that finish an outfit, all in one place.
            </p>
          </Reveal>

          <Reveal delay={480}>
            <button
              type="button"
              onClick={() => scrollToId('categories')}
              className="group mt-8 flex items-center gap-4 focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-brand-terracotta sm:mt-10"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-terracotta text-brand-terracotta transition-colors duration-300 group-hover:bg-brand-terracotta group-hover:text-white">
                <ArrowDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              <span className="font-semibold text-brand-brown-dark">Explore the Collection</span>
              <span aria-hidden className="h-px w-8 bg-brand-terracotta transition-all duration-500 sm:w-16 sm:group-hover:w-28" />
            </button>
          </Reveal>
        </div>

        {/* The arch: under the text on phones, pinned to the right edge from tablet up */}
        
{/* Fashion image */}
<div
  style={{
    '--arch-w': 'clamp(22rem, 43vw, 38rem)',
  } as React.CSSProperties}
  className="
    relative mx-auto mt-8
    h-[min(115vw,34rem)]
    w-[88%]
    md:absolute
    md:bottom-[7%]
    md:right-[4%]
    md:top-[10%]
    md:mt-0
    md:h-auto
    md:w-[var(--arch-w)]
  "
>
  <div
    className={`
      h-full w-full
      overflow-hidden
      rounded-t-[48%]
      rounded-b-none
      bg-brand-terracotta
      transition-[clip-path]
      delay-200
      duration-[1400ms]
      ease-[cubic-bezier(.22,1,.36,1)]
      motion-reduce:transition-none
      ${
        revealed
          ? '[clip-path:inset(0)]'
          : '[clip-path:inset(100%_0_0_0)]'
      }
    `}
  >
    {src && (
      <img
        src={src}
        alt="Our latest fashion collection"
        decoding="async"
        onError={() => setImageFailed(true)}
        className="
          h-full w-full
          object-cover
          object-center
        "
      />
    )}
  </div>
</div>

      </div>
    </section>
  );
};

/* ───────────── 4) CATEGORY CARDS (carousel) ───────────── */
const toNumber = (s?: string) => {
  const n = parseFloat((s ?? '').replace(/[^0-9.]/g, ''));
  return Number.isFinite(n) && n > 0 ? n : null;
};

const CARDS = CATEGORY_COPY.map(c => {
  const groups = SHOP_PRODUCT_GROUPS.filter(g => g.category === c.name);
  const products = groups.flatMap(g => g.products);
  const cheapest = products
    .map(p => ({ label: p.price, n: toNumber(p.price) }))
    .filter(p => p.n !== null)
    .sort((a, b) => (a.n as number) - (b.n as number))[0];
  return {
    ...c,
    pieces: groups.length,
    styles: products.length,
    fresh: groups.filter(g => g.isNew).length,
    from: cheapest?.label || 'Inquire',
    image: products[0]?.image,
  };
});

const Categories: React.FC<{ onOpen: (category: string) => void }> = ({ onOpen }) => {
  const [active, setActive] = useState(2);
  const drag = useRef({ x: 0, moved: false });
  const last = CARDS.length - 1;
  const step = (d: number) => setActive(a => Math.min(last, Math.max(0, a + d)));

  const onCardClick = (e: React.MouseEvent, i: number, name: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    if (drag.current.moved) return;
    if (i === active) onOpen(name);
    else setActive(i);
  };

  const arrowBtn =
    'flex h-11 w-11 items-center justify-center rounded-full border border-brand-cream/30 transition-colors hover:border-brand-terracotta hover:bg-brand-terracotta disabled:opacity-30 disabled:hover:border-brand-cream/30 disabled:hover:bg-transparent';

  return (
    <section
      id="categories"
      className="relative scroll-mt-12 overflow-hidden bg-brand-brown-dark py-16 text-brand-cream sm:py-24"
      onKeyDown={e => {
        if (e.key === 'ArrowLeft') step(-1);
        if (e.key === 'ArrowRight') step(1);
      }}
    >
      <DiamondMotifPattern className="pointer-events-none absolute inset-0 text-brand-cream" opacity={0.05} />
      <div className="pointer-events-none absolute inset-x-0 top-1/3 mx-auto h-96 max-w-3xl rounded-full bg-brand-terracotta/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">Find your piece</h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-cream/70 sm:text-base">
            Swipe through the six collections. Tap the centre card to open it.
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div
            className="relative mx-auto mt-10 h-[33rem] w-full max-w-6xl touch-pan-y select-none overflow-x-clip sm:mt-14"
            onPointerDown={e => {
              drag.current = { x: e.clientX, moved: false };
            }}
            onPointerMove={e => {
              if (e.buttons && Math.abs(e.clientX - drag.current.x) > 10) drag.current.moved = true;
            }}
            onPointerUp={e => {
              const dx = e.clientX - drag.current.x;
              if (Math.abs(dx) > 45) step(dx < 0 ? 1 : -1);
            }}
          >
            {CARDS.map((c, i) => {
              const off = i - active;
              const abs = Math.abs(off);
              const hidden = abs > 2;
              return (
                <a
                  key={c.name}
                  href="#catalogue"
                  onClick={e => onCardClick(e, i, c.name)}
                  draggable={false}
                  aria-hidden={hidden}
                  tabIndex={hidden ? -1 : 0}
                  aria-label={off === 0 ? `Open ${c.name}` : `Show ${c.name}`}
                  style={{
                    transform: `translateX(calc(-50% + ${off * 62}%)) scale(${Math.max(0.6, 1 - abs * 0.13)})`,
                    opacity: hidden ? 0 : 1,
                    zIndex: 10 - abs,
                    pointerEvents: hidden ? 'none' : 'auto',
                  }}
                  className="group absolute left-1/2 top-0 flex h-[31rem] w-[17.5rem] flex-col rounded-[2rem] bg-white p-3 text-brand-brown-dark shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] transition-[transform,opacity] duration-700 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta sm:w-[19rem]"
                >
                  {/* Photo */}
                  <div className="relative h-48 shrink-0 overflow-hidden rounded-[1.5rem] bg-[#EDE5D8]">
                    {c.image ? (
                      <img
                        src={c.image}
                        alt=""
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                      />
                    ) : (
                      <DiamondMotifPattern className="absolute inset-0 text-brand-terracotta" opacity={0.3} />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col px-2.5 pb-1 pt-4">
                    <h3 className="font-display text-2xl font-semibold leading-tight">{c.name}</h3>
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium">
                      <Tag className="h-3.5 w-3.5 shrink-0 text-brand-terracotta" />
                      {c.line}
                    </p>

                    <p className="mt-3 text-xs font-semibold">The edit</p>
                    <p className="mt-1 line-clamp-3 text-[11px] leading-relaxed text-brand-brown/70">{c.about}</p>

                    <dl className="mt-4 grid grid-cols-3 gap-2">
                      {[
                        ['Pieces', c.pieces],
                        ['Styles', c.styles],
                        ['New', c.fresh],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-[11px] text-brand-brown/60">{label}</dt>
                          <dd className="mt-0.5 text-base font-bold text-brand-terracotta">{value}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-auto flex items-end justify-between pt-4">
                      <div>
                        <p className="text-[11px] text-brand-brown/60">Starting from</p>
                        <p className="font-display text-xl font-bold leading-tight">{c.from}</p>
                      </div>
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-brown-dark text-white transition-colors duration-500 group-hover:bg-brand-terracotta">
                        <ArrowRight className="h-5 w-5 transition-transform duration-500 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>

                  {/* Side cards sit back in the shade */}
                  <span
                    aria-hidden
                    style={{ opacity: Math.min(abs * 0.3, 0.6) }}
                    className="pointer-events-none absolute inset-0 rounded-[2rem] bg-brand-brown-dark transition-opacity duration-700"
                  />
                </a>
              );
            })}
          </div>
        </Reveal>

        {/* Arrows and dots */}
        <div className="mt-6 flex items-center justify-center gap-5">
          <button type="button" onClick={() => step(-1)} disabled={active === 0} aria-label="Previous collection" className={arrowBtn}>
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-2">
            {CARDS.map((c, i) => (
              <button
                key={c.name}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show ${c.name}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all duration-500 ${i === active ? 'w-7 bg-brand-terracotta' : 'w-2 bg-brand-cream/35 hover:bg-brand-cream/60'}`}
              />
            ))}
          </div>
          <button type="button" onClick={() => step(1)} disabled={active === last} aria-label="Next collection" className={arrowBtn}>
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="sr-only" aria-live="polite">{CARDS[active].name}</p>
      </div>
    </section>
  );
};

/* ───────────── 5) NEW IN ───────────── */
const NewIn: React.FC<{ onOpen: (category: string) => void; onSelectProduct: (product: Product) => void }> = ({ onOpen, onSelectProduct }) => {
  const items = SHOP_PRODUCT_GROUPS.filter(g => g.isNew).slice(0, 4);
  if (items.length === 0) return null;

  return (
    <section className="border-t border-brand-brown-ink/10 bg-brand-cream py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-6 sm:mb-12">
          <h2 className="font-display text-4xl font-bold italic leading-none text-brand-brown-dark sm:text-5xl lg:text-6xl">New in</h2>
          <button
            type="button"
            onClick={() => onOpen('New Designs')}
            className="group inline-flex shrink-0 items-center gap-2 border-b border-brand-brown-dark/40 pb-1 text-sm font-semibold text-brand-brown-dark transition-colors hover:border-brand-terracotta hover:text-brand-terracotta"
          >
            View all new designs
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-8">
          {items.map(group => {
            const p = group.products[0];
            return (
              <button
                key={group.id}
                type="button"
                onClick={() => onSelectProduct(p)}
                className="group flex min-w-0 flex-col text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-terracotta"
              >
                <div className="relative aspect-3/4 w-full overflow-hidden rounded-sm bg-[#EDE5D8]">
                  <img
                    src={p.image}
                    alt={group.name}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-x-0 bottom-0 translate-y-full bg-brand-brown-dark py-3 text-center text-xs font-semibold text-brand-cream transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-y-0">
                    Quick view
                  </span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <h3 className="min-w-0 font-display text-[13px] font-semibold leading-snug text-brand-brown-dark transition-colors group-hover:text-brand-terracotta sm:text-sm lg:text-base">
                    {group.name}
                  </h3>
                  <span className="shrink-0 whitespace-nowrap font-display text-[13px] font-bold text-brand-brown-dark sm:text-sm lg:text-base">
                    {p.price || 'Inquire'}
                  </span>
                </div>
                <p className="mt-1.5 text-xs leading-relaxed text-brand-brown/75 sm:text-sm">{p.subtitle}</p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ───────────── The landing: hero, category cards, new in ───────────── */
interface ShopLandingProps {
  /** Called when a category card is chosen */
  onSelectCategory: (category: CategoryFilter) => void;
  onSelectProduct: (product: Product) => void;
}

export const ShopLanding: React.FC<ShopLandingProps> = ({ onSelectCategory, onSelectProduct }) => {
  const openCategory = (category: string) => {
    onSelectCategory(category as CategoryFilter);
    requestAnimationFrame(() => scrollToId('catalogue'));
  };

  return (
    <>
      <Hero />
      <Categories onOpen={openCategory} />
      <NewIn onOpen={openCategory} onSelectProduct={onSelectProduct} />
    </>
  );
};