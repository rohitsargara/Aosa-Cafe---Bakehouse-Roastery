import React from 'react';
import { Leaf, Sparkles, Heart } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-24 border-b border-[#242220] bg-[#121110]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold">
              The Philosophy
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F3EF] leading-tight">
              An unhurried devotion to the two oldest culinary rituals.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#A8A29A] leading-relaxed font-light">
              <p>
                Coffee and bread have sustained human gatherings for millennia. Yet in the modern rush, both are too often industrialised—over-extracted with dark, burnt roasts, and rushed with chemical dough improvers.
              </p>
              <p>
                At Aosa, we chose the slower path. Every batch of coffee is roasted in-house to preserve subtle floral, citrus, and cocoa notes unique to India’s biodiverse Western and Eastern Ghats. Alongside our roaster, our bakehouse runs on a 36-hour wild fermentation rhythm—producing sourdough loaves and hand-laminated croissants that are as nourishing as they are crisp.
              </p>
              <p>
                Whether you drop in for a calibrated morning pour-over, a mid-day paneer tikka croissant sandwich, or a late-night espresso tonic with friends, our table is set for you.
              </p>
            </div>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#242220]">
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider">
                  01. Direct Origin
                </div>
                <p className="text-xs text-[#807A72]">
                  Traceable micro-lots from regenerative Indian estates.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider">
                  02. Wild Leaven
                </div>
                <p className="text-xs text-[#807A72]">
                  Naturally fermented wild yeast with zero artificial additives.
                </p>
              </div>

              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#F5F3EF] uppercase tracking-wider">
                  03. Daily Hospitality
                </div>
                <p className="text-xs text-[#807A72]">
                  A warm, welcoming space open from early mornings until late night.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Tactile Editorial Still-Life Card */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1918] border border-[#2B2824] p-8 lg:p-10 space-y-8">
              <div className="border-b border-[#2B2824] pb-6">
                <span className="text-[11px] uppercase tracking-[0.18em] text-[#C29B62] block mb-1">
                  Craft Manifest
                </span>
                <h3 className="text-2xl font-serif text-[#F5F3EF]">
                  In Pursuit of Purity
                </h3>
              </div>

              {/* Editorial quotes & standards */}
              <div className="space-y-6 text-xs text-[#A8A29A] leading-relaxed">
                <blockquote className="border-l border-[#C29B62] pl-4 italic font-serif text-sm text-[#E8E4DF]">
                  “We do not roast dark to hide flaws; we roast light to honor the farmer’s soil, rainfall, and harvest altitude.”
                </blockquote>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="text-[#C29B62] font-mono">✦</span>
                    <span>No commercial dough conditioners, margarine, or palm oils.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#C29B62] font-mono">✦</span>
                    <span>100% Arabica specialty beans rated 84+ SCAA points.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-[#C29B62] font-mono">✦</span>
                    <span>Reverse-osmosis water remineralised with magnesium and calcium for balanced coffee extraction.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#2B2824] flex items-center justify-between text-xs text-[#807A72]">
                <span>Panchwati Studio</span>
                <span className="font-serif italic text-[#C29B62]">Est. Udaipur</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
