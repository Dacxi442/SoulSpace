import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { AnimatedSection } from '../components/AnimatedSection';
import { Product } from '../types';
import { ProductModal } from '../components/ProductModal';
import { useNavigate } from 'react-router-dom';

// Import all sections for the long scrollable homepage
import { FeaturedCollection } from '../components/FeaturedCollection';
import { Showroom } from '../components/Showroom';
// import { TheCraft } from '../components/TheCraft';
import { AboutUS } from '../components/Aboutus';
import { ContactSection } from '../components/ContactSection';

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const navigate = useNavigate();

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <AnimatedSection id="hero-wrap" delay={0}>
        <Hero
          onExplore={() => navigate('/collection')}
          onViewGallery={() => navigate('/categories')}
          onOpenBespoke={() => navigate('/contact')}
          onSelectProduct={setSelectedProduct}
        />
      </AnimatedSection>

      <AnimatedSection id="featured-wrap" delay={0.1}>
        <FeaturedCollection
          onSelectProduct={setSelectedProduct}
          onViewGallery={() => navigate('/categories')}
        />
      </AnimatedSection>

      <AnimatedSection id="showroom-wrap" delay={0.1}>
        <Showroom />
      </AnimatedSection>

      {/* <AnimatedSection id="craft-wrap" delay={0.1}>
        <TheCraft />
      </AnimatedSection> */}

      <AnimatedSection id="impact-wrap" delay={0.1}>
        <AboutUS />
      </AnimatedSection>

      <AnimatedSection id="contact-wrap" delay={0.1}>
        <ContactSection />
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
    </>
  );
}
