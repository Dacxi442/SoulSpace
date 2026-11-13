import React, { useEffect, useState } from 'react';
import type { CategoryFilter, Product } from '../types';
import {ShopLanding}  from './ShopLanding';
import { ShopCatalogue } from './ShopCatalogue';

// Readable URL for each category: /shop?category=womens-bags
const SLUGS: Record<string, string> = {
  'Thrift Clothes': 'thrift-clothes',
  "Women's Bags": 'womens-bags',
  "Men's Bags": 'mens-bags',
  'Custom Bags': 'custom-bags',
  'New Designs': 'new-designs',
  'Fashion / Accessories': 'fashion-accessories',
};

const categoryFromUrl = (): CategoryFilter => {
  if (typeof window === 'undefined') return 'All';
  const slug = new URLSearchParams(window.location.search).get('category');
  const match = Object.entries(SLUGS).find(([, s]) => s === slug);
  return (match?.[0] ?? 'All') as CategoryFilter;
};

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({ onSelectProduct }) => {
  const [category, setCategory] = useState<CategoryFilter>(categoryFromUrl);

  // Browser back/forward button changes the category
  useEffect(() => {
    const sync = () => setCategory(categoryFromUrl());
    window.addEventListener('popstate', sync);
    return () => window.removeEventListener('popstate', sync);
  }, []);

  // A shared link like /shop?category=mens-bags opens straight on the catalogue
  useEffect(() => {
    if (category !== 'All') requestAnimationFrame(() => document.getElementById('catalogue')?.scrollIntoView());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeCategory = (next: CategoryFilter) => {
    setCategory(next);
    const url = new URL(window.location.href);
    if (next === 'All') url.searchParams.delete('category');
    else url.searchParams.set('category', SLUGS[next]);
    url.hash = '';
    window.history.pushState(window.history.state, '', url);
  };

  return (
    <>
      <ShopLanding onSelectCategory={changeCategory} onSelectProduct={onSelectProduct} />
      <ShopCatalogue activeCategory={category} onCategoryChange={changeCategory} onSelectProduct={onSelectProduct} />
    </>
  );
};