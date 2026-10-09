import React, { useState } from 'react';
import { Eye, Sparkles, Search, SlidersHorizontal, LayoutGrid, Columns2, ArrowUpRight } from 'lucide-react';
import { Product, CategoryFilter } from '../types';
import { PRODUCTS } from '../data/bagsData';
import { DiamondMotifPattern, AfricanPatternBorderRibbon } from './AfricanPatterns';

interface CatalogueProps {
  activeCategory: CategoryFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onSelectProduct: (product: Product) => void;
}

export const Catalogue: React.FC<CatalogueProps> = ({
  activeCategory,
  onCategoryChange,
  onSelectProduct
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [layoutMode, setLayoutMode] = useState<'editorial' | 'grid'>('editorial');

  const categories: CategoryFilter[] = [
    'All',
    'Women\'s Bags',
    'Men\'s Bags',
    'Custom Bags',
    'New Designs',
    'Fashion / Accessories'
  ];

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.materials.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collection" className="py-14 sm:py-16 lg:py-20 bg-brand-cream relative overflow-hidden border-t border-brand-brown-ink/10">
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.075} />

      <div className="max-w-7xl ml-auto mr-0 px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-end mb-12 pb-6 border-b border-brand-brown-ink/10 gap-6">
          <div className="md:text-right">
            <div className="flex items-center gap-2 md:justify-end text-xs font-mono tracking-widest text-brand-terracotta uppercase mb-2">
              <span className="w-6 h-[1.5px] bg-brand-terracotta" />
              <span>Full Haute Soul Space Catalogue</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-brown-dark tracking-tight">
              The Collection
            </h2>
          </div>

          {/* Search & Layout Toggle Controls */}
          <div className="flex flex-wrap items-center gap-3 md:justify-end">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-brand-brown/40 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search silhouettes, materials..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-2 bg-brand-cream-muted border border-brand-brown-ink/15 rounded-sm text-xs text-brand-brown-dark placeholder-brand-brown/40 focus:outline-none focus:border-brand-terracotta w-52 sm:w-64"
              />
            </div>

            {/* Layout Toggle */}
            <div className="flex items-center bg-brand-cream-muted p-1 rounded-sm border border-brand-brown-ink/10">
              <button
                onClick={() => setLayoutMode('editorial')}
                className={`p-1.5 rounded-sm text-xs flex items-center gap-1 transition-colors ${layoutMode === 'editorial'
                    ? 'bg-brand-brown-dark text-brand-cream'
                    : 'text-brand-brown/60 hover:text-brand-brown-dark'
                  }`}
                title="Editorial Asymmetric Layout"
              >
                <Columns2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px] font-medium">Editorial</span>
              </button>
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded-sm text-xs flex items-center gap-1 transition-colors ${layoutMode === 'grid'
                    ? 'bg-brand-brown-dark text-brand-cream'
                    : 'text-brand-brown/60 hover:text-brand-brown-dark'
                  }`}
                title="Classic Fashion Grid"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline text-[11px] font-medium">Grid</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none lg:justify-end">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider whitespace-nowrap uppercase transition-all duration-200 border ${activeCategory === cat
                  ? 'bg-brand-brown-dark text-brand-cream border-brand-brown-dark shadow-sm'
                  : 'bg-brand-cream-muted/70 text-brand-brown-ink/70 border-brand-brown-ink/15 hover:border-brand-terracotta hover:text-brand-terracotta'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-brand-cream-muted/40 rounded border border-brand-brown-ink/10">
            <p className="font-display font-bold text-lg text-brand-brown-dark">No silhouettes matched your search.</p>
            <p className="text-xs text-brand-brown/60 mt-1">Try resetting the filter or search query.</p>
            <button
              onClick={() => {
                onCategoryChange('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 bg-brand-terracotta text-brand-cream text-xs font-semibold uppercase tracking-wider rounded-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Editorial Asymmetric Fashion Layout */}
        {layoutMode === 'editorial' ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            {filteredProducts.map((bag, index) => {
              // Asymmetric editorial weighting
              const isLarge = index % 3 === 0;
              const colSpan = isLarge ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-6 lg:col-span-4';

              return (
                <div
                  key={bag.id}
                  className={`${colSpan} group flex flex-col bg-brand-cream-muted/40 rounded-md overflow-hidden border border-brand-brown-ink/10 hover:border-brand-terracotta/70 transition-all duration-500 hover:shadow-xl`}
                >
                  {/* Image Container */}
                  <div
                    onClick={() => onSelectProduct(bag)}
                    className={`relative overflow-hidden bg-brand-brown-near-black cursor-pointer ${isLarge ? 'aspect-16/10 sm:aspect-video' : 'aspect-square sm:aspect-4/3'
                      }`}
                  >
                    <img
                      src={bag.image}
                      alt={bag.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-brand-brown-dark/80 via-brand-brown-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Editorial Tag */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-2.5 py-1 bg-brand-brown-dark/80 backdrop-blur-md text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm border border-brand-cream/10">
                        {bag.category}
                      </span>
                      {bag.isCustomOnly && (
                        <span className="px-2.5 py-1 bg-brand-terracotta text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm font-semibold">
                          Bespoke Only
                        </span>
                      )}
                    </div>

                    {/* Quick Inspect Button on Hover */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(bag);
                      }}
                      className="absolute bottom-4 right-4 px-4 py-2 bg-brand-cream text-brand-brown-dark text-xs font-semibold rounded-sm shadow-lg flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-brand-terracotta hover:text-brand-cream"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Piece</span>
                    </button>
                  </div>

                  {/* Editorial Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-baseline justify-between">
                        <h3
                          onClick={() => onSelectProduct(bag)}
                          className="font-display font-extrabold text-xl sm:text-2xl text-brand-brown-dark hover:text-brand-terracotta transition-colors cursor-pointer"
                        >
                          {bag.name}
                        </h3>
                        {bag.price && (
                          <span className="font-display font-bold text-lg text-brand-brown-dark">
                            {bag.price}
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-mono text-brand-terracotta mt-1">{bag.subtitle}</div>
                      <p className="text-sm text-brand-brown-ink/80 mt-3 leading-relaxed">
                        {bag.description}
                      </p>
                    </div>

                    {/* Materials & Origin Stamp */}
                    <div className="pt-3 border-t border-brand-brown-ink/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="text-brand-brown/60 font-mono text-[11px] truncate max-w-xs">
                        {bag.materials}
                      </div>
                      <button
                        onClick={() => onSelectProduct(bag)}
                        className="text-xs font-semibold text-brand-brown-dark hover:text-brand-terracotta flex items-center gap-1 transition-colors"
                      >
                        <span>Specifications</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Refined 3-Column Uniform Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((bag) => (
              <div
                key={bag.id}
                className="group flex flex-col bg-brand-cream-muted/50 rounded-md overflow-hidden border border-brand-brown-ink/10 hover:border-brand-terracotta transition-all duration-300 hover:shadow-xl"
              >
                <div
                  onClick={() => onSelectProduct(bag)}
                  className="relative aspect-square overflow-hidden bg-brand-brown-near-black cursor-pointer"
                >
                  <img
                    src={bag.image}
                    alt={bag.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 bg-brand-brown-dark/80 text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm">
                      {bag.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3
                        onClick={() => onSelectProduct(bag)}
                        className="font-display font-bold text-lg text-brand-brown-dark hover:text-brand-terracotta transition-colors cursor-pointer"
                      >
                        {bag.name}
                      </h3>
                      <span className="font-display font-bold text-base text-brand-brown-dark">
                        {bag.price}
                      </span>
                    </div>
                    <p className="text-xs text-brand-brown/60 mt-1 line-clamp-1">{bag.subtitle}</p>
                    <p className="text-xs text-brand-brown/80 mt-2 line-clamp-2 leading-relaxed">
                      {bag.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectProduct(bag)}
                    className="w-full py-2.5 bg-brand-brown-dark text-brand-cream text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-terracotta transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Inspect Silhouette</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
