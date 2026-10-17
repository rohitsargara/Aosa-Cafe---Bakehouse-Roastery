import React from 'react';
import { ArrowUpRight, Compass, Clock, Flame } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface HeroProps {
  onOpenReservation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-[#242220]">
      {/* Subtle architectural ambient backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-[#C29B62]/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-[#3B342B]/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Unboxed editorial kicker with subtle typographic separators */}
        <div className="flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#A8A29A] mb-6">
          <span>Udaipur, Rajasthan</span>
          <span aria-hidden="true" className="text-[#59534B]">·</span>
          <span>Panchwati</span>
          <span aria-hidden="true" className="text-[#59534B]">·</span>
          <span>Artisan Micro-Roastery & Bakehouse</span>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-light text-[#F5F3EF] leading-[1.08] tracking-[-0.02em] text-balance">
                A slow ritual of craft coffee and naturally leavened bread.
              </h1>

              <p className="text-base sm:text-lg text-[#A8A29A] font-light leading-relaxed max-w-xl">
                Tucked near the UIT Circle in Panchwati, Aosa is Udaipur’s sanctuary for specialty coffee lovers and sourdough devotees. We roast our own single-origin beans in small batches and hand-laminate French butter pastries every single morning.
              </p>
            </div>

            {/* Interactive Working CTAs */}
            <div className="pt-8 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs tracking-[0.12em] uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors"
                >
                  Explore Menu
                </a>

                <button
                  onClick={onOpenReservation}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-xs tracking-[0.12em] uppercase font-medium text-[#E8E4DF] border border-[#3B3733] hover:border-[#F5F3EF] hover:bg-[#1E1D1B] transition-colors"
                >
                  Book a Table
                </button>

                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs tracking-[0.08em] font-medium text-[#A8A29A] hover:text-[#C29B62] transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Unboxed Metadata Strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#807A72] pt-4 border-t border-[#242220]">
                <span>Near UIT Circle</span>
                <span aria-hidden="true">·</span>
                <span>Hours: 09:00 AM – 11:00 PM</span>
                <span aria-hidden="true">·</span>
                <span>Late Night Weekend Roastery till 02:00 AM</span>
                <span aria-hidden="true">·</span>
                <span>Avg. ₹800 for two</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Visual Anchor Card */}
          <div className="lg:col-span-5 flex">
            <div className="w-full bg-[#1A1918] border border-[#2B2824] p-8 flex flex-col justify-between relative overflow-hidden group">
              {/* Subtle architectural grid backdrop */}
              <div className="absolute inset-0 bg-[radial-gradient(#2B2824_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

              {/* Card Header */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#2B2824] pb-4">
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#A8A29A] font-medium">
                  The Daily Roaster & Oven Log
                </span>
                <span className="text-xs font-serif italic text-[#C29B62]">
                  Udaipur Studio
                </span>
              </div>

              {/* Centerpiece Vector Illustration: Handcrafted Architectural Brew & Bread Ritual */}
              <div className="relative z-10 py-8 my-auto flex flex-col items-center justify-center">
                <svg
                  className="w-48 h-48 text-[#C29B62]/80 group-hover:text-[#F5F3EF] transition-colors duration-500"
                  viewBox="0 0 200 200"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Chemex / V60 Cone Silhouette */}
                  <path d="M 60 40 L 140 40 L 115 90 L 140 160 A 10 10 0 0 1 130 170 L 70 170 A 10 10 0 0 1 60 160 L 85 90 Z" />
                  {/* Timber collar & leather tie */}
                  <line x1="83" y1="88" x2="117" y2="88" />
                  <line x1="80" y1="96" x2="120" y2="96" />
                  <circle cx="100" cy="92" r="3" fill="currentColor" />
                  {/* Rising steam lines */}
                  <path d="M 90 32 C 90 24 100 24 100 16" strokeDasharray="3 3" />
                  <path d="M 100 32 C 100 24 110 24 110 16" strokeDasharray="3 3" />
                  {/* Extracted drops */}
                  <circle cx="100" cy="125" r="2" fill="currentColor" />
                  <circle cx="100" cy="142" r="3" fill="currentColor" />
                  {/* Measured brew lines */}
                  <line x1="88" y1="135" x2="94" y2="135" strokeOpacity="0.4" />
                  <line x1="85" y1="145" x2="95" y2="145" strokeOpacity="0.6" />
                  <line x1="80" y1="155" x2="96" y2="155" strokeOpacity="0.8" />
                </svg>

                <div className="text-center mt-3">
                  <div className="text-sm font-serif text-[#F5F3EF] tracking-wide">
                    Artisanal Extraction & Wild Ferment
                  </div>
                  <div className="text-xs text-[#807A72] mt-1 font-mono tabular-nums">
                    Single-Origin Karnataka Arabica · 93°C · 1:16
                  </div>
                </div>
              </div>

              {/* Card Footer: Live Log Details */}
              <div className="relative z-10 pt-4 border-t border-[#2B2824] space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A8A29A] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#C29B62]" />
                    In-House Roastery
                  </span>
                  <span className="text-[#F5F3EF] font-medium">Chikmagalur Emerald</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#A8A29A] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C29B62]" />
                    Bakehouse Ferment
                  </span>
                  <span className="text-[#F5F3EF] font-medium">36h Sourdough & Croissants</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column Proof & Metric Strip below Hero Split */}
        <div className="mt-16 pt-10 border-t border-[#242220] grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl lg:text-3xl font-serif text-[#F5F3EF] tabular-nums">
              36 hrs
            </div>
            <div className="text-xs text-[#A8A29A] uppercase tracking-wider mt-1">
              Natural Dough Fermentation
            </div>
          </div>

          <div>
            <div className="text-2xl lg:text-3xl font-serif text-[#F5F3EF] tabular-nums">
              100%
            </div>
            <div className="text-xs text-[#A8A29A] uppercase tracking-wider mt-1">
              Micro-Batch In-House Roast
            </div>
          </div>

          <div>
            <div className="text-2xl lg:text-3xl font-serif text-[#F5F3EF] tabular-nums">
              ₹800
            </div>
            <div className="text-xs text-[#A8A29A] uppercase tracking-wider mt-1">
              Average Table Spend for Two
            </div>
          </div>

          <div>
            <div className="text-2xl lg:text-3xl font-serif text-[#F5F3EF] tabular-nums">
              02:00 AM
            </div>
            <div className="text-xs text-[#A8A29A] uppercase tracking-wider mt-1">
              Late Night Weekend Roastery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
