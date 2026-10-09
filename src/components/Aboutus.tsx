import React from 'react';
import { Heart, Users, GraduationCap, Hammer, ArrowRight } from 'lucide-react';
import { DiamondMotifPattern } from './AfricanPatterns';

// Reuse existing bag/craft images as visual stand-ins until real community photos are provided
import heroImg from '../assets/images/ss_craft_artisan_1790067482692.jpg';
import workshopImg1 from '../assets/bags/bag1 (16).jpeg';
import workshopImg2 from '../assets/bags/bag1 (21).jpeg';
import workshopImg3 from '../assets/bags/bag1 (26).jpeg';

export const AboutUS: React.FC = () => {
  const highlights = [
    {
      icon: GraduationCap,
      stat: '30+',
      label: 'Students Trained',
      description:
        'Young people taught the art of bag-making and leatherwork — giving them a skill and a future.',
    },
    {
      icon: Hammer,
      stat: '1',
      label: 'Flagship Project',
      description:
        "Our signature workshop at a local students' home, where we taught children to cut, stitch, and design their own bags from scratch.",
    },
    {
      icon: Heart,
      stat: '∞',
      label: 'Lives Touched',
      description:
        'Every stitch teaches patience, every finished bag builds confidence. We are committed to empowering through craft.',
    },
  ];

  return (
    <section
      id="community-impact"
      className="py-6 sm:py-8 lg:py-12 bg-brand-cream relative overflow-hidden border-t border-brand-brown-ink/10"
    >
      {/* Subtle background motif */}
      <DiamondMotifPattern
        className="text-brand-terracotta absolute inset-0 pointer-events-none"
        opacity={0.1}
      />

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-brand-terracotta uppercase mb-3">
            <span className="w-8 h-[1.5px] bg-brand-terracotta" />
            <span>Beyond Fashion</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-brand-brown-dark tracking-tight leading-tight">
            About Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-brand-brown-ink/70 leading-relaxed font-light max-w-2xl">
            Fashion is what we do — but empowerment is why we do it. Beyond
            designing bags and curating thrift, we invest our skills back into
            our community by teaching young people the art of handcraft.
          </p>
        </div>

        {/* ── Main Feature: The Story ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">

          {/* Left: Image Collage */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-3">
              {/* Large hero image */}
              <div className="col-span-2 relative rounded-xl overflow-hidden aspect-[16/9] shadow-2xl">
                <img
                  src={heroImg}
                  alt="Teaching sewing and craftsmanship at community workshop"
                  className="w-full h-full object-cover brightness-[0.9]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-near-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-brown-near-black/60 backdrop-blur-md border border-brand-gold/30 text-[10px] font-mono tracking-wider uppercase text-brand-gold">
                    <Heart className="w-3 h-3" />
                    Community Workshop
                  </span>
                </div>
              </div>

              {/* Two smaller images */}
              <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
                <img
                  src={workshopImg1}
                  alt="Students learning bag-making skills"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-near-black/50 to-transparent" />
              </div>
              <div className="relative rounded-lg overflow-hidden aspect-square shadow-lg">
                <img
                  src={workshopImg2}
                  alt="Handmade bags created by students"
                  className="w-full h-full object-cover brightness-[0.88]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-near-black/50 to-transparent" />
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full bg-brand-terracotta/15 border-2 border-brand-terracotta/25 flex items-center justify-center backdrop-blur-sm hidden sm:flex">
              <Users className="w-8 h-8 text-brand-terracotta" />
            </div>
          </div>

          {/* Right: Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-brand-brown-dark tracking-tight leading-tight">
              Our Community Impact
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-brand-brown-dark leading-relaxed">
              "We went to a local students' home and taught the children how to
              sew bags — from cutting patterns to finishing seams. Watching them
              hold a bag they made with their own hands was the most rewarding
              moment of our journey."
            </p>

            <div className="space-y-4 text-sm sm:text-base text-brand-brown-ink/75 leading-relaxed font-light">
              <p>
                At Soul Space Creations, we believe that skills outlast
                charity. Instead of giving handouts, we equip young people
                with the knowledge and confidence to create something of
                value with their own hands.
              </p>
              <p>
                Our flagship project took us to a students' home, where
                we ran hands-on workshops teaching leatherwork,
                pattern-cutting, stitching techniques, and bag design.
                Many of the young participants had never held a sewing
                needle before — and they left with completed bags and
                a craft they can carry for life.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/?text=Hello%20Solace%20Space%20Creations,%20I'd%20love%20to%20support%20or%20learn%20more%20about%20your%20community%20work"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-gold hover:bg-brand-gold-light text-brand-brown-near-black font-sans font-extrabold text-xs tracking-[0.15em] uppercase rounded-md border border-brand-gold-light shadow-[0_10px_30px_rgba(212,163,89,0.3)] hover:shadow-[0_14px_36px_rgba(212,163,89,0.5)] transition-all duration-200 whitespace-nowrap"
              >
                Support Our Mission
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://wa.me/?text=Hello%20Solace%20Space%20Creations,%20I'm%20interested%20in%20your%20bag-making%20workshops"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 bg-brand-purple/85 hover:bg-brand-purple text-brand-cream font-sans font-bold text-xs tracking-[0.15em] uppercase rounded-md border border-brand-gold/40 hover:border-brand-gold shadow-[0_10px_28px_rgba(0,0,0,0.3)] transition-all duration-200 whitespace-nowrap"
              >
                Join a Workshop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUS;
