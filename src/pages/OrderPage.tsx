import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import {
  MessageCircle,
  Mail,
  Smartphone,
  ArrowLeft,
  Check,
  Ruler,
  Box,
  ShoppingBag,
  Sparkles,
  AlertCircle,
  RotateCcw
} from 'lucide-react';
import { Product, CategoryFilter } from '../types';
import { PRODUCTS } from '../data/bagsData';
import { SITE_CONTENT } from '../data/siteContent';
import {
  AfricanPatternBorderRibbon,
  DiamondMotifPattern,
  ConcentricSunburstRosette,
  ArchitecturalGridLines
} from '../components/AfricanPatterns';

export default function OrderPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const initialProduct = (location.state?.product as Product | undefined) || null;

  // Selected product (either passed from catalog or selected directly on this page)
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initialProduct);

  // Direct / Custom Order Form states (when ordering without catalog or for custom designs)
  const [orderType, setOrderType] = useState<'catalog' | 'custom'>(
    initialProduct ? 'catalog' : 'custom'
  );
  const [customCategory, setCustomCategory] = useState<CategoryFilter>("Men's Bags");
  const [customStyle, setCustomStyle] = useState('Crossbody Bag');
  const [customRequirements, setCustomRequirements] = useState('');
  const [customerName, setCustomerName] = useState('');

  const { whatsappNumber, phoneNumber, email } = SITE_CONTENT.contact;

  // Generate dynamic order message based on mode
  const getOrderMessage = () => {
    if (orderType === 'catalog' && selectedProduct) {
      return (
        `Hello Soul Space Creations,\n\n` +
        `I would like to order this piece from your collection:\n\n` +
        `• Product: ${selectedProduct.name}\n` +
        `• Category: ${selectedProduct.category}\n` +
        `• Price: ${selectedProduct.price || 'Bespoke / Inquire'}\n` +
        (customerName ? `• Customer Name: ${customerName}\n` : '') +
        (customRequirements ? `• Additional Notes: ${customRequirements}\n` : '') +
        `\nPlease confirm availability and payment/delivery details. Thank you!`
      );
    }

    return (
      `Hello Soul Space Creations,\n\n` +
      `I would like to place a direct order / custom design request:\n\n` +
      `• Category: ${customCategory}\n` +
      `• Bag Style / Silhouette: ${customStyle}\n` +
      (customerName ? `• Customer Name: ${customerName}\n` : '') +
      `• Requirements & Notes: ${customRequirements || 'Looking to discuss options with the designer.'}\n\n` +
      `Please let me know availability, bespoke pricing, and how we can get started. Thank you!`
    );
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(getOrderMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleSMS = () => {
    const message = encodeURIComponent(getOrderMessage());
    window.open(`sms:${phoneNumber}?body=${message}`, '_self');
  };

  const handleEmail = () => {
    const subjectTitle =
      orderType === 'catalog' && selectedProduct
        ? `Order: ${selectedProduct.name}`
        : `Order Request: ${customCategory} (${customStyle})`;
    const subject = encodeURIComponent(`Soul Space Order — ${subjectTitle}`);
    const body = encodeURIComponent(getOrderMessage());
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  const categories: CategoryFilter[] = [
    "Men's Bags",
    "Women's Bags",
    "Custom Bags",
    // "Thrift Clothes",
    "New Designs",
    "Fashion / Accessories"
  ];

  const popularStyles = [
    'Crossbody Bag',
    'Tote Bag',
    'Duffle / Weekender',
    'Clutch',
    'Backpack / Rucksack',
    'Custom Bespoke Silhouette'
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-brand-cream relative overflow-hidden">
      {/* Visible African Motif Background Patterns */}
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.08} />
      <ArchitecturalGridLines className="opacity-35" />

      {/* Decorative Sunburst Rosettes in Background */}
      {/* <div className="absolute -top-16 -right-16 pointer-events-none opacity-25 hidden md:block">
        <ConcentricSunburstRosette size={340} color="#D95A2B" />
      </div> */}
      {/* <div className="absolute top-1/2 -left-20 pointer-events-none opacity-15 hidden lg:block">
        <ConcentricSunburstRosette size={280} color="#9E4E24" />
      </div> */}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Back Navigation & Breadcrumb */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-brand-brown/60 hover:text-brand-terracotta transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back
          </button>

          <Link
            to="/categories"
            className="text-xs font-sans uppercase tracking-widest text-brand-terracotta hover:underline"
          >
            Explore Full Catalogue →
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-terracotta uppercase mb-1.5">
            <span className="w-6 h-[1.5px] bg-brand-terracotta" />
            <span>Artisanal Order Request</span>
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-brown-dark tracking-tight">
            Place Your Order
          </h1>
          <p className="mt-2 text-sm text-brand-brown/70 max-w-2xl">
            Order a specific silhouette from our collection or initiate a direct bespoke request with the artisan maker.
          </p>
        </div>

        {/* Prominent African Pattern Ribbon Divider */}
        <div className="mb-8">
          <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-80" />
        </div>

        {/* 24-HOUR CANCELLATION CAUTION NOTICE */}
        <div className="mb-8 p-4 sm:p-5 rounded-md bg-amber-500/10 border border-amber-600/30 text-brand-brown-dark flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <div className="font-sans font-bold uppercase tracking-wider text-amber-900 text-xs">
              Important: 24-Hour Confirmation Window
            </div>
            <p className="text-xs sm:text-sm text-brand-brown-ink/85 leading-relaxed">
              After <strong>24 hours</strong> of our team reaching out to confirm your order details without any feedback,
              the order will be <strong>cancelled</strong>. We kindly encourage clients to follow up promptly so your piece can be scheduled for crafting without delays.
            </p>
          </div>
        </div>

        {/* Mode Switcher Tabs (Catalog Silhouette vs Direct / Custom Request) */}
        <div className="flex items-center gap-3 mb-8 border-b border-brand-brown-ink/10 pb-4">
          <button
            onClick={() => setOrderType('catalog')}
            className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${orderType === 'catalog'
              ? 'bg-brand-brown-dark text-brand-cream border-brand-brown-dark shadow-xs'
              : 'bg-brand-cream-muted text-brand-brown/70 border-brand-brown-ink/15 hover:border-brand-terracotta hover:text-brand-terracotta'
              }`}
          >
            <span className="flex items-center gap-1.5">
              <ShoppingBag className="w-3.5 h-3.5" />
              Catalogue Silhouette
            </span>
          </button>

          <button
            onClick={() => setOrderType('custom')}
            className={`px-4 py-2 rounded-sm text-xs font-semibold uppercase tracking-wider transition-all duration-200 border ${orderType === 'custom'
              ? 'bg-brand-brown-dark text-brand-cream border-brand-brown-dark shadow-xs'
              : 'bg-brand-cream-muted text-brand-brown/70 border-brand-brown-ink/15 hover:border-brand-terracotta hover:text-brand-terracotta'
              }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              Direct / Custom Order
            </span>
          </button>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

          {/* Left Column: Product or Custom Order Form */}
          <div className="lg:col-span-7">

            {/* MODE 1: Catalog Product Order */}
            {orderType === 'catalog' && (
              <div className="space-y-6">
                {selectedProduct ? (
                  <div className="bg-brand-cream-muted/40 rounded-md overflow-hidden border border-brand-brown-ink/10 shadow-sm">
                    <div className="relative aspect-16/9 sm:aspect-21/9 overflow-hidden bg-brand-brown-near-black">
                      <img
                        src={selectedProduct.image}
                        alt={selectedProduct.name}
                        className="w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2.5 py-1 bg-brand-brown-dark/80 backdrop-blur-md text-brand-cream text-[10px] font-mono uppercase tracking-widest rounded-sm">
                          {selectedProduct.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6 space-y-4">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <h2 className="font-serif font-extrabold text-xl text-brand-brown-dark">
                            {selectedProduct.name}
                          </h2>
                          <p className="text-xs font-mono text-brand-terracotta mt-0.5">
                            {selectedProduct.subtitle}
                          </p>
                        </div>
                        {selectedProduct.price && (
                          <div className="font-sans font-bold text-xl text-brand-brown-dark shrink-0 ml-3">
                            {selectedProduct.price}
                          </div>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-brand-brown-ink/80 leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      {/* Specs */}
                      {/* <div className="p-3 rounded bg-brand-cream border border-brand-brown-ink/10 space-y-1.5 text-xs">
                        <div className="flex items-center gap-2">
                          <Ruler className="w-3.5 h-3.5 text-brand-terracotta" />
                          <span className="text-brand-brown/60">Dimensions:</span>
                          <span className="font-medium text-brand-brown-dark">{selectedProduct.dimensions}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Box className="w-3.5 h-3.5 text-brand-terracotta" />
                          <span className="text-brand-brown/60">Materials:</span>
                          <span className="font-medium text-brand-brown-dark truncate">{selectedProduct.materials}</span>
                        </div>
                      </div> */}

                      {/* Switch silhouette dropdown */}
                      <div className="pt-2">
                        <label className="block text-[11px] font-mono uppercase text-brand-brown/60 mb-1">
                          Select Another Silhouette from Catalogue:
                        </label>
                        <select
                          value={selectedProduct.id}
                          onChange={(e) => {
                            const found = PRODUCTS.find((p) => p.id === e.target.value);
                            if (found) setSelectedProduct(found);
                          }}
                          className="w-full px-3 py-2 bg-brand-cream border border-brand-brown-ink/20 rounded-sm text-xs text-brand-brown-dark focus:outline-none focus:border-brand-terracotta"
                        >
                          {PRODUCTS.map((p) => (
                            <option key={p.id} value={p.id}>
                              {p.name} ({p.category}) — {p.price || 'Bespoke'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* No catalog product selected yet */
                  <div className="bg-brand-cream-muted/40 rounded-md p-6 border border-brand-brown-ink/10 text-center space-y-4">
                    <ShoppingBag className="w-10 h-10 text-brand-brown/40 mx-auto" />
                    <div>
                      <h3 className="font-display font-bold text-lg text-brand-brown-dark">
                        Choose a Piece from our Collection
                      </h3>
                      <p className="text-xs text-brand-brown/60 mt-1 max-w-sm mx-auto">
                        Pick a signature design below or jump to custom ordering.
                      </p>
                    </div>

                    <div className="max-w-md mx-auto text-left">
                      <select
                        onChange={(e) => {
                          const found = PRODUCTS.find((p) => p.id === e.target.value);
                          if (found) setSelectedProduct(found);
                        }}
                        defaultValue=""
                        className="w-full px-3 py-2.5 bg-brand-cream border border-brand-brown-ink/20 rounded-sm text-xs text-brand-brown-dark focus:outline-none focus:border-brand-terracotta"
                      >
                        <option value="" disabled>-- Select a piece to order --</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.name} ({p.category}) — {p.price || 'Bespoke'}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-2">
                      <Link
                        to="/categories"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-terracotta hover:underline"
                      >
                        Browse visual catalogue with inspection →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* MODE 2: Direct / Custom Order Form */}
            {orderType === 'custom' && (
              <div className="bg-brand-cream-muted/40 rounded-md p-6 sm:p-7 border border-brand-brown-ink/10 space-y-5">
                <div>
                  <h3 className="font-display font-bold text-lg text-brand-brown-dark">
                    Direct Order & Bespoke Design
                  </h3>
                  <p className="text-xs text-brand-brown/70 mt-1 leading-relaxed">
                    Tell us what you have in mind. We will connect you directly with the maker to design your bespoke piece.
                  </p>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-brown/70 mb-2">
                    1. Select Category
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setCustomCategory(cat)}
                        className={`px-3 py-1.5 rounded-sm text-xs font-medium transition-colors border ${customCategory === cat
                          ? 'bg-brand-brown-dark text-brand-cream border-brand-brown-dark shadow-xs'
                          : 'bg-brand-cream text-brand-brown-dark border-brand-brown-ink/15 hover:border-brand-terracotta'
                          }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Style / Silhouette */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-brown/70 mb-2">
                    2. Desired Silhouette / Style
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {popularStyles.map((style) => (
                      <button
                        key={style}
                        type="button"
                        onClick={() => setCustomStyle(style)}
                        className={`p-2.5 rounded-sm text-xs text-left transition-colors border ${customStyle === style
                          ? 'bg-brand-terracotta/10 border-brand-terracotta font-semibold text-brand-brown-dark'
                          : 'bg-brand-cream border-brand-brown-ink/15 text-brand-brown/80 hover:border-brand-brown-ink/30'
                          }`}
                      >
                        {style}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Notes & Requirements */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-brown/70 mb-1">
                    3. Specifics & Design Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={customRequirements}
                    onChange={(e) => setCustomRequirements(e.target.value)}
                    placeholder="e.g. Earthy cognac leather, African geometric diamond print, laptop compartment, brass buckle..."
                    className="w-full p-3 bg-brand-cream border border-brand-brown-ink/20 rounded-sm text-xs text-brand-brown-dark placeholder-brand-brown/40 focus:outline-none focus:border-brand-terracotta"
                  />
                </div>
              </div>
            )}

            {/* Customer Name Input (shared) */}
            <div className="mt-4 bg-brand-cream-muted/30 rounded-md p-4 border border-brand-brown-ink/10">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-brand-brown/70 mb-1">
                Your Name / Contact Reference (Optional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-brand-cream border border-brand-brown-ink/20 rounded-sm text-xs text-brand-brown-dark placeholder-brand-brown/40 focus:outline-none focus:border-brand-terracotta"
              />
            </div>

          </div>

          {/* Right Column: Ordering Action Panel with REDUCED BUTTON SIZES */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            <div className="bg-brand-cream-muted/40 rounded-md p-5 sm:p-6 border border-brand-brown-ink/10 space-y-5">
              <div>
                <h3 className="font-display font-bold text-base text-brand-brown-dark">
                  Initiate Order Contact
                </h3>
                <p className="text-xs text-brand-brown-ink/75 mt-1 leading-relaxed">
                  Choose your channel below to open a pre-filled message with your order details.
                </p>
              </div>

              {/* Message Summary Preview */}
              <div className="p-3 rounded bg-brand-cream border border-brand-brown-ink/10">
                <div className="text-[10px] font-mono uppercase text-brand-brown/60 mb-1">
                  Message Preview
                </div>
                <div className="text-xs text-brand-brown-ink/80 font-mono whitespace-pre-line line-clamp-4 leading-snug">
                  {getOrderMessage()}
                </div>
              </div>

              {/* THREE REDUCED / COMPACT ORDER BUTTONS */}
              <div className="space-y-2.5 pt-1">
                {/* Option A: WhatsApp (compact button) */}
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 px-4 bg-brand-whatsapp text-brand-cream rounded-sm hover:brightness-105 active:scale-[0.99] transition-all flex items-center justify-between text-xs font-semibold shadow-xs group"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 shrink-0" />
                    <span>Order via WhatsApp</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-90 group-hover:translate-x-0.5 transition-transform">
                    Chat Now →
                  </span>
                </button>

                {/* Option B: SMS (compact button) */}
                <button
                  onClick={handleSMS}
                  className="w-full py-2.5 px-4 bg-brand-terracotta text-brand-cream rounded-sm hover:bg-brand-brown-dark active:scale-[0.99] transition-all flex items-center justify-between text-xs font-semibold shadow-xs group"
                >
                  <span className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 shrink-0" />
                    <span>Order via SMS</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-90 group-hover:translate-x-0.5 transition-transform">
                    Send Text →
                  </span>
                </button>

                {/* Option C: Email (compact button) */}
                <button
                  onClick={handleEmail}
                  className="w-full py-2.5 px-4 bg-brand-brown-dark text-brand-cream rounded-sm hover:bg-brand-terracotta active:scale-[0.99] transition-all flex items-center justify-between text-xs font-semibold shadow-xs group"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 shrink-0" />
                    <span>Order via Email</span>
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider opacity-90 group-hover:translate-x-0.5 transition-transform">
                    Send Mail →
                  </span>
                </button>
              </div>

              {/* Helpful note */}
              <p className="text-[11px] text-brand-brown/60 leading-relaxed border-t border-brand-brown-ink/10 pt-3">
                Selecting an option opens your chosen app with the order details pre-filled. You can review and edit before sending.
              </p>
            </div>

            {/* Quick Guarantees */}
            <div className="p-4 rounded-md bg-brand-cream border border-brand-brown-ink/10 space-y-2 text-xs text-brand-brown/80">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span>Handcrafted with full-grain leather & African textiles</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span>Direct artisan communication for customizations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                <span>Insured worldwide shipping upon completion</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Decorative Ribbon */}
        <div className="mt-16">
          <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-80" />
        </div>
      </div>
    </div>
  );
}
