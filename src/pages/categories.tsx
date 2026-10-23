import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopCatalogue } from '../components/ShopCatalogue';
import { ProductModal } from '../components/ProductModal';
import type { Product } from '../types';

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <div className="pt-[64px] sm:pt-[72px] text-center bg-brand-cream border-b border-brand-brown-ink/10">
        <div className="max-w-7xl align-center justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <span className="text-[10px] font-mono tracking-[0.25em] text-brand-terracotta uppercase block mb-2">
            Soul Space creations
          </span>
          <h1 className="font-serif font-extrabold text-4xl sm:text-5xl text-brand-brown-dark tracking-tight">
            The Shop
          </h1>
          <p className="mt-3 mx-auto text-center items-center justify-center sm:text-left text-sm sm:text-base  text-brand-brown/60 font-light max-w-md leading-relaxed">
            Browse our collections, select a style, and order your piece.
          </p>
        </div>
      </div>

      <ShopCatalogue onSelectProduct={setSelectedProduct} />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onCustomCommission={() => {
          setSelectedProduct(null);
          navigate('/contact');
        }}
        onOrder={(product) => {
          setSelectedProduct(null);
          navigate('/order', { state: { product } });
        }}
      />
    </div>
  );
}
