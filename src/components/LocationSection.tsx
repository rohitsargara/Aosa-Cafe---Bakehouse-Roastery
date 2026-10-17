import React, { useState } from 'react';
import { CAFE_INFO } from '../data/cafeData';
import { MapPin, Phone, Mail, Instagram, Clock, ExternalLink, Copy, Check } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check current operational status based on IST (UTC+5:30)
  const isCurrentlyOpen = () => {
    try {
      const now = new Date();
      // IST is UTC+5:30
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utcTime + 3600000 * 5.5);
      const hours = istTime.getHours();
      const day = istTime.getDay(); // 0 is Sunday, 5 is Friday, 6 is Saturday

      // Weekend late nights: Friday (5) and Saturday (6) open till 2 AM
      // (which spills into Saturday 02:00 and Sunday 02:00)
      if (hours >= 9 && hours <= 23) return true;
      if (hours < 2 && (day === 6 || day === 0)) return true;
      return false;
    } catch {
      return true;
    }
  };

  const openStatus = isCurrentlyOpen();

  return (
    <section id="visit" className="py-24 border-b border-[#242220] bg-[#141312]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold mb-3">
            05. Visit & Contact
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F3EF] leading-tight">
            Find us in Panchwati, near the UIT Circle.
          </h2>
          <p className="mt-5 text-[#A8A29A] text-base leading-relaxed">
            Conveniently positioned minutes away from Saheliyon Ki Bari and Fatehsagar Lake. Drop in for morning espresso, mid-day sourdough, or late-night dessert.
          </p>
        </div>

        {/* 2-Column Grid: Contact/Hours + Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Practical Visit Details */}
          <div className="lg:col-span-6 bg-[#1A1918] border border-[#2B2824] p-8 lg:p-10 flex flex-col justify-between">
            <div className="space-y-8">
              {/* Live Status indicator as clean unboxed text */}
              <div className="flex items-center justify-between pb-6 border-b border-[#2B2824]">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#807A72]">
                    Operational Status
                  </div>
                  <div className="text-sm font-medium text-[#F5F3EF] mt-1">
                    {openStatus ? 'Currently Welcoming Guests' : 'Currently Resting · Opens at 09:00 AM'}
                  </div>
                </div>
                <div className="text-xs text-[#C29B62] font-mono tabular-nums">
                  Udaipur Local Time (IST)
                </div>
              </div>

              {/* Operating Hours */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A8A29A] font-semibold">
                  <Clock className="w-3.5 h-3.5 text-[#C29B62]" />
                  <span>Roastery & Bakehouse Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center justify-between text-[#E8E4DF] border-b border-[#242220] pb-2">
                    <span className="text-[#A8A29A]">Sunday — Thursday</span>
                    <span className="font-mono tabular-nums">09:00 AM – 11:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between text-[#E8E4DF] border-b border-[#242220] pb-2">
                    <span className="text-[#C29B62]">Friday & Saturday (Late Roastery)</span>
                    <span className="font-mono tabular-nums text-[#C29B62]">09:00 AM – 02:00 AM</span>
                  </div>
                </div>
              </div>

              {/* Address with Copy Action */}
              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-[#A8A29A] font-semibold">
                  Physical Address
                </div>
                <p className="text-sm text-[#F5F3EF] leading-relaxed">
                  {CAFE_INFO.address}
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1.5 text-xs text-[#A8A29A] hover:text-[#F5F3EF] transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C29B62]" />
                        <span className="text-[#C29B62]">Address Copied to Clipboard</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>
                  <span className="text-[#59534B]">·</span>
                  <span className="text-xs text-[#807A72]">Valet / Street Parking Available</span>
                </div>
              </div>

              {/* Direct Communication Channels */}
              <div className="space-y-3 pt-2">
                <div className="text-xs uppercase tracking-wider text-[#A8A29A] font-semibold">
                  Direct Inquiries & Pre-Orders
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <a
                    href={`tel:${CAFE_INFO.phoneClean}`}
                    className="flex items-center gap-2 p-3 bg-[#121110] border border-[#2B2824] hover:border-[#423D37] text-[#E8E4DF] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C29B62]" />
                    <span className="font-mono">{CAFE_INFO.phone}</span>
                  </a>

                  <a
                    href={`mailto:${CAFE_INFO.email}`}
                    className="flex items-center gap-2 p-3 bg-[#121110] border border-[#2B2824] hover:border-[#423D37] text-[#E8E4DF] transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C29B62]" />
                    <span className="truncate">{CAFE_INFO.email}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Landmarks adjacency */}
            <div className="pt-8 mt-8 border-t border-[#2B2824] text-xs text-[#807A72] flex flex-wrap gap-x-4 gap-y-1">
              <span>UIT Circle (150m)</span>
              <span aria-hidden="true">·</span>
              <span>Saheliyon Ki Bari (1.2 km)</span>
              <span aria-hidden="true">·</span>
              <span>Sukhadia Circle (1.4 km)</span>
              <span aria-hidden="true">·</span>
              <span>Fatehsagar Lake (2.3 km)</span>
            </div>
          </div>

          {/* Right Column: Architectural Map & Navigation Card */}
          <div className="lg:col-span-6 bg-[#1A1918] border border-[#2B2824] p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Map Vector Mockup / Aesthetic Schematic */}
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-[#2B2824] pb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F5F3EF]">
                  <MapPin className="w-4 h-4 text-[#C29B62]" />
                  <span>Udaipur Geographic Pin</span>
                </div>
                <span className="text-xs font-mono text-[#807A72] tabular-nums">
                  24.5976° N, 73.6886° E
                </span>
              </div>

              {/* Minimalist Architectural Map Canvas */}
              <div className="relative w-full h-64 bg-[#121110] border border-[#2B2824] p-4 flex flex-col justify-between overflow-hidden">
                {/* Stylized road grid lines */}
                <svg
                  className="absolute inset-0 w-full h-full stroke-[#262420] pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="0" y1="50" x2="100%" y2="50" strokeWidth="1" />
                  <line x1="0" y1="120" x2="100%" y2="120" strokeWidth="2" strokeDasharray="6 4" />
                  <line x1="0" y1="200" x2="100%" y2="200" strokeWidth="1" />
                  <line x1="60" y1="0" x2="60" y2="100%" strokeWidth="1" />
                  <line x1="180" y1="0" x2="180" y2="100%" strokeWidth="2" />
                  <line x1="320" y1="0" x2="320" y2="100%" strokeWidth="1" />
                  {/* Circle roundabout representation for UIT Circle */}
                  <circle cx="180" cy="120" r="28" fill="none" strokeWidth="1.5" stroke="#36322C" />
                  <circle cx="180" cy="120" r="14" fill="none" strokeWidth="1" stroke="#36322C" />
                </svg>

                {/* Top overlay tag */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#A8A29A]">
                  <span className="bg-[#1A1918]/90 px-2 py-1 border border-[#2B2824]">
                    UIT Circle / Panchwati
                  </span>
                  <span className="bg-[#1A1918]/90 px-2 py-1 border border-[#2B2824]">
                    Madhuban District
                  </span>
                </div>

                {/* Central pin marker */}
                <div className="relative z-10 mx-auto my-auto text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 bg-[#C29B62] text-[#121110] rounded-full shadow-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="mt-2 text-xs font-serif font-semibold text-[#F5F3EF] tracking-wider bg-[#121110]/95 px-3 py-1 border border-[#2B2824] inline-block">
                    AOSA CAFE & ROASTERY
                  </div>
                </div>

                {/* Bottom overlay coordinate tag */}
                <div className="relative z-10 flex items-center justify-between text-[11px] text-[#807A72]">
                  <span>Near Saheli Marg</span>
                  <span className="font-mono">Elev. 598m MSL</span>
                </div>
              </div>

              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Located right off the central UIT Circle in Panchwati. Our entrance features an outdoor plant-fringed threshold leading directly into the roastery brew bar and shaded patio.
              </p>
            </div>

            {/* Launch Google Maps Direction */}
            <div className="pt-8 border-t border-[#2B2824] flex flex-col sm:flex-row items-center gap-4">
              <a
                href={CAFE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs tracking-[0.1em] uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={CAFE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs tracking-wider uppercase font-medium text-[#A8A29A] border border-[#2B2824] hover:border-[#F5F3EF] hover:text-[#F5F3EF] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
