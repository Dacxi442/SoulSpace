import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Compass, ShieldCheck, Upload } from 'lucide-react';
import {
  DiamondMotifPattern,
  ArchitecturalGridLines
} from './AfricanPatterns';
import { PRODUCTS, HERO_IMAGE, BACKPACK_IMAGE } from '../data/bagsData';
import { Product } from '../types';
import heroPoster from '../assets/images/user_video_pan_part1_1790889807111.jpg';
import { SITE_CONTENT } from '../data/siteContent';

const H1_TARGET = SITE_CONTENT.hero.title;
const H2_TARGETS = SITE_CONTENT.hero.subtitles;

export interface HeroProps {
  onExplore: () => void;
  onOpenBespoke: () => void;
  onSelectProduct: (product: Product) => void;
  onViewGallery?: () => void;
  videoSrc?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  onOpenBespoke,
  onSelectProduct,
  onViewGallery,
  videoSrc = '/videos/hero-bags.mp4'
}) => {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [customVideoUrl, setCustomVideoUrl] = useState<string | null>(null);
  const [isDraggingVideo, setIsDraggingVideo] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Typing effect states
  const [h1Text, setH1Text] = useState("");
  const [h2Text, setH2Text] = useState("");
  const [h2Index, setH2Index] = useState(0);
  const [typingPhase, setTypingPhase] = useState<'type' | 'pause' | 'delete'>('type');

  useEffect(() => {
    let timeout: number;
    const h2Target = H2_TARGETS[h2Index % H2_TARGETS.length];

    if (typingPhase === 'type') {
      if (h1Text.length < H1_TARGET.length || h2Text.length < h2Target.length) {
        timeout = window.setTimeout(() => {
          setH1Text(H1_TARGET.substring(0, h1Text.length + 1));
          setH2Text(h2Target.substring(0, h2Text.length + 1));
        }, 70); // Slightly faster typing
      } else {
        timeout = window.setTimeout(() => setTypingPhase('pause'), 3000);
      }
    } else if (typingPhase === 'pause') {
      setTypingPhase('delete');
    } else if (typingPhase === 'delete') {
      if (h1Text.length > 0 || h2Text.length > 0) {
        timeout = window.setTimeout(() => {
          setH1Text(H1_TARGET.substring(0, Math.max(0, h1Text.length - 1)));
          setH2Text(h2Target.substring(0, Math.max(0, h2Text.length - 1)));
        }, 30); // Faster deletion
      } else {
        timeout = window.setTimeout(() => {
          setH2Index(prev => prev + 1);
          setTypingPhase('type');
        }, 400); // Wait before re-typing
      }
    }

    return () => window.clearTimeout(timeout);
  }, [h1Text, h2Text, typingPhase, h2Index]);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Signature bags from the existing hero data
  const heroBags: Product[] = [
    PRODUCTS[0], // Solstice Grand Tote
    PRODUCTS.find((p) => p.id === 'ss-backpack-ashanti') || ({
      id: 'ss-backpack-ashanti',
      name: 'Ashanti Sculpted Rucksack',
      subtitle: 'Hand-Cut Terracotta Leather & African Tribal Inlay',
      category: 'New Designs',
      price: '$410',
      image: BACKPACK_IMAGE,
      secondaryImage: HERO_IMAGE,
      description:
        'An architectural everyday luxury backpack crafted from vegetable-tanned terracotta leather with an authentic geometric woven African tribal inlay.',
      craftDetails: ['Sculptural curved flap', 'Solid brass buckle clasp'],
      dimensions: '39cm x 29cm x 13cm',
      materials:
        'Burnished Terracotta Leather, African Geometric Weave, Solid Antiqued Brass Clasp',
      isFeatured: true,
      isNew: true,
      colorways: ['Terracotta & Ochre']
    } as Product),
    PRODUCTS[1], // Zaria Arch Crossbody
    PRODUCTS[2]  // Kalahari Weekender Duffle
  ];

  const currentBag = heroBags[activeHeroIndex] || heroBags[0];
  const activeVideoSource = customVideoUrl || videoSrc;

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay fallback handled silently
      });
    }
  }, [activeVideoSource]);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const handleViewGalleryClick = () => {
    if (onViewGallery) {
      onViewGallery();
      return;
    }
    onOpenBespoke();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setCustomVideoUrl(url);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDraggingVideo(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDraggingVideo(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setIsDraggingVideo(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('video/')) {
      const url = URL.createObjectURL(file);
      setCustomVideoUrl(url);
    }
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="relative mt-20 min-h-[calc(100dvh-5rem)] w-full pt-8 pb-8 sm:pt-10 sm:pb-10 lg:pt-12 lg:pb-12 flex flex-col justify-between overflow-x-hidden overflow-y-auto bg-brand-brown-near-black select-none"
    >
      {/* =====================================================================
          LAYER 1: FULL-SECTION BACKGROUND VIDEO (3D Perspective Stage)
          The uploaded bag video fills the entire Hero section background
      ===================================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden hero-perspective-stage">
        <video
          ref={videoRef}
          src={activeVideoSource}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          style={{
            transform: prefersReducedMotion
              ? 'scale(1.02)'
              : `perspective(1400px) scale(1.06) rotateX(${mousePos.y * -2.5}deg) rotateY(${mousePos.x * 2.5}deg) translate3d(${mousePos.x * -14}px, ${mousePos.y * -10}px, 0)`
          }}
          aria-label="Soul Space Creations moving bag collection background video"
        />

        {/* ===================================================================
            LAYER 2: MEASURED CONTRAST & COLOR-WORLD SCRIMS
            Keeps the moving bags in the video vivid and clearly visible while
            making all foreground typography and CTAs stand out sharply
        =================================================================== */}
        {/* Top editorial scrim so the Brand Title, Headline, and Description stand out crisply */}
        <div
          className="absolute inset-x-0 top-0 h-[58%] bg-linear-to-b from-brand-brown-near-black/80 via-brand-brown-dark/45 to-transparent"
          aria-hidden="true"
        />

        <div
          className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-brand-cream/95 via-brand-cream/70 to-transparent"
          aria-hidden="true"
        />

        {/* Bottom stage scrim so the Explore Collection & View Gallery CTAs stand out over any frame */}
        <div
          className="absolute inset-x-0 bottom-0 h-[50%] bg-linear-to-t from-brand-brown-near-black/90 via-brand-purple-deep/50 to-transparent"
          aria-hidden="true"
        />

        {/* Subtle perimeter vignette in Royal Purple & Warm Gold */}
        <div
          className="absolute inset-0 bg-radial from-transparent via-brand-brown-near-black/15 to-brand-brown-near-black/65"
          aria-hidden="true"
        />

        {/* Subtle African Geometric Pattern & Architectural Grid Overlay */}
        <DiamondMotifPattern
          className="text-brand-gold absolute inset-0"
          opacity={0.075}
        />
        <ArchitecturalGridLines className="opacity-35" />
      </div>

      {/* Optional Drag-and-Drop Video Highlight Ring */}
      {/* {isDraggingVideo && (
        <div className="pointer-events-none absolute inset-4 z-50 rounded-2xl border-2 border-dashed border-brand-gold bg-brand-brown-near-black/60 backdrop-blur-xs flex items-center justify-center">
          <div className="px-6 py-4 rounded-lg bg-brand-brown-dark border border-brand-gold/50 text-brand-cream font-display font-bold text-base tracking-wide">
            Drop your video file here to set as full section background
          </div>
        </div>
      )} */}

      {/* Subtle Top-Right Video File Loader (allows instant local video file swap if desired) */}
      <div className="relative z-30 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-brand-brown-near-black/65 backdrop-blur-md border border-brand-gold/35 text-brand-cream shadow-md">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" aria-hidden="true" />
          <span className="text-[6px] sm:text-[10px] font-mono tracking-[0.2em] uppercase text-brand-cream font-medium">
            Soul Space Creations · Limited Edition
          </span>
        </div>

        {/* <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="video/*"
            onChange={handleFileChange}
            className="hidden"
            aria-label="Upload your original video file"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-brand-brown-near-black/65 hover:bg-brand-brown-near-black/90 text-brand-cream/90 hover:text-brand-gold border border-brand-gold/30 hover:border-brand-gold backdrop-blur-md transition-all text-[11px] font-mono uppercase tracking-wider cursor-pointer shadow-md"
            title="Select your local video file if you want to swap the background video"
          >
            <Upload className="w-3.5 h-3.5 text-brand-gold" />
            <span>Use Local Video</span>
          </button>
        </div> */}
      </div>

      {/* =====================================================================
          LAYER 3: UPPER HERO CONTENT (BRAND / HEADLINE / SUPPORTING TEXT)
          Positioned over the upper area of the full-bleed background video
      ===================================================================== */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-auto py-6 sm:py-8 flex flex-col items-center text-center">
        <div
          className="max-w-4xl mx-auto space-y-4 sm:space-y-5 transition-transform duration-500 ease-out"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(${mousePos.x * 10}px, ${mousePos.y * 8}px, 20px)`
          }}
        >
          {/* Main Title Hierarchy */}
          <div className="relative w-full">
            {/* Invisible ghost placeholder to prevent ANY height shifting on small screens */}
            <div className="space-y-4 w-full invisible pointer-events-none select-none" aria-hidden="true">
              <h1 className="font-sans itallic font-bold text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl lg:whitespace-nowrap tracking-tight leading-[0.94] text-balance">
                {SITE_CONTENT.hero.title}
              </h1>
              <h2 className="block font-sans font-light text-2xl sm:text-4xl md:text-5xl lg:text-[3.35rem] mt-2 tracking-wide">
                {SITE_CONTENT.hero.subtitles[2]}
              </h2>
            </div>

            {/* The animated visible text overlays perfectly over the ghost structure */}
            <div className="space-y-4 w-full absolute inset-0">
              <h1 className="font-sans italic font-bold text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl lg:whitespace-nowrap tracking-tight text-brand-cream leading-[0.94] drop-shadow-[0_6px_28px_rgba(0,0,0,0.85)] text-balance">
                {SITE_CONTENT.hero.title}
              </h1>
              <h2 className="block font-serif font-light text-2xl sm:text-4xl md:text-5xl lg:text-[3.35rem] text-brand-gold-light mt-2 tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.85)]">
                {h2Text || '\u00A0'}
              </h2>
            </div>
          </div>

          {/* <div className="pt-2">
              <p className="font-serif text-2xl sm:text-3xl md:text-4xl italic text-brand-gold font-semibold leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                Handmade. Designed around you.
              </p>
            </div> */}

          {/* Supporting Narrative Copy in a high-contrast translucent editorial backdrop */}
          <div className="w-full max-w-2xl mx-auto px-5 sm:px-6 py-5 sm:py-6 rounded-xl bg-brand-brown-near-black/30 backdrop-blur-md border border-brand-gold/25 shadow-[0_16px_40px_rgba(0,0,0,0.5)]">
            <p className="font-serif text-xl sm:text-3xl md:text-4xl italic text-brand-gold font-semibold leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
              {SITE_CONTENT.hero.tagline}
            </p>

            {/* Quick Bag Feature Highlights // Stacked on mobile, 3-Column on sm+ */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 pt-5 mt-5 border-t border-brand-gold/20">
              <div className="min-w-0 flex items-center sm:items-start gap-3 sm:block">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 sm:hidden"></span>
                <div className="font-sans font-bold text-base sm:text-lg md:text-xl leading-tight text-brand-gold">
                  {SITE_CONTENT.hero.features[0]}
                </div>
              </div>
              <div className="min-w-0 flex items-center sm:items-start gap-3 sm:block">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-terracotta-vivid shrink-0 sm:hidden"></span>
                <div className="font-sans font-bold text-base sm:text-lg md:text-xl leading-tight text-brand-terracotta-vivid">
                  {SITE_CONTENT.hero.features[1]}
                </div>
              </div>
              <div className="min-w-0 flex items-center sm:items-start gap-3 sm:block">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light shrink-0 sm:hidden"></span>
                <div className="font-sans font-bold text-base sm:text-lg md:text-xl leading-tight text-brand-gold-light">
                  {SITE_CONTENT.hero.features[2]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
          LAYER 4: INTEGRATED CTA STAGE DOCK ON THE VIDEO
          Explore Collection & View Gallery buttons + Featured Silhouette Switcher
      ===================================================================== */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className="w-full mx-auto flex justify-center transition-transform duration-500 ease-out"
          style={{
            transform: prefersReducedMotion
              ? 'none'
              : `translate3d(${mousePos.x * 6}px, ${mousePos.y * 4}px, 30px)`
          }}
        >
          {/* Primary & Secondary CTA Buttons Positioned on the Video */}
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-3.5">
            {/* Primary CTA: Explore Collection */}
            <button
              id="btn-hero-explore"
              type="button"
              onClick={onExplore}
              className="group inline-flex w-[85%] max-w-[280px] sm:max-w-none items-center justify-center gap-3 px-6 py-4 text-sm sm:w-auto sm:px-7 sm:py-4 sm:text-base bg-brand-gold hover:bg-brand-gold-light text-brand-brown-near-black font-extrabold tracking-[0.15em] uppercase rounded-md border border-brand-gold-light shadow-[0_10px_30px_rgba(212,175,55,0.35)] hover:shadow-[0_14px_36px_rgba(212,175,55,0.55)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-cream"
            >
              <span>{SITE_CONTENT.hero.primaryCta}</span>
              <ArrowRight className="w-5 h-5 text-brand-brown-near-black group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* Secondary CTA: View Gallery */}
            <button
              id="btn-hero-gallery"
              type="button"
              onClick={handleViewGalleryClick}
              className="group inline-flex w-[85%] max-w-[280px] sm:max-w-none items-center justify-center gap-3 px-6 py-4 text-sm sm:w-auto sm:px-7 sm:py-4 sm:text-base bg-brand-purple/85 hover:bg-brand-purple text-brand-cream font-bold tracking-[0.15em] uppercase rounded-md border border-brand-gold/50 hover:border-brand-gold shadow-[0_10px_28px_rgba(0,0,0,0.5)] transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              <Compass className="w-5 h-5 text-brand-gold group-hover:rotate-12 transition-transform duration-200" />
              <span>{SITE_CONTENT.hero.secondaryCta}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
