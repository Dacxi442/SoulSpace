import React, { useState } from 'react';
import { FeaturedCollection } from '../components/FeaturedCollection';
import { ProductModal } from '../components/ProductModal';
import { AnimatedSection } from '../components/AnimatedSection';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

export default function CollectionPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen">
      <AnimatedSection id="featured-wrap" delay={0.05}>
        <FeaturedCollection
          onSelectProduct={setSelectedProduct}
          onViewGallery={() => navigate('/categories')}
        />
      </AnimatedSection>

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
