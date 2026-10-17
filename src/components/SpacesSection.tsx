import React from 'react';
import { Wifi, Sun, Moon, Coffee } from 'lucide-react';

interface SpacesSectionProps {
  onOpenReservation: () => void;
}

export const SpacesSection: React.FC<SpacesSectionProps> = ({ onOpenReservation }) => {
  const spaces = [
    {
      title: 'The Specialty Brew Bar',
      subtitle: 'Precision & Ritual',
      description: 'Front-row seats to the manual pour-over ritual and Slayer/Synesso espresso extraction. Chat with our roasters and sample fresh test roasts.',
      icon: Coffee,
      feature: 'Direct Barista Counter · Single-Origin Flights',
    },
    {
      title: 'The Sunlit Courtyard Patio',
      subtitle: 'Open-Air Sanctuary',
      description: 'Under Udaipur’s clear morning skies, enjoy a leisurely sourdough breakfast surrounded by terracotta pots, olive tones, and gentle birdsong.',
      icon: Sun,
      feature: 'Pet Friendly · Natural Breeze · Outdoor Seating',
    },
    {
      title: 'The Community Oak Work Table',
      subtitle: 'Focus & Productivity',
      description: 'Handcrafted solid oak bench with discreet universal power sockets and reliable gigabit Wi-Fi. Quiet, focused daytime work environment.',
      icon: Wifi,
      feature: 'Universal Power Points · High-Speed Wi-Fi',
    },
    {
      title: 'The Late Night Roastery',
      subtitle: 'Moody Evening Sanctuary',
      description: 'On Fridays & Saturdays until 2:00 AM, the space softens into a warm ambient refuge for night owls, artisanal hot chocolate, and post-dinner desserts.',
      icon: Moon,
      feature: 'Open Till 02:00 AM (Fri & Sat) · Low Ambient Lighting',
    },
  ];

  return (
    <section id="space" className="py-24 border-b border-[#242220] bg-[#121110]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold mb-3">
            04. Space & Atmosphere
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F3EF] leading-tight">
            An architectural retreat from the bustle of the White City.
          </h2>
          <p className="mt-5 text-[#A8A29A] text-base leading-relaxed">
            Every material at Aosa was selected for tactile warmth—raw micro-cement, oiled Indian oak, hand-brushed brass, and linen textures that age gracefully with daily use.
          </p>
        </div>

        {/* 4 Architectural Spaces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {spaces.map((space, idx) => {
            const IconComponent = space.icon;
            return (
              <div
                key={idx}
                className="bg-[#1A1918] border border-[#2B2824] p-8 lg:p-10 flex flex-col justify-between hover:border-[#423D37] transition-colors relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-[#2B2824] bg-[#121110] flex items-center justify-center text-[#C29B62]">
                      <IconComponent className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className="text-xs font-mono text-[#807A72]">
                      Space 0{idx + 1}
                    </span>
                  </div>

                  <div className="text-xs uppercase tracking-wider text-[#C29B62] font-medium mb-1">
                    {space.subtitle}
                  </div>
                  <h3 className="text-2xl font-serif text-[#F5F3EF] mb-3">
                    {space.title}
                  </h3>
                  <p className="text-sm text-[#A8A29A] leading-relaxed mb-6">
                    {space.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2B2824] flex items-center justify-between text-xs text-[#807A72]">
                  <span>{space.feature}</span>
                  <button
                    onClick={onOpenReservation}
                    className="text-[#E8E4DF] hover:text-[#C29B62] transition-colors font-medium underline"
                  >
                    Reserve Spot
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Community Ethos Banner */}
        <div className="p-8 lg:p-10 bg-[#161514] border border-[#2B2824] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-lg font-serif text-[#F5F3EF]">
              Planning a group gathering, coffee cupping, or private workshop?
            </h4>
            <p className="text-xs text-[#A8A29A]">
              We host private cupping sessions, barista masterclasses, and intimate gatherings in our roastery annex.
            </p>
          </div>

          <button
            onClick={onOpenReservation}
            className="inline-flex items-center justify-center px-6 py-3 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors whitespace-nowrap shrink-0"
          >
            Inquire for Events
          </button>
        </div>
      </div>
    </section>
  );
};
