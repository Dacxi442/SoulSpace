import React from 'react';
import { ArrowUpRight, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../data/bagsData';
import { DiamondMotifPattern } from './AfricanPatterns';

interface FeaturedCollectionProps {
  onSelectProduct?: (product: Product) => void;
  onViewGallery?: () => void;
}

export const FeaturedCollection: React.FC<FeaturedCollectionProps> = ({
  onViewGallery
}) => {
  const featuredBags = PRODUCTS.filter((b) => b.isFeatured);

  return (
    <section id="featured" className="py-8 sm:py-12 min-h-screen flex flex-col justify-center bg-[#EAE3D2] relative overflow-hidden border-t border-brand-brown-ink/10">
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.075} />

      <div className="max-w-7xl ml-auto mr-0 px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-end gap-4 mb-8 pb-4 border-b border-brand-brown-ink/10">
          <div className="md:text-right">
            <h2 className="font-sans text-center font-extrabold text-4xl sm:text-3xl lg:text-4xl text-brand-brown-dark tracking-tight">
              Featured Collection
            </h2>
          </div>
          <p className="mt-2 md:mt-0 font-serif italic text-base sm:text-lg text-brand-brown/75 max-w-sm md:text-right leading-snug">
            Discover our hand-picked signature pieces, where heritage craftsmanship meets bold modern utility.
          </p>
        </div>

        {/* Featured Bags Grid with Distinctive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuredBags.map((bag) => (
            <div
              key={bag.id}
              className="group relative bg-brand-cream/80 rounded-md overflow-hidden border border-brand-brown-ink/10 hover:border-brand-terracotta/60 transition-all duration-500 hover:shadow-xl flex flex-col"
            >
              {/* Product Visual Container with Aspect Ratio */}
              <div
                className="relative aspect-4/3 sm:aspect-square overflow-hidden bg-brand-cream"
              >
                <img
                  src={bag.image}
                  alt={bag.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                  {bag.isNew && (
                    <span className="px-2.5 py-0.5 bg-brand-terracotta text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm font-semibold shadow-sm">
                      New Release
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 bg-brand-brown-dark/80 backdrop-blur-sm text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm">
                    {bag.category}
                  </span>
                </div>
              </div>

              {/* Product Information */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-baseline justify-between">
                    <h3
                      className="font-display font-bold text-base sm:text-lg text-brand-brown-dark"
                    >
                      {bag.name}
                    </h3>
                    {bag.price && (
                      <span className="font-display font-semibold text-sm sm:text-base text-brand-brown-dark shrink-0 ml-2">
                        {bag.price}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-brand-brown-ink/80 mt-2 line-clamp-2 leading-relaxed">
                    {bag.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={onViewGallery}
                    className="w-full py-2 px-3 bg-brand-brown-dark text-brand-cream text-[10px] sm:text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-terracotta transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View in Catalogue</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Action */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onViewGallery}
            className="group relative px-6 py-2.5 bg-brand-brown-dark text-brand-cream font-mono text-xs uppercase tracking-widest overflow-hidden rounded-md transition-shadow duration-300 inline-flex items-center justify-center gap-2 hover:shadow-md"
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-brand-cream">View Full Collection</span>
            <ArrowUpRight className="w-3.5 h-3.5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-brand-gold group-hover:text-brand-cream" />
            <div className="absolute inset-0 bg-brand-terracotta translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0" />
          </button>
        </div>

      </div>
    </section>
  );
};
