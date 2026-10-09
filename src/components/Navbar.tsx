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

  const navLinks = [
    { label: 'Collection', path: '/collection' },
    { label: 'Categories', path: '/categories' },
    { label: 'Explore', path: '/showroom' },
    { label: 'About Us', path: '/aboutus' },
    { label: 'Contact', path: '/contact' },
  ];

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
      {/* Main Navbar — Original sizing and styling preserved */}
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 overflow-hidden ${isScrolled
            ? 'bg-brand-cream/95 backdrop-blur-md shadow-sm border-b border-brand-brown-ink/10 py-3 sm:py-3.5'
            : 'bg-brand-cream/90 backdrop-blur-xs shadow-xs border-b border-brand-brown-ink/10 py-4 sm:py-4.5'
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
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-sm bg-brand-cream-muted/70 flex items-center justify-center border border-brand-terracotta/40 group-hover:border-brand-terracotta transition-colors overflow-hidden shrink-0">
                <img
                  src="/logo.png"
                  alt="Soul Space Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback =
                      e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />

                <span className="hidden font-display font-extrabold text-sm tracking-tight text-brand-brown-dark">
                  S<span className="text-brand-terracotta">&amp;</span>S
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
                  className={`relative py-1 text-sm tracking-wide transition-colors duration-200 group focus:outline-none ${isActive(link.path)
                      ? 'text-brand-terracotta'
                      : 'hover:text-brand-terracotta'
                    }`}
                >
                  <span>{link.label}</span>

                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-brand-terracotta transition-all duration-300 ${isActive(link.path)
                        ? 'w-full'
                        : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Desktop Order and WhatsApp Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/order"
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-brand-cream bg-brand-brown-dark hover:bg-brand-terracotta transition-all duration-300 rounded-sm shadow-xs border border-brand-brown-dark hover:border-brand-terracotta group"
                title="Place an Order"
              >
                <ShoppingBag className="w-4 h-4 text-brand-gold group-hover:text-brand-cream transition-colors" />
                <span className="tracking-wider uppercase">Order</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-brand-brown-dark hover:text-brand-terracotta transition-colors rounded-sm border border-brand-terracotta/40 hover:border-brand-terracotta bg-brand-cream/60"
                title="Direct WhatsApp Inquiry"
              >
                <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Order Button and Menu Toggle */}
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
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 text-brand-brown-dark hover:text-brand-terracotta focus:outline-none"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer — Slides in from the LEFT */}
      {drawerMounted && (
        <div
          className={`fixed inset-0 z-[60] lg:hidden bg-brand-brown-dark/80 backdrop-blur-sm transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={closeMobileMenu}
          aria-hidden={!mobileMenuOpen}
        >
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            inert={!mobileMenuOpen}
            className={`absolute inset-y-0 left-0 w-[82%] max-w-xs bg-brand-cream shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto relative transition-transform duration-300 ease-in-out ${mobileMenuOpen
                ? 'translate-x-0'
                : '-translate-x-full'
              }`}
            onClick={(event) => event.stopPropagation()}
          >
            {/* African Pattern */}
            <DiamondMotifPattern
              className="text-brand-terracotta absolute inset-0 pointer-events-none"
              opacity={0.08}
            />

            <div className="relative z-10 space-y-6 pt-1">

              {/* Drawer Header and Close Button */}
              <div className="flex items-start justify-between gap-3 border-b border-brand-brown-ink/10 pb-4">
                <div className="min-w-0">
                  <div className="font-display font-extrabold text-lg sm:text-xl text-brand-brown-dark">
                    {SITE_CONTENT.brand.name}
                  </div>

                  <div className="font-serif italic text-sm text-brand-terracotta mt-1">
                    {SITE_CONTENT.brand.subtitle}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="shrink-0 p-2 -mr-2 -mt-1 rounded-sm text-brand-brown-dark hover:text-brand-terracotta hover:bg-brand-terracotta/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-terracotta"
                  aria-label="Close navigation menu"
                  autoFocus
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col space-y-3"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={closeMobileMenu}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                    className={`text-left text-base sm:text-lg font-display font-semibold transition-colors py-2 flex items-center justify-between gap-3 border-b border-brand-brown-ink/5 ${isActive(link.path)
                        ? 'text-brand-terracotta'
                        : 'text-brand-brown-dark hover:text-brand-terracotta'
                      }`}
                  >
                    <span>{link.label}</span>

                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isActive(link.path)
                          ? 'text-brand-terracotta'
                          : 'text-brand-terracotta/60'
                        }`}
                    />
                  </Link>
                ))}
              </nav>

              <AfricanPatternBorderRibbon
                color="#D95A2B"
                className="opacity-70 my-4"
              />

              {/* Drawer Action Buttons */}
              <div className="space-y-3 pt-2">
                <Link
                  to="/order"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-brand-brown-dark text-brand-cream font-semibold text-xs tracking-wider uppercase rounded-sm shadow-xs hover:bg-brand-terracotta transition-colors"
                >
                  <ShoppingBag className="w-4 h-4 text-brand-gold" />
                  <span>Place An Order</span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-brand-terracotta/50 bg-brand-cream/80 text-brand-brown-dark font-semibold text-xs tracking-wider uppercase rounded-sm hover:bg-brand-terracotta/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-brand-whatsapp" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="relative z-10 pt-8 mt-6 text-center text-[10px] sm:text-xs text-brand-brown/50 font-mono">
              HANDMADE WITH PASSION &amp; AFRICAN HERITAGE
            </div>

          </div>
        </div>
      )}
    </>
  );
};