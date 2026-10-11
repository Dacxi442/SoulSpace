import React from 'react';
import { DiamondMotifPattern } from './AfricanPatterns';

interface PageLoaderProps {
  message?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ message = 'Crafting your experience...' }) => {
  return (
    <div className="min-h-[50vh] w-full flex flex-col items-center justify-center p-8 relative overflow-hidden select-none">
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.06} />

      <div className="relative z-10 flex flex-col items-center gap-5">
        {/* Animated Brand Ring */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-brand-brown-ink/10" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-brand-gold border-r-brand-terracotta animate-spin duration-1000" />
          <span className="font-display font-extrabold text-sm text-brand-brown-dark tracking-tighter">
            S<span className="text-brand-terracotta">&</span>S
          </span>
        </div>

        {/* Text */}
        <div className="text-center">
          <p className="font-serif italic text-base sm:text-lg text-brand-brown-dark font-medium">
            {message}
          </p>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-terracotta">
            Soul Space Creations
          </span>
        </div>
      </div>
    </div>
  );
};
