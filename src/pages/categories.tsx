import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopPage as ShopLanding } from '../components/ShopPage';
import { ProductModal } from '../components/ProductModal';
import type { Product } from '../types';

export default function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <ShopLanding onSelectProduct={setSelectedProduct} />

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
