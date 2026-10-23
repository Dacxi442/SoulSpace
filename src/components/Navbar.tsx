import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  MessageCircle,
  ShoppingBag,
} from 'lucide-react';
import {
  AfricanPatternBorderRibbon,
  DiamondMotifPattern,
} from './AfricanPatterns';
import { Link, useLocation } from 'react-router-dom';
import { SITE_CONTENT } from '../data/siteContent';
import { NAV_LINKS } from '../data/navigationData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [drawerMounted, setDrawerMounted] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keep the drawer mounted briefly so its closing animation can finish.
  useEffect(() => {
    if (mobileMenuOpen) {
      setDrawerMounted(true);
      return;
    }

    if (!drawerMounted) return;

    const timer = window.setTimeout(() => {
      setDrawerMounted(false);
    }, 300);

    return () => window.clearTimeout(timer);
  }, [mobileMenuOpen, drawerMounted]);

  // Close the drawer with Escape and prevent background scrolling.
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // Close the drawer when navigating to another page.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navLinks = NAV_LINKS;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path ||
      location.pathname.startsWith(`${path}/`);
  };

  const whatsappUrl = `https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(
    SITE_CONTENT.contact.whatsappMessage
  )}`;

  return (
    <>
      {/* Main Navbar with Frosted Glass Effect */}
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden border-b border-brand-brown-ink/10 ${
          isScrolled
            ? 'bg-brand-cream/80 backdrop-blur-xl shadow-md py-3 sm:py-3.5'
            : 'bg-brand-cream/70 backdrop-blur-lg shadow-xs py-3.5 sm:py-4'
        }`}
      >
        <DiamondMotifPattern
          className="text-brand-terracotta absolute inset-0 pointer-events-none"
          opacity={0.08}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">

            {/* Brand Logo and Wordmark */}
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="group text-left flex items-center gap-3 focus:outline-none"
              aria-label={`${SITE_CONTENT.brand.name} Home`}
            >
              <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-sm bg-brand-cream-muted/70 flex items-center justify-center border border-brand-terracotta/40 group-hover:border-brand-terracotta transition-colors overflow-hidden shrink-0">
                <img
                  src="/logo.jpeg"
                  alt="Soul Space Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Main navigation"
              className="hidden lg:flex items-center gap-8 text-sm font-medium text-brand-brown/85"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                  className={`relative py-1 text-sm tracking-wide transition-colors duration-200 group focus:outline-none ${
                    isActive(link.path)
                      ? 'text-brand-terracotta'
                      : 'hover:text-brand-terracotta'
                  }`}
                >
                  <span>{link.label}</span>

                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-terracotta transition-all duration-300 ${
                      isActive(link.path)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Unified Right-End Action Buttons & Navigation Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Order Button */}
              <Link
                to="/order"
                onClick={closeMobileMenu}
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 text-[11px] sm:text-xs font-semibold text-brand-cream bg-brand-brown-dark hover:bg-brand-terracotta transition-all duration-300 rounded-sm shadow-xs border border-brand-brown-dark hover:border-brand-terracotta group shrink-0"
                title="Place an Order"
                aria-label="Place an Order"
              >
                <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-gold group-hover:text-brand-cream transition-colors" />
                <span className="tracking-wider uppercase">Order</span>
              </Link>

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 text-[11px] sm:text-xs font-medium text-brand-brown-dark hover:text-brand-terracotta transition-colors rounded-sm border border-brand-terracotta/40 hover:border-brand-terracotta bg-brand-cream/60 shrink-0"
                title="Direct WhatsApp Inquiry"
                aria-label="WhatsApp Inquiry"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-whatsapp" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Toggle Menu Button (Visible on mobile & tablet, hidden on desktop lg+) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen((prev) => !prev)}
                className="p-1.5 sm:p-2 text-brand-brown-dark hover:text-brand-terracotta focus:outline-none rounded-sm transition-colors lg:hidden shrink-0"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-dropdown"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                ) : (
                  <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile / Tablet Dropdown Menu — Compact square-like panel dropping down from navbar */}
      {drawerMounted && (
        <div className="lg:hidden">
          {/* Backdrop overlay */}
          <div
            className={`fixed inset-0 z-40 bg-brand-brown-dark/35 backdrop-blur-xs transition-opacity duration-300 ${
              mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Square-like Glassy Dropdown Card */}
          <div
            id="mobile-navigation-dropdown"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className={`fixed z-50 transition-all duration-300 ease-out 
              top-[64px] sm:top-[72px] 
              left-3 right-3 sm:left-auto sm:right-6 sm:w-88 
              max-w-md mx-auto sm:mx-0
              bg-brand-cream/92 backdrop-blur-2xl 
              border border-brand-brown-ink/15 shadow-2xl rounded-2xl 
              p-5 sm:p-6 overflow-hidden 
              ${
                mobileMenuOpen
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
                  : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
              }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* African Diamond Motif Pattern */}
            <DiamondMotifPattern
              className="text-brand-terracotta absolute inset-0 pointer-events-none"
              opacity={0.06}
            />

            <div className="relative z-10 space-y-4">
              {/* Header inside dropdown */}
              <div className="flex items-center justify-between border-b border-brand-brown-ink/10 pb-3">
                <div className="min-w-0">
                  <div className="font-display font-extrabold text-base sm:text-lg text-brand-brown-dark truncate">
                    {SITE_CONTENT.brand.name}
                  </div>
                  <div className="font-serif italic text-xs text-brand-terracotta truncate">
                    {SITE_CONTENT.brand.subtitle}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="shrink-0 p-1.5 rounded-full text-brand-brown-dark hover:text-brand-terracotta hover:bg-brand-terracotta/10 transition-colors focus:outline-none"
                  aria-label="Close navigation menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col space-y-1"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={`text-left text-sm sm:text-base font-display font-semibold transition-all py-2.5 px-3 rounded-lg flex items-center justify-between group ${
                      isActive(link.path)
                        ? 'text-brand-terracotta bg-brand-terracotta/10'
                        : 'text-brand-brown-dark hover:text-brand-terracotta hover:bg-brand-cream-muted/70'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isActive(link.path)
                          ? 'text-brand-terracotta'
                          : 'text-brand-terracotta/60 group-hover:text-brand-terracotta'
                      }`}
                    />
                  </Link>
                ))}
              </nav>

              <AfricanPatternBorderRibbon
                color="#D95A2B"
                className="opacity-70 my-2"
              />

              {/* Footer Note */}
              <div className="text-center text-[10px] text-brand-brown/50 font-mono tracking-wider pt-1">
                HANDMADE WITH PASSION &amp; AFRICAN HERITAGE
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};