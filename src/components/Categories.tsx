import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/bagsData';
import { CategoryFilter } from '../types';

interface CategoriesProps {
  onSelectCategory: (category: CategoryFilter) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  const categoriesList: {
    id: CategoryFilter;
    title: string;
    description: string;
    image: string;
    tag: string;
  }[] = [
      {
        id: 'Women\'s Bags',
        title: "Women's Bags",
        description: 'Structured totes, sculptural crossbodies, and statement shoulder bags.',
        image: PRODUCTS[0].image,
        tag: 'Hand-burnished leather'
      },
      {
        id: 'Men\'s Bags',
        title: "Men's Bags",
        description: 'Heavyweight weekenders, architectural briefcases, and travel messengers.',
        image: PRODUCTS[2].image,
        tag: 'Heavy-gauge saddle stitch'
      },
      {
        id: 'Custom Bags',
        title: 'Custom Bags',
        description: '1-of-1 bespoke pieces tailored to your exact measurements & textile preferences.',
        image: PRODUCTS[1].image,
        tag: 'Your Idea. Our Craft.'
      },
      {
        id: 'New Designs',
        title: 'New Designs',
        description: 'Our latest seasonal silhouettes fusing contemporary runway cuts with ancestral motifs.',
        image: PRODUCTS[0].image,
        tag: 'Soul Space Fresh'
      },
      {
        id: 'Fashion / Accessories',
        title: 'Fashion / Accessories',
        description: 'Envelope evening clutches, leather pouches, belts, and artisan accents.',
        image: PRODUCTS[1].image,
        tag: 'Solid brass & leather'
      }
    ];

  return (
    <section id="categories" className="py-14 sm:py-16 lg:py-20 bg-brand-brown-dark text-brand-cream relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 right-0 w-96 h-96 bg-brand-purple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl ml-auto mr-0 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-12 ml-auto lg:text-right">
          <div className="flex items-center gap-2 lg:justify-end text-xs font-mono tracking-widest text-brand-terracotta uppercase mb-2">
            <span className="w-6 h-[1.5px] bg-brand-terracotta" />
            <span>Curated Silhouettes</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-cream tracking-tight">
            Explore by Category
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-cream/70 leading-relaxed font-light">
            Each category represents a dedicated study in proportion, load balance, and African visual language.
          </p>
        </div>

        {/* Categories Bento / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesList.map((cat, index) => {
            const isWide = index === 0 || index === 2;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative rounded-md overflow-hidden bg-brand-brown border border-brand-cream/10 hover:border-brand-terracotta cursor-pointer transition-all duration-500 hover:shadow-2xl ${isWide ? 'md:col-span-1 lg:col-span-1' : ''
                  }`}
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-16/10 overflow-hidden bg-brand-black">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.9]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-brown-dark via-brand-brown-dark/40 to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 bg-brand-brown-dark/80 backdrop-blur-md border border-brand-cream/15 text-[10px] font-mono uppercase tracking-widest text-brand-gold rounded-sm">
                      {cat.tag}
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 relative bg-linear-to-b from-brand-brown-dark to-brand-brown">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-bold text-xl text-brand-cream group-hover:text-brand-terracotta transition-colors">
                      {cat.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-brand-cream/5 group-hover:bg-brand-terracotta text-brand-cream flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-brand-cream/70 leading-relaxed font-light">
                    {cat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
