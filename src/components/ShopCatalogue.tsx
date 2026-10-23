
import React, { useState } from 'react';
import { Eye, Search, X } from 'lucide-react';
import type { CategoryFilter, Product } from '../types';
import { PRODUCT_GROUPS, CATEGORIES_LIST } from '../data/bagsData';
import { DiamondMotifPattern } from './AfricanPatterns';

interface ShopCatalogueProps {
  onSelectProduct: (product: Product) => void;
}

export const ShopCatalogue: React.FC<ShopCatalogueProps> = ({ onSelectProduct }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeVariants, setActiveVariants] = useState<Record<string, number>>({});
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const getVIdx = (groupId: string) => activeVariants[groupId] ?? 0;

  const setVIdx = (groupId: string, idx: number) =>
    setActiveVariants(prev => ({ ...prev, [groupId]: idx }));

  const filteredGroups = PRODUCT_GROUPS.filter(group => {
    const matchCat = activeCategory === 'All' || group.category === activeCategory;
    const q = searchQuery.trim().toLowerCase();

    const matchSearch =
      q === '' ||
      group.name.toLowerCase().includes(q) ||
      group.products.some(p =>
        p.name.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.colorName?.toLowerCase().includes(q) ?? false)
      );

    return matchCat && matchSearch;
  });

  return (
    <section className="relative overflow-hidden border-t border-brand-brown-ink/10 bg-brand-cream py-10 sm:py-14 lg:py-16 xl:py-20">
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.075} />

      {/* Responsive sticky filter bar */}
      <div className="sticky top-[2px] z-10 border-b border-brand-brown-ink/10 bg-brand-cream/95 shadow-sm backdrop-blur-md sm:top-[50pxs]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:gap-5 lg:px-8">

          {/* Search */}
          <div className="relative w-full shrink-0 lg:w-52 xl:w-56">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-brown/60" />

            <input
              type="text"
              placeholder="Search bags..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              aria-label="Search products"
              className="w-full rounded-sm border border-brand-brown-ink/20 bg-white px-10 py-3 text-sm text-brand-brown-dark placeholder:text-brand-brown/60 transition-colors focus:border-brand-terracotta focus:outline-none focus:ring-1 focus:ring-brand-terracotta/30 sm:py-2.5"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm p-1 text-brand-brown/60 transition-colors hover:text-brand-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-terracotta"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Category filters: wrap instead of horizontal scrolling */}
          <div
            className="flex w-full min-w-0 flex-wrap items-center gap-2 lg:flex-1"
            role="group"
            aria-label="Filter products by category"
          >
            {CATEGORIES_LIST.map(cat => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`min-h-10 rounded-sm border px-3 py-2 text-[11px] font-semibold uppercase tracking-wide transition-colors duration-200 sm:px-4 sm:text-xs ${activeCategory === cat
                  ? 'border-brand-brown-dark bg-brand-brown-dark text-brand-cream shadow-sm'
                  : 'border-brand-brown-ink/20 bg-white/40 text-brand-brown-dark hover:border-brand-terracotta hover:bg-white hover:text-brand-terracotta'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Result count */}
          <span
            className="shrink-0 text-xs font-medium text-brand-brown/70 lg:text-right"
            aria-live="polite"
          >
            {filteredGroups.length}{' '}
            {filteredGroups.length === 1 ? 'piece' : 'pieces'}
          </span>
        </div>
      </div>

      {/* Product grid */}
      <div className="mx-auto w-full max-w-7xl px-4 pb-16 pt-7 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24">
        {filteredGroups.length === 0 ? (
          <div className="py-20 text-center sm:py-28">
            <p className="font-display text-2xl font-bold text-brand-brown-dark">
              No pieces found
            </p>

            <p className="mt-3 text-sm leading-relaxed text-brand-brown/70 sm:text-base">
              Try adjusting your search or browse another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-6 min-h-11 rounded-sm bg-brand-brown-dark px-6 py-3 text-xs font-semibold uppercase tracking-wider text-brand-cream transition-colors hover:bg-brand-terracotta"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-3 gap-y-9 sm:gap-x-5 sm:gap-y-10 md:grid-cols-3 md:gap-x-6 lg:gap-x-8 lg:gap-y-12 xl:grid-cols-4 xl:gap-y-14">
            {filteredGroups.map(group => {
              const vIdx = getVIdx(group.id);
              const currentProduct = group.products[vIdx] || group.products[0];
              const isHovered = hoveredGroup === group.id;
              const hasVariants = group.products.length > 1;

              return (
                <article key={group.id} className="flex min-w-0 flex-col">
                  {/* Product image */}
                  <div
                    className="group relative aspect-[3/4] cursor-pointer overflow-hidden rounded-sm bg-[#EDE5D8]"
                    onMouseEnter={() => setHoveredGroup(group.id)}
                    onMouseLeave={() => setHoveredGroup(null)}
                    onClick={() => onSelectProduct(currentProduct)}
                  >
                    <img
                      src={currentProduct.image}
                      alt={`${group.name}${hasVariants ? ` - ${currentProduct.colorName || currentProduct.name}` : ''}`}
                      loading="lazy"
                      className={`h-full w-full object-cover object-center transition-transform duration-700 ${isHovered ? 'scale-[1.04]' : 'scale-100'
                        }`}
                    />

                    {group.isNew && (
                      <span className="pointer-events-none absolute left-2 top-2 rounded-sm bg-brand-terracotta px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm sm:left-2.5 sm:top-2.5">
                        New
                      </span>
                    )}

                    {hasVariants && (
                      <span className="pointer-events-none absolute right-2 top-2 rounded-sm bg-black/65 px-2 py-1 font-mono text-[10px] font-medium text-white sm:right-2.5 sm:top-2.5">
                        {group.products.length} styles
                      </span>
                    )}

                    {/* Always accessible on touchscreens; hover reveal on desktop */}
                    <div className="pointer-events-none absolute inset-0 flex items-end justify-center bg-gradient-to-t from-black/35 via-transparent to-transparent p-2 pb-3 opacity-100 transition-opacity duration-300 sm:pb-5 sm:opacity-0 sm:group-hover:opacity-100">
                      <button
                        type="button"
                        onClick={e => {
                          e.stopPropagation();
                          onSelectProduct(currentProduct);
                        }}
                        className="pointer-events-auto flex min-h-10 items-center justify-center gap-1.5 rounded-sm bg-white px-2.5 py-2 text-[10px] font-bold uppercase tracking-wide text-brand-brown-dark shadow-lg transition-colors hover:bg-brand-terracotta hover:text-white sm:px-4 sm:text-[11px] sm:tracking-wider"
                      >
                        <Eye className="h-3.5 w-3.5 shrink-0" />
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product colour variants */}
                  {hasVariants && (
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      {group.products.map((p, idx) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => setVIdx(group.id, idx)}
                          title={p.colorName || p.name}
                          aria-label={`Select ${p.colorName || p.name}`}
                          aria-pressed={idx === vIdx}
                          className={`h-5 w-5 shrink-0 rounded-full border-2 transition-all duration-200 ${idx === vIdx
                            ? 'scale-110 border-brand-brown-dark ring-2 ring-brand-brown-dark/25 ring-offset-2'
                            : 'border-transparent hover:scale-110 hover:border-brand-brown-dark/50'
                            }`}
                          style={{ backgroundColor: p.colorHex ?? '#ccc' }}
                        />
                      ))}
                    </div>
                  )}

                  {/* Product information */}
                  <div className={`min-w-0 ${hasVariants ? 'mt-3' : 'mt-4'}`}>
                    <div className="flex items-start justify-between gap-2">
                      <h3
                        onClick={() => onSelectProduct(currentProduct)}
                        className="min-w-0 cursor-pointer break-words font-display text-[13px] font-semibold leading-snug text-brand-brown-dark transition-colors hover:text-brand-terracotta sm:text-sm lg:text-base"
                      >
                        {group.name}
                      </h3>

                      <span className="shrink-0 whitespace-nowrap font-display text-[13px] font-bold leading-snug text-brand-brown-dark sm:text-sm lg:text-base">
                        {currentProduct.price}
                      </span>
                    </div>

                    <p className="mt-1.5 break-words text-xs font-normal leading-relaxed text-brand-brown/75 sm:text-sm">
                      {hasVariants
                        ? currentProduct.colorName || currentProduct.subtitle
                        : currentProduct.subtitle}
                    </p>

                    {activeCategory === 'All' && (
                      <p className="mt-2 break-words font-mono text-[10px] font-medium uppercase tracking-wider text-brand-brown/65 sm:text-[11px]">
                        {group.category}
                      </p>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
