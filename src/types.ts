export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Women\'s Bags' | 'Men\'s Bags' | 'Custom Bags' | 'New Designs' | 'Fashion / Accessories';
  price?: string;
  image: string;
  secondaryImage?: string;
  description: string;
  craftDetails: string[];
  dimensions: string;
  materials: string;
  isFeatured?: boolean;
  isNew?: boolean;
  isCustomOnly?: boolean;
  colorways: string[];
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
