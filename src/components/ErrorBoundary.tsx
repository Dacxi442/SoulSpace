import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw, Home, MessageCircle } from 'lucide-react';
import { SITE_CONTENT } from '../data/siteContent';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in Soul Space application:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen bg-brand-cream flex items-center justify-center p-4 sm:p-6 select-none">
          <div className="max-w-lg w-full bg-brand-brown-dark text-brand-cream rounded-xl p-8 sm:p-10 shadow-2xl border border-brand-gold/30 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-brand-terracotta/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-brand-gold/20 rounded-full blur-3xl pointer-events-none" />

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-brand-terracotta/20 border border-brand-terracotta flex items-center justify-center text-brand-terracotta shadow-md">
              <AlertCircle className="w-8 h-8" />
            </div>

            {/* Typography */}
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-gold font-semibold">
              Soul Space Creations · System Notice
            </span>
            <h1 className="font-serif italic font-bold text-2xl sm:text-3xl text-brand-cream mt-2 mb-3">
              Something went unexpected
            </h1>
            <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed font-light mb-8 max-w-sm mx-auto">
              We encountered a temporary interruption while loading this section. Please refresh the page or return to the main collection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={this.handleReload}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-brown-near-black font-sans font-bold text-xs tracking-wider uppercase rounded-md border border-brand-gold-light shadow-md transition-all cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reload Page</span>
              </button>

              <button
                type="button"
                onClick={this.handleGoHome}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-brown hover:bg-brand-brown-ink text-brand-cream font-sans font-bold text-xs tracking-wider uppercase rounded-md border border-brand-cream/20 shadow-md transition-all cursor-pointer"
              >
                <Home className="w-4 h-4" />
                <span>Return Home</span>
              </button>
            </div>

            {/* Support Link */}
            <div className="mt-8 pt-6 border-t border-brand-cream/10">
              <a
                href={`https://wa.me/${SITE_CONTENT.contact.whatsappNumber}?text=${encodeURIComponent('Hello Soul Space Creations, I encountered an issue on your website.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-brand-gold hover:underline font-mono"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Notify the Artisan on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
