import React from 'react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/cafeData';
import { Sparkles, Plus, Clock, ShieldCheck } from 'lucide-react';

interface BakehouseSectionProps {
  onAddToTray: (item: MenuItem) => void;
}

export const BakehouseSection: React.FC<BakehouseSectionProps> = ({ onAddToTray }) => {
  const bakerySpotlights = MENU_ITEMS.filter(
    (item) => item.id === 'b1' || item.id === 'b2' || item.id === 's1' || item.id === 's2'
  );

  return (
    <section id="bakehouse" className="py-24 border-b border-[#242220] bg-[#121110]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold mb-3">
              02. The Bakehouse
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F3EF] leading-tight">
              Flour, water, sea salt, and thirty-six hours of patience.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-[#A8A29A] leading-relaxed">
              No commercial baker’s yeast, no artificial softeners, no shortcuts. Every sourdough loaf is naturally fermented for digestible complexity, and our croissants are rolled with pure cultured butter for distinct honeycomb layers.
            </p>
          </div>
        </div>

        {/* 4 Spotlight Bakes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {bakerySpotlights.map((item) => (
            <div
              key={item.id}
              className="bg-[#1A1918] border border-[#2B2824] p-6 flex flex-col justify-between hover:border-[#423D37] transition-colors group"
            >
              <div>
                {/* Architectural Vector Icon / Craft Glyph */}
                <div className="w-12 h-12 mb-6 border border-[#2B2824] bg-[#121110] flex items-center justify-center text-[#C29B62] group-hover:border-[#C29B62]/40 transition-colors">
                  {item.category === 'bakery' ? (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M4 14C4 9 7 5 12 5C17 5 20 9 20 14C20 16 19 18 17 18H7C5 18 4 16 4 14Z" />
                      <path d="M8 9C9 10 10 12 10 14" strokeDasharray="1 2" />
                      <path d="M12 8C12 10 12 12 12 14" strokeDasharray="1 2" />
                      <path d="M16 9C15 10 14 12 14 14" strokeDasharray="1 2" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 13C3 13 6 7 12 7C18 7 21 13 21 13" />
                      <path d="M4 17C4 17 7 19 12 19C17 19 20 17 20 17" />
                      <line x1="3" y1="13" x2="21" y2="13" />
                    </svg>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-[#807A72] mb-2">
                  <span>{item.subCategory}</span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{item.dietary}</span>
                </div>

                <h3 className="text-lg font-serif text-[#F5F3EF] mb-2 group-hover:text-[#C29B62] transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-[#A8A29A] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#2B2824] flex items-center justify-between">
                <span className="text-base font-serif text-[#F5F3EF] tabular-nums">
                  ₹{item.price}
                </span>

                <button
                  onClick={() => onAddToTray(item)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs tracking-wider uppercase font-medium text-[#E8E4DF] border border-[#3B3733] hover:border-[#F5F3EF] hover:bg-[#2B2824] transition-colors"
                >
                  <Plus className="w-3 h-3" />
                  <span>Add to Tray</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 36-Hour Fermentation Timeline Bar */}
        <div className="border border-[#2B2824] bg-[#141312] p-8 lg:p-10">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-[#242220]">
            <div>
              <div className="text-xs tracking-[0.16em] uppercase text-[#A8A29A] font-semibold">
                Baking Standards
              </div>
              <h3 className="text-xl font-serif text-[#F5F3EF] mt-1">
                The 36-Hour Sourdough Fermentation Cycle
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#C29B62]">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Wild Heritage Levain · Zero Commercial Additives</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-[#C29B62] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Hour 00 – 04</span>
              </div>
              <div className="text-sm font-semibold text-[#F5F3EF]">Autolyse & Leaven Fold</div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Stoneground wheat flours hydrate fully with purified water before folding in our active wild starter.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#C29B62] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Hour 04 – 10</span>
              </div>
              <div className="text-sm font-semibold text-[#F5F3EF]">Bulk Ferment & Stretch</div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Rhythmic bench stretches every 30 minutes build strong gluten web structure and airy gas pockets.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#C29B62] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Hour 10 – 34</span>
              </div>
              <div className="text-sm font-semibold text-[#F5F3EF]">Cold Retardation (4°C)</div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                24 hours in our cold prover allows lactic acids to break down phytic acid, yielding delicate tang and high digestibility.
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-[#C29B62] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>Hour 34 – 36</span>
              </div>
              <div className="text-sm font-semibold text-[#F5F3EF]">Stone Hearth Hearth Bake</div>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Hand-scored with a razor lame and baked at 250°C under heavy steam injection for an ear that shatters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
