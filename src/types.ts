export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Women\'s Bags' | 'Men\'s Bags' | 'Custom Bags' | 'New Designs' | 'Fashion / Accessories';
  price?: string;
  image: string;
  secondaryImage?: string;
  description: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isCustomOnly?: boolean;
  craftDetails?: string[];
  dimensions?: string;
  materials?: string;
  colorways?: string[];
  /** Optional grouping for bags sharing the same silhouette in the shop */
  groupId?: string;
  groupName?: string;
  /** Swatch color hex code and display label */
  colorHex?: string;
  colorName?: string;
  /** Product primary size */
  size?: string;
  /** Available size options (e.g. Small, Medium, Large, XL) */
  sizes?: string[];
}

export type CategoryFilter = 'All' | 'Women\'s Bags' | 'Men\'s Bags' | 'Custom Bags' | 'New Designs' | 'Fashion / Accessories';

export interface CustomBespokeOrder {
  silhouette: string;
  baseLeather: string;
  accentTextile: string;
  hardware: string;
  monogram: string;
  notes: string;
  customerName?: string;
  customerContact?: string;
}

export interface ShowroomCategory {
  id: string;
  label: string;
  tagline: string;
  img: string;
  bg: string;
  hotspotX: number;
  hotspotY: number;
  href: string;
}

export interface AboutHighlight {
  stat: string;
  label: string;
  description: string;
}

export interface AboutUsContent {
  sectionTag: string;
  title: string;
  summary: string;
  storyBadge: string;
  highlights: AboutHighlight[];
  images: {
    hero: string;
    workshop1: string;
    workshop2: string;
    workshop3: string;
  };
}

export interface NavLinkItem {
  label: string;
  path: string;
}

export interface CategoryCard {
  id: CategoryFilter;
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface ProductGroup {
  id: string;
  name: string;
  category: CategoryFilter;
  isFeatured?: boolean;
  isNew?: boolean;
  products: Product[];
}
