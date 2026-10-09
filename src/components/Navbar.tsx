import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle, ShoppingBag } from 'lucide-react';
import { AfricanPatternBorderRibbon, DiamondMotifPattern } from './AfricanPatterns';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/siteContent';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logical, elegant fashion site navigation flow
  const navLinks = [
    { label: 'Collection', path: '/collection' },
    { label: 'Categories', path: '/categories' },
    { label: 'Explore', path: '/showroom' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${
          isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-brown-ink/10 py-3 sm:py-3.5'
            : 'bg-brand-cream/90 backdrop-blur-xs shadow-xs border-b border-brand-brown-ink/10 py-4 sm:py-4.5'
        }`}
      >
        {/* African Diamond Motif Pattern across the Navbar */}
        <DiamondMotifPattern
          className="text-brand-terracotta absolute inset-0 pointer-events-none"
          opacity={0.08}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">

            {/* Brand Logo & Wordmark (Constrained for Image insertion) */}
            <Link
              to="/"
              className="group text-left flex items-center gap-3 focus:outline-none"
              aria-label={`${SITE_CONTENT.brand.name} Home`}
            >
              {/* Logo Image Slot (constrained dimensions, ready for your image) */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-brand-cream-muted/70 flex items-center justify-center border border-brand-terracotta/40 group-hover:border-brand-terracotta transition-colors overflow-hidden shrink-0">
                <img
                  src="/logo.png"
                  alt="Soul Space Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    // Graceful fallback to monogram until user places /logo.png
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span className="hidden font-display font-extrabold text-sm tracking-tight text-brand-brown-dark">
                  S<span className="text-brand-terracotta">&</span>S
                </span>
              </div>

              <div className="flex flex-col">
                <span className="font-display font-bold text-sm sm:text-base tracking-widest text-brand-brown-dark uppercase leading-none">
                  {SITE_CONTENT.brand.name}
                </span>
                <span className="font-serif italic text-[11px] sm:text-xs tracking-wider text-brand-terracotta font-semibold mt-1">
                  {SITE_CONTENT.brand.subtitle}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links — Organized site flow */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-brown/85">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative py-1 text-sm tracking-wide hover:text-brand-terracotta transition-colors duration-200 group focus:outline-none"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-brand-terracotta group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Right Action Buttons: Premium Order CTA + WhatsApp */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Premium Dedicated Order Button */}
              <Link
                to="/order"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brand-cream bg-brand-brown-dark hover:bg-brand-terracotta transition-all duration-300 rounded-sm shadow-xs border border-brand-brown-dark hover:border-brand-terracotta group"
                title="Place an Order"
              >
                <ShoppingBag className="w-4 h-4 text-brand-gold group-hover:text-brand-cream transition-colors" />
                <span className="tracking-wider uppercase">Order</span>
              </Link>

              {/* Direct WhatsApp Contact */}
              <a
                href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONTENT.contact.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-brown-dark hover:text-brand-terracotta transition-colors rounded-sm border border-brand-terracotta/40 hover:border-brand-terracotta bg-brand-cream/60"
                title="Direct WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Actions: Order Quick Button + Menu Hamburger */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/order"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-brand-brown-dark text-brand-cream text-xs font-semibold rounded-sm border border-brand-brown-dark"
                title="Order"
                aria-label="Order"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-brand-gold" />
                <span className="text-[11px] uppercase">Order</span>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-brown-dark hover:text-brand-terracotta focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-brand-brown-dark/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-brand-cream shadow-2xl p-6 flex flex-col justify-between overflow-y-auto relative">
            {/* African Pattern in Mobile Drawer */}
            <DiamondMotifPattern
              className="text-brand-terracotta absolute inset-0 pointer-events-none"
              opacity={0.08}
            />

            <div className="relative z-10 space-y-6 pt-16">
              <div className="border-b border-brand-brown-ink/10 pb-4">
                <div className="font-display font-extrabold text-xl text-brand-brown-dark">{SITE_CONTENT.brand.name}</div>
                <div className="font-serif italic text-sm text-brand-terracotta">{SITE_CONTENT.brand.subtitle}</div>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-left text-lg font-display font-semibold text-brand-brown-dark hover:text-brand-terracotta transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-brand-terracotta/60" />
                  </Link>
                ))}
              </nav>

              <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-70 my-4" />

              <div className="space-y-3 pt-2">
                <Link
                  to="/order"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-brown-dark text-brand-cream font-semibold text-xs tracking-wider uppercase rounded-sm shadow-xs"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <span>Place An Order</span>
                </Link>

                <a
                  href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONTENT.contact.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-terracotta/50 bg-brand-cream/80 text-brand-brown-dark font-semibold text-xs tracking-wider uppercase rounded-sm"
                >
                  <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            <div className="relative z-10 pt-8 text-center text-xs text-brand-brown/50 font-mono">
              HANDMADE WITH PASSION & AFRICAN HERITAGE
            </div>
          </div>
        </div>
      )}
    </>
  );
};
