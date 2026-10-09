import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle2, Clock, MapPin, Mail, Phone, ShieldCheck, Instagram } from 'lucide-react';
import { DiamondMotifPattern, ConcentricSunburstRosette, InteractiveAfricanPatternStrip } from './AfricanPatterns';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'Bespoke Bag Commission',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };



  return (
    <section id="contact" className="py-5 sm:py-8 lg:py-10 bg-brand-gold text-brand-cream relative overflow-hidden">
      {/* Organic blob shape */}
      <div
        className="relative bg-brand-brown overflow-hidden
                   mx-3 sm:mx-4 lg:mx-6 xl:mx-8
                   rounded-[60px_60px_60px_60px] sm:rounded-[80px_80px_80px_80px]
                   lg:rounded-[180px_20px_180px_40px] xl:rounded-[220px_24px_220px_24px]
                   py-14 sm:py-16 lg:py-20"
      >
        <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.12} />

        <div className="max-w-7xl ml-auto mr-0 px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Section Header */}
          <div className="max-w-3xl mb-6 ml-auto lg:text-right">

            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-cream tracking-tight">
              Connect with Soul Space
            </h2>
            <p className="mt-3 font-serif italic text-2xl text-brand-gold font-medium leading-snug">
              Speak directly with the designer.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left Column: Direct WhatsApp & Workshop Information */}
            <div className="lg:col-span-5 space-y-2">

              {/* Social Channels */}
              <div className="p-4 sm:p-5 rounded-md bg-linear-to-br from-brand-brown to-brand-black/80 border border-brand-cream/15 shadow-xl space-y-4">
                <h3 className="font-sans font-bold text-[13px] uppercase tracking-[0.1em] text-brand-cream">
                  Reach Out via Our Social Channels
                </h3>

                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/?text=Hello%20S%20%26%20S%20Bags%20Collection!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-brand-cream/80 text-brand-cream flex items-center justify-center hover:bg-brand-cream hover:text-brand-terracotta transition-all duration-300"
                    title="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:soulspace@ssbagscollection.com"
                    className="w-10 h-10 rounded-full border-2 border-brand-cream/80 text-brand-cream flex items-center justify-center hover:bg-brand-cream hover:text-brand-terracotta transition-all duration-300"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-brand-cream/80 text-brand-cream flex items-center justify-center hover:bg-brand-cream hover:text-brand-terracotta transition-all duration-300"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>

                  {/* TikTok */}
                  <a
                    href="https://tiktok.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border-2 border-brand-cream/80 text-brand-cream flex items-center justify-center hover:bg-brand-cream hover:text-brand-terracotta transition-all duration-300"
                    title="TikTok"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.18 8.18 0 004.77 1.52V6.84a4.84 4.84 0 01-1-.15z" /></svg>
                  </a>



                </div>
              </div>

              {/* Soul Space Guarantees */}
              <div className="p-6 rounded-md bg-brand-brown/60 border border-brand-cream/10 space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-brand-terracotta mt-1 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-sm text-brand-cream">Fast Soul Space Response</div>
                    <div className="text-xs text-brand-cream/60 mt-0.5">We review all inquiries within 12–24 business hours.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-brand-terracotta mt-1 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-sm text-brand-cream">Insured Global Delivery</div>
                    <div className="text-xs text-brand-cream/60 mt-0.5">Tracked, signature-required worldwide courier shipping.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-brand-terracotta mt-1 shrink-0" />
                  <div>
                    <div className="font-display font-bold text-sm text-brand-cream">Direct Email</div>
                    <div className="text-xs text-brand-cream/60 mt-0.5">SoulSpace@ssbagscollection.com</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Contact Form */}
            <div className="lg:col-span-7 bg-brand-brown/90 p-8 rounded-md border border-brand-cream/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-brand-terracotta text-brand-cream mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-brand-cream">
                    Thank You for Reaching Out
                  </h3>
                  <p className="text-sm text-brand-cream/80 max-w-md mx-auto font-light leading-relaxed">
                    Your inquiry has been delivered directly to the maker. We will review your message and reply via email or WhatsApp promptly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-brand-cream text-brand-brown-dark text-xs font-semibold uppercase tracking-wider rounded-sm hover:bg-brand-terracotta hover:text-brand-cream transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-xl text-brand-cream mb-1">
                    Send an Soul Space Inquiry
                  </h3>
                  <p className="text-xs text-brand-cream/60 mb-4">
                    Fill out the form below and we will follow up with design options and leather swatches.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider uppercase text-brand-terracotta mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Amara Adebayo"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-brand-brown-dark border border-brand-cream/20 rounded p-3 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-terracotta focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider uppercase text-brand-terracotta mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="amara@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-brand-brown-dark border border-brand-cream/20 rounded p-3 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-terracotta focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono tracking-wider uppercase text-brand-terracotta mb-1.5">
                        WhatsApp / Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        placeholder="+44 7123 456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-brand-brown-dark border border-brand-cream/20 rounded p-3 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-terracotta focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono tracking-wider uppercase text-brand-terracotta mb-1.5">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                        className="w-full bg-brand-brown-dark border border-brand-cream/20 rounded p-3 text-xs text-brand-cream focus:border-brand-terracotta focus:outline-none"
                      >
                        <option value="Bespoke Bag Commission">Custom Order</option>
                        <option value="Purchase Existing Design">Purchase Existing Design</option>
                        <option value="Custom Size / Modification">Custom Size / Modification</option>
                        <option value="Press & Collaborative Inquiries">Fashion Styling</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono tracking-wider uppercase text-brand-terracotta mb-1.5">
                      Your Message & Design Vision
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about the bag you have in mind, color preferences, special measurements, or timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-brand-brown-dark border border-brand-cream/20 rounded p-3 text-xs text-brand-cream placeholder-brand-cream/30 focus:border-brand-terracotta focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-terracotta hover:bg-brand-brown text-brand-cream font-semibold text-xs tracking-wider uppercase rounded-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Soul Space Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};
