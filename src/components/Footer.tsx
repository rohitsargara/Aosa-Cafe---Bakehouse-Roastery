import React from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0D0C] border-t border-[#201E1B] text-[#A8A29A] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#201E1B]">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#"
              className="text-2xl font-serif tracking-[0.24em] font-medium text-[#F5F3EF] hover:text-[#C29B62] transition-colors inline-block"
            >
              {CAFE_INFO.brand}
            </a>
            <p className="text-xs text-[#807A72] leading-relaxed max-w-sm">
              Artisan Bakehouse & Specialty Coffee Roastery. Dedicated to wild 36-hour dough fermentation, shade-grown Indian micro-lots, and generous hospitality in Udaipur.
            </p>
            <div className="text-xs text-[#807A72] pt-2">
              Near UIT Circle, Panchwati / Madhuban, Udaipur 313001, Rajasthan
            </div>
          </div>

          {/* Quick Nav Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#F5F3EF] font-semibold">
              Explore
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#story" className="hover:text-[#F5F3EF] transition-colors">
                  Our Philosophy
                </a>
              </li>
              <li>
                <a href="#roastery" className="hover:text-[#F5F3EF] transition-colors">
                  Micro-Roastery Lots
                </a>
              </li>
              <li>
                <a href="#bakehouse" className="hover:text-[#F5F3EF] transition-colors">
                  Sourdough Bakehouse
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F5F3EF] transition-colors">
                  Curated Cafe Menu
                </a>
              </li>
              <li>
                <a href="#space" className="hover:text-[#F5F3EF] transition-colors">
                  Atmosphere & Spaces
                </a>
              </li>
              <li>
                <a href="#visit" className="hover:text-[#F5F3EF] transition-colors">
                  Location & Hours
                </a>
              </li>
            </ul>
          </div>

          {/* Hours & Contact Col */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[#F5F3EF] font-semibold">
              Hours & Inquiries
            </div>
            <div className="space-y-1.5 text-xs text-[#807A72]">
              <div className="flex justify-between">
                <span>Sun — Thu:</span>
                <span className="text-[#E8E4DF] font-mono">09:00 AM – 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Fri — Sat:</span>
                <span className="text-[#C29B62] font-mono">09:00 AM – 02:00 AM</span>
              </div>
            </div>

            <div className="pt-3 space-y-2 text-xs">
              <div>
                <a
                  href={`tel:${CAFE_INFO.phoneClean}`}
                  className="hover:text-[#F5F3EF] transition-colors font-mono"
                >
                  {CAFE_INFO.phone}
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${CAFE_INFO.email}`}
                  className="hover:text-[#F5F3EF] transition-colors"
                >
                  {CAFE_INFO.email}
                </a>
              </div>
              <div>
                <a
                  href={CAFE_INFO.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-[#C29B62] transition-colors"
                >
                  <span>Google Maps Location</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#59534B] gap-4">
          <div>
            © {new Date().getFullYear()} Aosa Cafe. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={CAFE_INFO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A8A29A] transition-colors"
            >
              Instagram {CAFE_INFO.instagramHandle}
            </a>
            <span aria-hidden="true">·</span>
            <span>Udaipur, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
