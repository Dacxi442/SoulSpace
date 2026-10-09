import React, { useId } from 'react';

/**
 * Reusable African Pattern System
 * Inspired by Reference 1 (Geometric abstraction, architectural gridlines, fragmentation)
 * and Reference 2 (Concentric circular sunbursts, interlocking diamonds, chevron borders, organic feathers)
 */

export const DiamondMotifPattern: React.FC<{
  className?: string;
  opacity?: number;
  color?: string;
}> = ({
  className = '',
  opacity = 0.08,
  color
}) => {
  const rawId = useId();
  const patternId = `ss-diamond-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <svg
      className={`pointer-events-none select-none ${className}`}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} width="60" height="60" patternUnits="userSpaceOnUse">
          {/* Diamond Outer */}
          <polygon points="30,5 55,30 30,55 5,30" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" />
          {/* Diamond Inner */}
          <polygon points="30,15 45,30 30,45 15,30" fill="none" stroke={color || "currentColor"} strokeWidth="1" />
          {/* Central Core */}
          <circle cx="30" cy="30" r="3" fill={color || "currentColor"} />
          {/* Corner chevrons */}
          <path d="M 0,15 L 15,0 M 60,15 L 45,0 M 0,45 L 15,60 M 60,45 L 45,60" stroke={color || "currentColor"} strokeWidth="1" />
          {/* Accent dots */}
          <circle cx="5" cy="5" r="1.5" fill={color || "currentColor"} />
          <circle cx="55" cy="5" r="1.5" fill={color || "currentColor"} />
          <circle cx="5" cy="55" r="1.5" fill={color || "currentColor"} />
          <circle cx="55" cy="55" r="1.5" fill={color || "currentColor"} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

export const ArchitecturalGridLines: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
    {/* Fine alignment lines */}
    <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand-terracotta/15 to-transparent hidden md:block" />
    <div className="absolute right-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-brand-terracotta/15 to-transparent hidden md:block" />
  </div>
);

export const ConcentricSunburstRosette: React.FC<{ className?: string; size?: number; color?: string }> = ({
  className = '',
  size = 280,
  color = '#D95A2B'
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`pointer-events-none select-none ${className}`}
    aria-hidden="true"
  >
    {/* Outer segmented ring */}
    <circle cx="100" cy="100" r="92" stroke={color} strokeWidth="1" strokeDasharray="4 6" opacity="0.35" />
    <circle cx="100" cy="100" r="82" stroke={color} strokeWidth="1.5" opacity="0.45" />
    
    {/* Geometric notched teeth */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 360) / 24;
      return (
        <line
          key={i}
          x1="100"
          y1="18"
          x2="100"
          y2="28"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
          transform={`rotate(${angle} 100 100)`}
        />
      );
    })}

    {/* Middle decorative ring with dots */}
    <circle cx="100" cy="100" r="64" stroke={color} strokeWidth="1" opacity="0.5" />
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <circle
          key={`dot-${i}`}
          cx="100"
          cy="42"
          r="2.5"
          fill={color}
          opacity="0.75"
          transform={`rotate(${angle} 100 100)`}
        />
      );
    })}

    {/* Inner diamond sun rays */}
    <circle cx="100" cy="100" r="48" stroke={color} strokeWidth="1.5" opacity="0.6" />
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8;
      return (
        <polygon
          key={`ray-${i}`}
          points="100,56 104,74 100,80 96,74"
          fill={color}
          opacity="0.7"
          transform={`rotate(${angle} 100 100)`}
        />
      );
    })}

    {/* Center core spiral / concentric */}
    <circle cx="100" cy="100" r="28" stroke={color} strokeWidth="2" opacity="0.7" />
    <circle cx="100" cy="100" r="16" fill={color} opacity="0.2" />
    <circle cx="100" cy="100" r="8" fill={color} opacity="0.8" />
  </svg>
);

export const AfricanPatternBorderRibbon: React.FC<{ className?: string; color?: string }> = ({
  className = '',
  color = '#D95A2B'
}) => {
  const rawId = useId();
  const patternId = `ss-ribbon-${rawId.replace(/[^a-zA-Z0-9_-]/g, '')}`;

  return (
    <div className={`w-full overflow-hidden select-none pointer-events-none py-1.5 flex items-center ${className}`} aria-hidden="true">
      <div className="w-full h-5 flex items-center" style={{ opacity: 0.65 }}>
        <svg width="100%" height="20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={patternId} width="70" height="20" patternUnits="userSpaceOnUse">
              {/* Top boundary */}
              <line x1="0" y1="2" x2="70" y2="2" stroke={color} strokeWidth="1" />
              {/* Central diamond */}
              <polygon points="35,3 47,10 35,17 23,10" fill="none" stroke={color} strokeWidth="1.2" />
              <circle cx="35" cy="10" r="2" fill={color} />
              {/* Side chevrons */}
              <polyline points="5,4 12,10 5,16" fill="none" stroke={color} strokeWidth="1" />
              <polyline points="65,4 58,10 65,16" fill="none" stroke={color} strokeWidth="1" />
              {/* Mini dots */}
              <circle cx="18" cy="10" r="1.5" fill={color} />
              <circle cx="52" cy="10" r="1.5" fill={color} />
              {/* Bottom boundary */}
              <line x1="0" y1="18" x2="70" y2="18" stroke={color} strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="20" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
};

export const AbstractArtFragment: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`relative overflow-hidden select-none pointer-events-none ${className}`} aria-hidden="true">
    {/* Architectural block layers inspired by Reference 1 */}
    <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-linear-to-tr from-brand-terracotta-vivid to-brand-gold opacity-25 blur-2xl" />
    <div className="absolute top-1/4 -left-12 w-32 h-64 bg-brand-purple/20 -rotate-12 backdrop-blur-sm border-l border-t border-brand-terracotta/20" />
    <div className="absolute bottom-8 right-12 w-28 h-28 border border-brand-gold/30 rotate-45" />
  </div>
);

/**
 * Interactive African Geometric Compass / Solar Mandala
 * Responds to mouse hover with magnetic rotation, scale, inner orbital rotation,
 * and illuminating glow effects.
 */
export const InteractiveAfricanSolarMotif: React.FC<{
  size?: number;
  className?: string;
  label?: string;
}> = ({ size = 180, className = '', label }) => {
  const [hovered, setHovered] = React.useState(false);
  const [mouseOffset, setMouseOffset] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;
    setMouseOffset({ x: x * 20, y: y * 20 });
  };

  const handleMouseLeave = () => {
    setHovered(false);
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group relative cursor-pointer select-none transition-all duration-500 ease-out flex flex-col items-center justify-center ${className}`}
      style={{
        transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0) scale(${hovered ? 1.08 : 1})`,
        transition: hovered ? 'transform 0.15s ease-out' : 'transform 0.5s ease-out'
      }}
    >
      {/* Ambient solar backlight on hover */}
      <div
        className={`absolute rounded-full bg-linear-to-r from-brand-terracotta via-brand-gold to-brand-purple blur-xl pointer-events-none transition-opacity duration-500 ${
          hovered ? 'opacity-40 scale-125' : 'opacity-10 scale-90'
        }`}
        style={{ width: size, height: size }}
      />

      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `rotate(${hovered ? 45 : 0}deg)`
        }}
      >
        {/* Outer segmented architectural ring */}
        <circle
          cx="100"
          cy="100"
          r="92"
          stroke="#D4A359"
          strokeWidth="1.2"
          strokeDasharray="4 6"
          className="transition-all duration-500"
          style={{
            stroke: hovered ? '#E86D3C' : '#D4A359',
            opacity: hovered ? 0.9 : 0.45
          }}
        />

        {/* Dynamic 24 solar tooth beams */}
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="100"
              y1={hovered ? '10' : '18'}
              x2="100"
              y2={hovered ? '32' : '26'}
              stroke={i % 2 === 0 ? '#D95A2B' : '#D4A359'}
              strokeWidth={hovered ? '2' : '1.5'}
              strokeLinecap="round"
              className="transition-all duration-300"
              transform={`rotate(${angle} 100 100)`}
            />
          );
        })}

        {/* Middle Chevron Ring with rotating inner orbit */}
        <g
          className="transition-transform duration-1000 ease-out"
          style={{
            transform: `rotate(${hovered ? -90 : 0}deg)`,
            transformOrigin: '100px 100px'
          }}
        >
          <circle cx="100" cy="100" r="62" stroke="#FAF7F2" strokeWidth="1" strokeDasharray="3 3" opacity={hovered ? 0.8 : 0.3} />

          {/* 8 Interlocking Diamond Petals */}
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * 360) / 8;
            return (
              <polygon
                key={`petal-${i}`}
                points="100,42 108,60 100,74 92,60"
                fill={hovered ? '#D95A2B' : 'none'}
                stroke={hovered ? '#D4A359' : '#D95A2B'}
                strokeWidth="1.2"
                opacity={hovered ? 0.95 : 0.65}
                className="transition-all duration-300"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}

          {/* 16 African Chevron Stamping Marks */}
          {Array.from({ length: 16 }).map((_, i) => {
            const angle = (i * 360) / 16;
            return (
              <circle
                key={`bead-${i}`}
                cx="100"
                cy="38"
                r={hovered ? '3' : '2'}
                fill={hovered ? '#FAF7F2' : '#D4A359'}
                className="transition-all duration-300"
                transform={`rotate(${angle} 100 100)`}
              />
            );
          })}
        </g>

        {/* Center Concentric Golden Core with Eye of African Wisdom */}
        <circle cx="100" cy="100" r="30" fill="#160F0C" stroke="#D95A2B" strokeWidth="2" />
        <circle cx="100" cy="100" r="20" stroke="#D4A359" strokeWidth="1.5" strokeDasharray="2 3" />
        <circle
          cx="100"
          cy="100"
          r={hovered ? '10' : '7'}
          fill={hovered ? '#E86D3C' : '#D4A359'}
          className="transition-all duration-300"
        />
        <polygon
          points="100,85 110,100 100,115 90,100"
          fill="none"
          stroke="#FAF7F2"
          strokeWidth="1.2"
          opacity={hovered ? 1 : 0.6}
        />
      </svg>

      {label && (
        <span
          className={`mt-2 font-mono text-[10px] tracking-widest uppercase transition-colors duration-300 ${
            hovered ? 'text-brand-terracotta' : 'text-brand-cream/50'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

/**
 * Interactive Tapestry Pattern Strip
 * A series of handcrafted geometric African symbols (Gye Nyame harmony, chevron stairs,
 * sunbursts, and diamond matrices) that interactively animate, tilt, and illuminate on hover.
 */
export const InteractiveAfricanPatternStrip: React.FC<{
  className?: string;
  theme?: 'dark' | 'light';
}> = ({ className = '', theme = 'dark' }) => {
  const isDark = theme === 'dark';

  const motifs = [
    {
      id: 'diamond-eye',
      name: 'Ashanti Diamond',
      meaning: 'Ancestral Vision & Protection',
      render: (isH: boolean) => (
        <svg viewBox="0 0 60 60" className="w-10 h-10 transition-transform duration-300">
          <polygon points="30,4 56,30 30,56 4,30" fill={isH ? '#D95A2B' : 'none'} stroke={isH ? '#D4A359' : '#D95A2B'} strokeWidth="1.5" />
          <polygon points="30,12 48,30 30,48 12,30" fill="none" stroke={isH ? '#FAF7F2' : '#D4A359'} strokeWidth="1.2" />
          <circle cx="30" cy="30" r={isH ? 5 : 3.5} fill={isH ? '#FAF7F2' : '#D95A2B'} />
        </svg>
      )
    },
    {
      id: 'sun-rosette',
      name: 'Sahara Sunburst',
      meaning: 'Vitality & Creative Energy',
      render: (isH: boolean) => (
        <svg viewBox="0 0 60 60" className={`w-10 h-10 transition-transform duration-500 ${isH ? 'rotate-90 scale-110' : ''}`}>
          <circle cx="30" cy="30" r="24" stroke="#D4A359" strokeWidth="1" strokeDasharray="2 3" />
          <circle cx="30" cy="30" r="16" fill={isH ? '#D95A2B' : '#3D1A39'} stroke="#D4A359" strokeWidth="1.2" />
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="30"
              y1="4"
              x2="30"
              y2="10"
              stroke={isH ? '#FAF7F2' : '#D95A2B'}
              strokeWidth="1.5"
              transform={`rotate(${i * 45} 30 30)`}
            />
          ))}
          <circle cx="30" cy="30" r="5" fill="#FAF7F2" />
        </svg>
      )
    },
    {
      id: 'chevron-ladder',
      name: 'Adinkra Step',
      meaning: 'Ascent & Master Craftsmanship',
      render: (isH: boolean) => (
        <svg viewBox="0 0 60 60" className="w-10 h-10 transition-transform duration-300">
          <polyline points="10,48 30,28 50,48" fill="none" stroke={isH ? '#E86D3C' : '#D95A2B'} strokeWidth="2" />
          <polyline points="10,36 30,16 50,36" fill="none" stroke={isH ? '#D4A359' : '#D95A2B'} strokeWidth="2" />
          <polyline points="10,24 30,4 50,24" fill="none" stroke={isH ? '#FAF7F2' : '#D4A359'} strokeWidth="2" />
          <circle cx="30" cy="4" r={isH ? 3.5 : 2} fill="#D95A2B" />
        </svg>
      )
    },
    {
      id: 'kente-lattice',
      name: 'Kente Geometry',
      meaning: 'Interwoven Community Strength',
      render: (isH: boolean) => (
        <svg viewBox="0 0 60 60" className={`w-10 h-10 transition-transform duration-300 ${isH ? 'scale-110' : ''}`}>
          <rect x="8" y="8" width="44" height="44" fill="none" stroke="#D4A359" strokeWidth="1.2" />
          <line x1="8" y1="30" x2="52" y2="30" stroke={isH ? '#D95A2B' : '#D4A359'} strokeWidth="1.5" />
          <line x1="30" y1="8" x2="30" y2="52" stroke={isH ? '#D95A2B' : '#D4A359'} strokeWidth="1.5" />
          <polygon points="30,14 44,30 30,46 16,30" fill={isH ? '#3D1A39' : 'none'} stroke="#FAF7F2" strokeWidth="1.2" />
          <circle cx="30" cy="30" r="3" fill="#D95A2B" />
        </svg>
      )
    },
    {
      id: 'lunar-crest',
      name: 'Zaria Crescent',
      meaning: 'Grace, Fertility & Balance',
      render: (isH: boolean) => (
        <svg viewBox="0 0 60 60" className={`w-10 h-10 transition-transform duration-500 ${isH ? '-rotate-45 scale-110' : ''}`}>
          <path d="M 16,10 A 22,22 0 1 0 46,46 A 18,18 0 0 1 16,10 Z" fill={isH ? '#D95A2B' : 'none'} stroke={isH ? '#FAF7F2' : '#D4A359'} strokeWidth="1.5" />
          <circle cx="42" cy="18" r={isH ? 5 : 3.5} fill={isH ? '#D4A359' : '#D95A2B'} />
          <circle cx="48" cy="28" r="2" fill="#FAF7F2" />
        </svg>
      )
    }
  ];

  return (
    <div className={`w-full py-8 ${className}`}>
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-brand-terracotta animate-pulse" />
          <span className={`text-[10px] font-mono tracking-widest uppercase ${isDark ? 'text-brand-gold' : 'text-brand-terracotta'}`}>
            Interactive Heritage Symbology • Hover to Awaken
          </span>
        </div>
        <span className={`text-[10px] font-mono hidden sm:inline ${isDark ? 'text-brand-cream/40' : 'text-brand-brown/50'}`}>
          Soul Space MOTIF REPOSITORY
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {motifs.map((motif) => (
          <PatternCard key={motif.id} motif={motif} isDark={isDark} />
        ))}
      </div>
    </div>
  );
};

