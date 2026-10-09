import React from 'react';
import { Compass, Layers, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { CRAFT_STEPS, CRAFT_IMAGE } from '../data/bagsData';
import { DiamondMotifPattern, ConcentricSunburstRosette } from './AfricanPatterns';

export const TheCraft: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-brand-terracotta" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-brand-terracotta" />;
      case 'Scissors':
        return <Scissors className="w-5 h-5 text-brand-terracotta" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-brand-terracotta" />;
    }
  };

  return (
    <section id="craft" className="py-14 sm:py-16 lg:py-20 bg-brand-cream relative overflow-hidden">
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.075} />

      <div className="max-w-7xl ml-auto mr-0 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-12 ml-auto lg:text-right">
          <div className="flex items-center gap-2 lg:justify-end text-xs font-mono tracking-widest text-brand-terracotta uppercase mb-2">
            <span className="w-6 h-[1.5px] bg-brand-terracotta" />
            <span>Honoring the Maker's Hand</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-brown-dark tracking-tight">
            The Craft of Hand-Stitching
          </h2>
          <p className="mt-4 font-serif italic text-2xl text-brand-purple font-medium leading-snug">
            Not mass manufactured. Every stitch, bevel, and rivet is guided by one set of hands.
          </p>
        </div>

        {/* Big Visual Workshop Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

          {/* Workshop Image with Frame */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl border-4 border-brand-cream bg-brand-brown-dark">
              <img
                src={CRAFT_IMAGE}
                alt="Artisan sewing leather bag by hand in the workshop"
                className="w-full aspect-16/10 object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-brown-dark/80 via-transparent to-transparent" />

              {/* Photo Caption Overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-brand-cream">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-brand-gold">
                    Soul Space Journal • Bench 01
                  </div>
                  <div className="font-display font-bold text-lg">
                    Waxed Linen Thread & Traditional Diamond Awl
                  </div>
                </div>
                <div className="hidden sm:block text-right text-xs font-mono text-brand-cream/70">
                  EST. 1-OF-1 CREATION
                </div>
              </div>
            </div>

            {/* Rosette Accent */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 hidden md:block opacity-30 pointer-events-none">
              <ConcentricSunburstRosette size={112} color="#D95A2B" />
            </div>
          </div>

          {/* Artisan Statement Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-md bg-brand-cream-muted border border-brand-brown-ink/10 space-y-6 shadow-sm">
              <div className="text-4xl font-serif text-brand-terracotta leading-none">“</div>
              <blockquote className="font-serif italic text-xl sm:text-2xl text-brand-brown-dark leading-relaxed -mt-4">
                Industrial factories produce disposable volume. We create heirloom companions. When you hold an S & S bag, you feel the tension of the thread and the living soul of African cloth.
              </blockquote>

              <div className="pt-4 border-t border-brand-brown-ink/15 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-brand-brown-dark">Founder & Master Craftsman</div>
                  <div className="text-xs text-brand-brown/70 font-mono">Soul Space Creations Soul Space</div>
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-brown-dark text-brand-cream flex items-center justify-center font-display font-bold text-xs">
                  S&S
                </div>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded bg-brand-cream border border-brand-brown-ink/10">
                <div className="font-display font-bold text-2xl text-brand-terracotta">18-36h</div>
                <div className="text-xs text-brand-brown/70 font-medium mt-0.5">Hands-on creation per piece</div>
              </div>
              <div className="p-4 rounded bg-brand-cream border border-brand-brown-ink/10">
                <div className="font-display font-bold text-2xl text-brand-purple">Double-Hand</div>
                <div className="text-xs text-brand-brown/70 font-medium mt-0.5">Two-needle saddle stitching</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Architectural Craft Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFT_STEPS.map((stepItem) => (
            <div
              key={stepItem.step}
              className="p-6 rounded-md bg-brand-cream border border-brand-brown-ink/15 hover:border-brand-terracotta transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-bold text-brand-terracotta/40 group-hover:text-brand-terracotta transition-colors">
                  {stepItem.step}
                </span>
                <div className="w-9 h-9 rounded-sm bg-brand-cream-muted flex items-center justify-center group-hover:bg-brand-brown-dark transition-colors">
                  {getStepIcon(stepItem.iconName)}
                </div>
              </div>

              <h3 className="font-display font-bold text-base text-brand-brown-dark mb-2">
                {stepItem.title}
              </h3>
              <p className="text-xs text-brand-brown-ink/75 leading-relaxed">
                {stepItem.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
