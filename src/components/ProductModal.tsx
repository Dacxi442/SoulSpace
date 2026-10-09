import React, { useEffect, useState } from 'react';
import { X, Check, MessageCircle, Sparkles, Shield, Ruler, Box, ArrowRight, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { AfricanPatternBorderRibbon } from './AfricanPatterns';
import { SITE_CONTENT } from '../data/siteContent';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onCustomCommission: (product: Product) => void;
  onOrder?: (product: Product) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onCustomCommission,
  onOrder
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  const images = [product.image, product.secondaryImage].filter(Boolean) as string[];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hello Soul Space Creations, I would like to order or inquire about the "${product.name}" (${product.price || 'Bespoke'}).\n\n` +
      `Category: ${product.category}\n` +
      `Materials: ${product.materials}\n` +
      `Please let me know availability and commission details!`
    );
    window.open(`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-brand-brown-dark/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div
        className="relative w-full max-w-4xl bg-brand-cream text-brand-brown-dark rounded-lg shadow-2xl border border-brand-brown-ink/20 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar with Brand Monogram & Close */}
        <div className="px-6 py-4 border-b border-brand-brown-ink/10 flex items-center justify-between bg-brand-cream">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-terracotta" />
            <span className="text-xs font-mono tracking-widest text-brand-brown/60 uppercase">
              S & S Soul Space Specimen #{product.id.slice(-6).toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-brand-brown-dark hover:bg-brand-brown-ink/10 transition-colors focus:outline-none"
            aria-label="Close Product Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[80vh] overflow-y-auto">

          {/* Left Column: Visual Gallery */}
          <div className="md:col-span-6 bg-brand-brown-near-black flex flex-col justify-between p-4 sm:p-6">
            <div className="relative aspect-square rounded overflow-hidden shadow-inner bg-brand-brown-dark flex items-center justify-center">
              <img
                src={images[activeImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 bg-brand-brown-dark/80 backdrop-blur-md text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Thumbnail switcher if multiple images */}
            {images.length > 1 && (
              <div className="flex items-center gap-2 mt-4">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-14 h-14 rounded overflow-hidden border-2 transition-all ${activeImageIndex === idx ? 'border-brand-terracotta scale-105' : 'border-white/20 opacity-60'
                      }`}
                  >
                    <img
                      src={img}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Actions */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-brand-terracotta uppercase tracking-widest">
                  {product.subtitle}
                </span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-brown-dark mt-1">
                  {product.name}
                </h2>
                {product.price && (
                  <div className="font-display font-bold text-2xl text-brand-brown-dark mt-2">
                    {product.price}
                  </div>
                )}
              </div>

              <p className="text-xs sm:text-sm text-brand-brown-ink/80 leading-relaxed font-normal">
                {product.description}
              </p>

              {/* Handcrafted Checklist */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-brown/60 mb-2">
                  Soul Space Craft Details
                </div>
                <div className="space-y-1.5">
                  {product.craftDetails.map((detail, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-brand-brown-dark">
                      <Check className="w-3.5 h-3.5 text-brand-terracotta shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Box */}
              {/* <div className="p-3.5 rounded bg-brand-cream-muted border border-brand-brown-ink/10 space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <Ruler className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span className="text-brand-brown/60">Dimensions:</span>
                  <span className="font-medium text-brand-brown-dark">{product.dimensions}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Box className="w-3.5 h-3.5 text-brand-terracotta" />
                  <span className="text-brand-brown/60">Materials:</span>
                  <span className="font-medium text-brand-brown-dark truncate">{product.materials}</span>
                </div>
              </div> */}
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t border-brand-brown-ink/10">
              {onOrder && (
                <button
                  onClick={() => {
                    onClose();
                    onOrder(product);
                  }}
                  className="w-full py-3 bg-brand-terracotta text-brand-cream text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-brown-dark transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order This Piece</span>
                </button>
              )}

              <button
                onClick={handleWhatsApp}
                className="w-full py-3 bg-brand-brown-dark text-brand-cream text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-terracotta transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                <span>Order via WhatsApp Consultation</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onCustomCommission(product);
                }}
                className="w-full py-3 bg-brand-cream border border-brand-brown-ink/30 text-brand-brown-dark text-xs font-semibold uppercase tracking-wider rounded-sm hover:border-brand-terracotta hover:text-brand-terracotta transition-colors flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-brand-gold" />
                <span>Customize This Silhouette</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom subtle ribbon */}
        <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-25" />
      </div>
    </div>
  );
};