const PatternCard: React.FC<{
  motif: {
    id: string;
    name: string;
    meaning: string;
    render: (isHovered: boolean) => React.ReactNode;
  };
  isDark: boolean;
}> = ({ motif, isDark }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative p-4 rounded-md border transition-all duration-300 cursor-pointer flex flex-col items-center text-center ${
        hovered
          ? isDark
            ? 'bg-brand-brown border-brand-terracotta shadow-xl -translate-y-1.5'
            : 'bg-brand-cream border-brand-terracotta shadow-xl -translate-y-1.5'
          : isDark
          ? 'bg-brand-brown-dark/70 border-brand-cream/10 hover:border-brand-cream/25'
          : 'bg-brand-cream-muted/70 border-brand-brown-ink/10 hover:border-brand-brown-ink/25'
      }`}
    >
      {/* Background glow on hover */}
      <div
        className={`absolute inset-0 rounded-md bg-linear-to-tr from-brand-terracotta/10 to-brand-gold/10 pointer-events-none transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div className="relative z-10 flex items-center justify-center py-2">
        {motif.render(hovered)}
      </div>

      <div className="relative z-10 mt-2 space-y-0.5">
        <div
          className={`font-display font-bold text-xs transition-colors duration-200 ${
            hovered ? 'text-brand-terracotta' : isDark ? 'text-brand-cream' : 'text-brand-brown-dark'
          }`}
        >
          {motif.name}
        </div>
        <p
          className={`text-[10px] leading-tight line-clamp-2 transition-colors duration-200 ${
            isDark ? 'text-brand-cream/60' : 'text-brand-brown/70'
          }`}
        >
          {motif.meaning}
        </p>
      </div>
    </div>
  );
};

