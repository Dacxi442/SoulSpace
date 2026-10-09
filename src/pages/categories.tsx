
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Catalogue as CatalogueSection } from '../components/Catalogue';
import { ProductModal } from '../components/ProductModal';
import { AnimatedSection } from '../components/AnimatedSection';
import type { CategoryFilter, Product } from '../types';

export default function CategoriesPage() {
    const [activeCategory, setActiveCategory] =
        useState<CategoryFilter>('All');
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const navigate = useNavigate();

    return (
        <div className="pt-24 min-h-screen">
            <AnimatedSection id="categories-wrap" delay={0.05}>
                <CatalogueSection
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                    onSelectProduct={setSelectedProduct}
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
