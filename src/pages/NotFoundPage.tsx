import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ShoppingBag, Compass, ArrowLeft, Search, MessageCircle } from 'lucide-react';
import { DiamondMotifPattern, ArchitecturalGridLines } from '../components/AfricanPatterns';
import { SITE_CONTENT } from '../data/siteContent';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="pt-24 min-h-screen bg-brand-cream text-brand-brown-dark relative overflow-hidden flex items-center justify-center py-16">
      {/* Background Motifs */}
      <DiamondMotifPattern
        className="text-brand-terracotta absolute inset-0 pointer-events-none"
        opacity={0.08}
      />
      <ArchitecturalGridLines className="opacity-30" />

      {/* Decorative Glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-terracotta/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

        {/* 404 Large Display */}
        <div className="relative inline-block mb-4">
          <span className="font-serif italic font-bold text-8xl sm:text-9xl text-brand-terracotta/25 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="px-3 py-1 rounded-sm bg-brand-brown-dark text-brand-gold text-xs font-mono tracking-[0.2em] uppercase font-semibold border border-brand-gold/30 shadow-lg">
              Page Not Found
            </span>
          </div>
        </div>

        {/* Headings */}
        <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-brown-dark tracking-tight mb-4">
          This Silhouette Doesn't Exist
        </h1>
        <p className="text-sm sm:text-base text-brand-brown-ink/75 leading-relaxed font-light max-w-md mx-auto mb-8">
          The page or design piece you are searching for might have been moved, renamed, or is temporarily out of the atelier catalogue.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-brand-cream-muted border border-brand-brown-ink/20 hover:border-brand-brown-dark text-brand-brown-dark text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>

          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-brand-brown-dark hover:bg-brand-brown-ink text-brand-cream text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Home className="w-4 h-4 text-brand-gold" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/collection"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-brand-gold hover:bg-brand-gold-light text-brand-brown-near-black text-xs font-extrabold uppercase tracking-wider transition-all shadow-md"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>View Collection</span>
          </Link>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="pt-8 border-t border-brand-brown-ink/10">
          <p className="text-xs font-mono uppercase tracking-widest text-brand-terracotta mb-4">
            Popular Atelier Destinations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Link
              to="/categories"
              className="px-3 py-1.5 rounded-sm bg-brand-cream-muted hover:bg-brand-brown-dark hover:text-brand-cream text-xs font-medium text-brand-brown-dark transition-colors border border-brand-brown-ink/10"
            >
              Categories & Silhouettes
            </Link>
            <Link
              to="/showroom"
              className="px-3 py-1.5 rounded-sm bg-brand-cream-muted hover:bg-brand-brown-dark hover:text-brand-cream text-xs font-medium text-brand-brown-dark transition-colors border border-brand-brown-ink/10"
            >
              Floating Showroom
            </Link>
            <Link
              to="/order"
              className="px-3 py-1.5 rounded-sm bg-brand-cream-muted hover:bg-brand-brown-dark hover:text-brand-cream text-xs font-medium text-brand-brown-dark transition-colors border border-brand-brown-ink/10"
            >
              Custom Bespoke Order
            </Link>
            <Link
              to="/contact"
              className="px-3 py-1.5 rounded-sm bg-brand-cream-muted hover:bg-brand-brown-dark hover:text-brand-cream text-xs font-medium text-brand-brown-dark transition-colors border border-brand-brown-ink/10"
            >
              Contact Maker
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
