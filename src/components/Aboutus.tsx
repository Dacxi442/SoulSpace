
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowUpRight, ArrowRight, Heart, Compass, ShoppingBag,
  Shirt,
  Sparkles,
} from 'lucide-react';
import { ABOUT_US_DATA } from '../data/aboutusData';
import { SITE_CONTENT } from '../data/siteContent';
import { DiamondMotifPattern, AfricanPatternBorderRibbon } from './AfricanPatterns';

export interface AboutUsProps {
  onOpenBespoke?: () => void;
}

export const AboutUS: React.FC<AboutUsProps> = ({ onOpenBespoke }) => {
  const navigate = useNavigate();
  const { whatsappNumber } = SITE_CONTENT.contact;

  const whatsappLink = (message: string) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const highlights = [
    { title: 'Soul', label: 'The inspiration behind every creation' },
    { title: 'Space', label: 'A place to connect with our clients' },
    { title: 'Creations', label: 'Fashion, bags, and creative expression' },
    { title: 'Community', label: 'Sharing skills and creating opportunities' },
  ];

  const handleOpenBespoke = () => {
    if (onOpenBespoke) {
      onOpenBespoke();
    } else {
      navigate('/contact');
    }
  };

  return (
    <section
      id="community-impact"
      aria-labelledby="about-us-heading"
      className="bg-[#EAE3D2] px-3 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-10"
    >
      <DiamondMotifPattern className="text-brand-terracotta absolute inset-0 pointer-events-none" opacity={0.075} />

      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[28px] bg-white sm:rounded-[36px]">

        {/* INTRODUCTION: WHO WE ARE */}
        <div className="grid grid-cols-1 gap-6 px-6 pb-8 pt-8 sm:px-10 sm:pt-12 lg:grid-cols-[0.8fr_2fr] lg:gap-12 lg:px-14 lg:pb-10 lg:pt-14">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#f7f7f5] px-4 py-2 text-xs font-medium text-neutral-700">
              About Us
            </span>
          </div>

          <div>
            <h2
              id="about-us-heading"
              className="max-w-4xl text-3xl font-medium leading-[1.12] tracking-[-0.055em] text-[#171717] sm:text-4xl lg:text-[52px]"
            >
              Fashion that speaks to the soul, created with purpose.
            </h2>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-neutral-600 sm:text-base sm:leading-8">
              Soul Space Creations is built around the connection between
              creativity, fashion, and personal expression. Through handmade
              bags, thrifting, and fashion design consultation, we create
              opportunities for people to express themselves and make choices
              that feel true to who they are.
            </p>
          </div>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid grid-cols-1 gap-3 px-5 sm:px-8 lg:grid-cols-3">

          {/* WHO WE ARE */}
          <article className="flex min-h-[330px] flex-col rounded-[22px] bg-[#f7f7f6] p-6 sm:p-7 lg:min-h-[360px]">
            <Compass
              aria-hidden="true"
              className="h-6 w-6 text-neutral-800"
              strokeWidth={1.6}
            />

            <div className="mt-8">
              <h3 className="text-xl font-medium tracking-tight text-neutral-900">
                Who We Are
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Soul is the drive that inspires the beauty of a product.
                Space is the platform where we connect with our clients.
                Creations are the products and experiences we bring to them.
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Our approach is simple: we listen to our clients, understand
                their needs, and then we create.
              </p>
            </div>

            <div className="mt-auto flex flex-wrap items-center gap-3 pt-7">
              <a
                href={whatsappLink(ABOUT_US_DATA.supportMissionMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
              >
                Support Our Mission
              </a>

              <a
                href={whatsappLink(ABOUT_US_DATA.supportMissionMessage)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Soul Space Creations"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] text-white transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
              >
                <ArrowUpRight className="h-5 w-5" />
              </a>
            </div>
          </article>

          {/* FEATURED IMAGE */}
          <article className="group relative min-h-[330px] overflow-hidden rounded-[22px] bg-neutral-100 sm:min-h-[380px] lg:min-h-[360px]">
            <img
              src={ABOUT_US_DATA.images.hero}
              alt="The creativity and craftsmanship behind Soul Space Creations"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />

            <div className="absolute left-5 top-5 right-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-2 text-xs font-medium text-neutral-900 backdrop-blur-sm">
                <Heart className="h-3.5 w-3.5" />
                Handmade with Soul
              </span>
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
                We listen.
                <br />
                Then we create.
              </p>
            </div>
          </article>

          {/* OUR VISION */}
          <article className="flex min-h-[330px] flex-col justify-between rounded-[22px] bg-[#f7f7f6] p-5 sm:p-7 lg:min-h-[360px]">
            <div className="relative mx-auto h-[190px] w-full max-w-[310px]">
              <div className="absolute left-[3%] top-10 h-[125px] w-[31%] rotate-[-9deg] overflow-hidden rounded-xl bg-white shadow-sm">
                <img
                  src={ABOUT_US_DATA.images.workshop1}
                  alt="Learning and creative work"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute left-[34%] top-5 z-10 h-[140px] w-[32%] rotate-[3deg] overflow-hidden rounded-xl bg-white shadow-md">
                <img
                  src={ABOUT_US_DATA.images.workshop2}
                  alt="Handmade creations"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute right-[2%] top-9 h-[125px] w-[31%] rotate-[10deg] overflow-hidden rounded-xl bg-white shadow-sm">
                <img
                  src={ABOUT_US_DATA.images.hero}
                  alt="Soul Space Creations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="pt-5">
              <h3 className="text-xl font-medium tracking-tight text-neutral-900">
                Our Vision
              </h3>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                To create masterpieces that speak to the soul and change the
                way fashion is expressed through bags.
              </p>
            </div>
          </article>
        </div>

        {/* OUR IDENTITY, MISSION AND COMMUNITY */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 px-6 py-12 sm:px-10 sm:py-16 lg:grid-cols-4 lg:px-14 lg:py-16">
          {highlights.map((item) => (
            <div key={item.title} className="text-center">
              <p className="text-2xl font-medium tracking-[-0.045em] text-[#171717] sm:text-3xl lg:text-[34px]">
                {item.title}
              </p>

              <p className="mx-auto mt-2 max-w-[190px] text-xs leading-5 text-neutral-500 sm:text-sm">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-60" />


        {/* OUR SERVICES */}
        <section
          id="our-services"
          aria-labelledby="services-heading"
          className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
        >
          {/* Section heading */}
          <div className="mb-8 grid grid-cols-1 items-end gap-5 sm:mb-10 sm:grid-cols-[1fr_0.7fr] lg:mb-12 lg:px-7">
            <div>
              <span className="inline-flex rounded-full bg-[#f7f7f5] px-4 py-2 text-xs font-medium text-neutral-700">
                What We Do
              </span>

              <h2
                id="services-heading"
                className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] sm:text-5xl lg:text-[54px]"
              >
                Our Services
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600 sm:justify-self-end sm:text-right sm:text-base">
              From handmade bags to carefully sourced fashion finds and personal
              styling, we help you express yourself through choices that feel
              uniquely yours.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">

            {/* SERVICE 01 */}
            <article className="group flex min-h-[320px] flex-col rounded-[22px] bg-[#f7f7f6] p-6 transition-colors duration-300 hover:bg-[#f0efec] sm:min-h-[350px] sm:p-8">

              <div className=" pt-12">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-[26px]">
                  Bag Design & Styling
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Discover bags designed with creativity, character, and purpose.
                  We focus on handmade creations and distinctive styles that
                  complement your personality and fashion choices.
                </p>


              </div>
            </article>

            {/* SERVICE 02 */}
            <article className="group flex min-h-[20px] flex-col rounded-[22px] bg-[#f7f7f6] p-6 transition-colors duration-300 hover:bg-[#f0efec] sm:min-h-[350px] sm:p-8">
              <div className=" pt-12">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-[26px]">
                  Thrifting & Fashion Finds
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Explore pre-loved clothing and accessories with character.
                  We help you discover interesting fashion finds, build distinctive
                  looks, and explore style beyond conventional retail.
                </p>


              </div>
            </article>

            {/* SERVICE 03 */}
            <article className="group flex min-h-[320px] flex-col rounded-[22px] bg-[#f7f7f6] p-6 transition-colors duration-300 hover:bg-[#f0efec] sm:col-span-2 sm:min-h-[300px] sm:p-8 lg:col-span-1 lg:min-h-[350px]">


              <div className=" pt-12">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900 sm:text-[26px]">
                  Fashion & Lifestyle Curation
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Need help deciding what to wear or how to bring your look together?
                  Through personal styling and fashion design consultations, we help
                  you explore outfits, coordinate accessories and develop a style
                  that reflects who you are.
                </p>


              </div>
            </article>

          </div>

          {/* Closing statement */}
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-[15px] border border-neutral-200 px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <p className="max-w-xl text-sm leading-6 text-neutral-600 sm:text-base">
              Not sure which service you need? Tell us what you have in mind.
            </p>

            <button
              onClick={handleOpenBespoke}
              className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 focus-visible:ring-offset-2"
            >
              Let's Talk
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </section>


        <AfricanPatternBorderRibbon color="#D95A2B" className="opacity-60" />


        {/* BEYOND OUR PRODUCTS: COMMUNITY DEVELOPMENT */}
        <div className="px-8 pb-6 sm:px-8 sm:pb-8 lg:px-10">
          <div className="mb-8 grid grid-cols-1 items-end gap-5 sm:mb-10 sm:grid-cols-[1fr_0.7fr] lg:mb-12 lg:px-7">
            <div>
              <span className="inline-flex rounded-full bg-[#f7f7f5] px-4 py-2 text-xs font-medium text-neutral-700">
                Our Community Impact
              </span>

              <h2 className="mt-7 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] sm:text-5xl lg:text-[54px]">
                Beyond fashion
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-neutral-600 sm:justify-self-end sm:text-right sm:text-base">
              We believe creativity can do more than create beautiful
              products. It can help children discover their abilities,
              develop practical skills, and explore new possibilities.
            </p>
          </div>

          {/* EDITORIAL THREE-COLUMN GRID */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">


            {/* MIDDLE: COMMUNITY TRAINING */}
            <div className="grid grid-cols-1 gap-3">
              <article className="flex min-h-[210px] flex-col justify-center rounded-[22px] bg-[#f7f7f6] p-6 sm:p-7">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  01 / Learning
                </span>

                <h3 className="mt-4 text-xl font-medium tracking-tight text-neutral-900">
                  Fashion and tailoring skills
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Through planned training and coaching, we aim to introduce
                  children in the community to fashion, tailoring, and
                  hands-on creative work.
                </p>
              </article>

              <article className="flex min-h-[210px] flex-col justify-center rounded-[22px] bg-[#f7f7f6] p-6 sm:p-7">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-neutral-500">
                  02 / Opportunity
                </span>

                <h3 className="mt-4 text-xl font-medium tracking-tight text-neutral-900">
                  Skills for the future
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Our goal is to help children build their abilities,
                  gain practical experience, and work towards future
                  opportunities in fashion and tailoring.
                </p>


              </article>
            </div>

            <article className="relative flex min-h-[350px] flex-col justify-between overflow-hidden rounded-[22px] bg-[#f7f7f6] p-6 sm:min-h-[390px] sm:p-8 lg:min-h-[470px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 flex justify-center overflow-hidden opacity-[0.07]"
              >
                <svg
                  viewBox="0 0 400 220"
                  className="w-full max-w-md text-neutral-900"
                  fill="none"
                >
                  <path
                    d="M30 70 L60 45 L90 57 L110 35 L145 48 L155 70 L135 90 L145 110 L115 120 L95 145 L75 130 L55 100 L30 95 Z M170 55 L195 40 L215 50 L225 75 L210 95 L185 85 Z M230 90 L265 75 L300 90 L330 80 L355 105 L335 125 L305 120 L285 145 L260 130 L245 110 Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  {Array.from({ length: 7 }, (_, i) => (
                    <path
                      key={i}
                      d={`M${35 + i * 48} 20 V190`}
                      stroke="currentColor"
                      strokeWidth="0.6"
                    />
                  ))}
                  {Array.from({ length: 4 }, (_, i) => (
                    <path
                      key={i}
                      d={`M15 ${45 + i * 40} H385`}
                      stroke="currentColor"
                      strokeWidth="0.6"
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-10">
                <span className="text-xs font-medium uppercase tracking-[0.16em] text-neutral-500">
                  Giving Back
                </span>
              </div>

              <div className="relative z-10 mt-28">
                <h3 className="text-2xl font-medium tracking-tight text-neutral-900">
                  Creativity with purpose
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Our community development initiative is about sharing
                  knowledge, encouraging creativity, and helping children
                  discover the value of fashion & design and the practical skills that comes with it.
                </p>
              </div>
            </article>


            {/* RIGHT: COMMUNITY IMAGE */}
            <article className="group relative min-h-[390px] overflow-hidden rounded-[22px] bg-neutral-100 sm:min-h-[450px] lg:min-h-[470px]">
              <img
                src={ABOUT_US_DATA.images.workshop1}
                alt="Community learning and creative skills development"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-white/75">
                    Community Development
                  </span>

                  <p className="mt-2 max-w-[240px] text-2xl font-medium leading-tight tracking-tight text-white">
                    Sharing skills. Inspiring possibilities.
                  </p>
                </div>


              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUS;
