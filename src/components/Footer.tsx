import React from 'react';
import {
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import {
  DiamondMotifPattern,
  ArchitecturalGridLines,
  AfricanPatternBorderRibbon
} from './AfricanPatterns';
import { Link } from 'react-router-dom';
import { SITE_CONTENT } from '../data/siteContent';

interface FooterProps {
  onNavigate?: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="pt-5 bg-brand-terracotta text-white relative overflow-hidden select-none">
      {/* Terracotta organic curved container */}
      <div
        className="relative bg-brand-brown overflow-hidden
                   mx-3 sm:mx-4 lg:mx-6 xl:mx-8
                   mb-0 lg:mb-6 xl:mb-8
                   rounded-[60px_60px_0_0] sm:rounded-[80px_80px_0_0]
                   lg:rounded-[180px_20px_100px_20px] xl:rounded-[220px_24px_120px_24px]"
      >
        {/* Diamond African pattern overlay */}
        <DiamondMotifPattern
          className="text-brand-terracotta absolute inset-0 pointer-events-none"
          opacity={0.12}
        />
        <ArchitecturalGridLines className="opacity-35" />

        {/* Main footer content */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-14 xl:px-20 pt-14 sm:pt-16 lg:pt-18 pb-6">

          {/* 4-Column Grid: Balanced, Rich, and Well-Presented */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">

            {/* Column 1: Tagline, Brand Identity & Origin */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="font-serif italic font-bold text-2xl sm:text-3xl text-white leading-tight max-w-sm">
                {SITE_CONTENT.footer.tagline}
              </h2>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-light max-w-sm">
                Soul Space Creations unites full-grain, vegetable-tanned leather with handwoven African geometric textiles. Hand-stitched with passion, designed around you.
              </p>

              {/* Atelier Location & Craft Origin */}
              <div className="pt-2 flex items-center gap-2 text-xs text-white/80 font-mono">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0" />
                <span>Nairobi, Kenya • Handcrafted Atelier</span>
              </div>
            </div>

            {/* Column 2: Navigation Links (Actual working site routes) */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-sm text-white/90">
                <li>
                  <Link
                    to="/collection"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Collection</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/categories"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Categories / Catalogue</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/showroom"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Explore Showroom</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group font-medium"
                  >
                    <span>Order Now</span>
                    <ArrowUpRight className="w-3 h-3 opacity-100 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>About Us & Impact</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1 group"
                  >
                    <span>Contact Us</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Support & Policies */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold">
                Support
              </h4>
              <ul className="space-y-2.5 text-sm text-white/90">
                <li>
                  <Link
                    to="/order"
                    className="hover:text-brand-gold transition-colors"
                  >
                    Order Guidelines
                  </Link>
                </li>
                <li>
                  <a
                    href="#privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Privacy Policy: Soul Space Creations respects your privacy. Any contact or order details provided are strictly confidential and used solely to craft and deliver your bespoke order.");
                    }}
                    className="hover:text-brand-gold transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONTENT.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Artisan WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact Direct & Follow Us (Enriched social links) */}
            <div className="lg:col-span-3 space-y-5">
              {/* Direct Atelier Communication */}
              <div className="space-y-2">
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-brand-gold">
                  Reach out to us Directly
                </h4>
                <div className="space-y-1.5 text-xs text-white/80 font-mono">
                  <a
                    href={`mailto:${SITE_CONTENT.contact.email}`}
                    className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                    <span className="truncate">{SITE_CONTENT.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${SITE_CONTENT.contact.phoneNumber}`}
                    className="flex items-center gap-2 hover:text-brand-gold transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-terracotta shrink-0" />
                    <span>{SITE_CONTENT.contact.phoneNumber}</span>
                  </a>
                </div>
              </div>

              {/* Follow Our Journey — Extended Social Icons */}
              <div className="space-y-3">
                <h4 className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-white">
                  Follow Our Journey
                </h4>
                <div className="flex flex-wrap items-center gap-2.5">
                  {/* Instagram */}
                  <a
                    href={SITE_CONTENT.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-brand-terracotta hover:border-white transition-all duration-300"
                    title="Instagram"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  {/* TikTok */}
                  <a
                    href={SITE_CONTENT.contact.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-brand-terracotta hover:border-white transition-all duration-300"
                    title="TikTok"
                    aria-label="TikTok"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" />
                    </svg>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent(SITE_CONTENT.contact.whatsappMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-brand-terracotta hover:border-white transition-all duration-300"
                    title="WhatsApp"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-brand-terracotta hover:border-white transition-all duration-300"
                    title="Facebook"
                    aria-label="Facebook"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>

                  {/* Pinterest */}
                  <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full border border-white/70 text-white flex items-center justify-center hover:bg-white hover:text-brand-terracotta hover:border-white transition-all duration-300"
                    title="Pinterest"
                    aria-label="Pinterest"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.99-.1-2.52.02-3.61l.85-3.62s-.22-.43-.22-1.07c0-1 .58-1.75 1.3-1.75.61 0 .91.46.91 1.02 0 .62-.39 1.54-.6 2.4-.17.72.36 1.3 1.07 1.3 1.28 0 2.27-1.35 2.27-3.3 0-1.73-1.24-2.93-3.02-2.93-2.06 0-3.26 1.54-3.26 3.14 0 .62.24 1.29.54 1.65.06.07.07.13.05.2l-.2 1.03c-.04.14-.13.17-.29.1-1.08-.5-1.75-2.07-1.75-3.34 0-2.72 1.98-5.21 5.7-5.21 2.99 0 5.31 2.13 5.31 4.98 0 2.97-1.87 5.36-4.47 5.36-.87 0-1.7-.45-1.98-.99l-.54 2.06c-.2 1.02-.74 2.3-1.1 3.12A12 12 0 1 0 12 0z" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Decorative African Ribbon Divider */}
          <div className="my-8 sm:my-10">
            <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-60" />
          </div>

          {/* Giant brand name at the bottom — clipped at bottom edge */}
          <div className="overflow-hidden">
            <div
              className="font-display font-black text-white/20 leading-none tracking-tight select-none text-center"
              style={{
                fontSize: 'clamp(20px, 6vw, 50px)',
                marginBottom: '0.1em',
              }}
            >
              {SITE_CONTENT.brand.name.toUpperCase()}
            </div>
            <p className="text-[10px] mt-2 justify-center text-center text-white/75 font-mono leading-relaxed">
              {SITE_CONTENT.footer.copyright}
            </p>
            <p className="text-[11px] justify-center text-center text-white/75 font-mono leading-relaxed">
              {/* {SITE_CONTENT.footer.credit}{' '} */}
              <a
                href={SITE_CONTENT.footer.creditLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-brand-gold"
              >
                {SITE_CONTENT.footer.credit}
              </a>
            </p>
            <p className="text-[11px] justify-center text-center text-white/75 font-mono leading-relaxed">
              All Rights Reserved by Soul Space Creations
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};
