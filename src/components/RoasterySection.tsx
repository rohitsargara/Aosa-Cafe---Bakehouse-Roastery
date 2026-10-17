import React, { useState } from 'react';
import { COFFEE_BEANS, BREW_GUIDES } from '../data/cafeData';
import { MenuItem } from '../types';
import { Coffee, Flame, Droplet, Plus } from 'lucide-react';

interface RoasterySectionProps {
  onAddToTray: (item: MenuItem) => void;
}

export const RoasterySection: React.FC<RoasterySectionProps> = ({ onAddToTray }) => {
  const [selectedBrewId, setSelectedBrewId] = useState<string>('v60');
  const [servings, setServings] = useState<number>(2);

  const currentGuide = BREW_GUIDES.find((g) => g.id === selectedBrewId) || BREW_GUIDES[0];

  // Calculated brew weights based on servings
  const baseCoffeeGrams = selectedBrewId === 'v60' ? 15 : selectedBrewId === 'aeropress' ? 16 : 40;
  const baseWaterGrams = selectedBrewId === 'v60' ? 240 : selectedBrewId === 'aeropress' ? 220 : 320;

  const totalCoffee = baseCoffeeGrams * servings;
  const totalWater = baseWaterGrams * servings;

  return (
    <section id="roastery" className="py-24 border-b border-[#242220] bg-[#141312]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold mb-3">
            01. The Roastery
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#F5F3EF] leading-tight">
            Crafted for origin clarity, roasted in micro-batches right here in Udaipur.
          </h2>
          <p className="mt-5 text-[#A8A29A] text-base leading-relaxed">
            Coffee is seasonal agriculture. We roast high-elevation Indian Arabicas in meticulous small batches to highlight intrinsic terroir—never scorching delicate volatile aromatics under generic dark roasts.
          </p>
        </div>

        {/* 3 Single-Origin & Signature Lots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {COFFEE_BEANS.map((bean) => (
            <div
              key={bean.id}
              className="bg-[#1A1918] border border-[#2B2824] p-8 flex flex-col justify-between hover:border-[#423D37] transition-colors"
            >
              <div>
                {/* Unboxed Metadata */}
                <div className="flex items-center gap-2 text-xs text-[#807A72] mb-3">
                  <span>{bean.region}</span>
                  <span aria-hidden="true">·</span>
                  <span>{bean.elevation}</span>
                </div>

                <h3 className="text-xl font-serif text-[#F5F3EF] mb-2">{bean.name}</h3>
                <p className="text-xs text-[#A8A29A] mb-4">{bean.estate} · {bean.process}</p>

                {/* Roast Level indicator without pill clutter */}
                <div className="flex items-center gap-2 text-xs text-[#C29B62] mb-6">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Roast Profile: {bean.roastLevel}</span>
                </div>

                {/* Tasting Notes as clean unboxed typography */}
                <div className="border-t border-[#2B2824] pt-4 mb-6">
                  <div className="text-[11px] uppercase tracking-wider text-[#807A72] mb-2">
                    Sensory Profile
                  </div>
                  <div className="text-sm text-[#E8E4DF] italic font-serif">
                    {bean.notes.join(' · ')}
                  </div>
                </div>
              </div>

              {/* Price & Action */}
              <div className="border-t border-[#2B2824] pt-6 flex items-center justify-between">
                <div>
                  <div className="text-lg font-serif text-[#F5F3EF] tabular-nums">
                    ₹{bean.pricePerBag}
                  </div>
                  <div className="text-[11px] text-[#807A72]">Whole bean · 250g bag</div>
                </div>

                <button
                  onClick={() =>
                    onAddToTray({
                      id: bean.id,
                      name: `${bean.name} (250g Whole Bean)`,
                      category: 'coffee',
                      subCategory: 'Roastery Beans',
                      price: bean.pricePerBag,
                      description: `${bean.roastLevel} roast from ${bean.region}. Notes of ${bean.notes.join(', ')}.`,
                      dietary: 'vegan-friendly',
                    })
                  }
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Coffee Extraction Lab & Recipe Companion */}
        <div className="bg-[#1A1918] border border-[#2B2824] p-8 lg:p-12">
          <div className="max-w-2xl mb-8">
            <div className="text-xs tracking-[0.16em] uppercase text-[#A8A29A] font-semibold mb-2 flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#C29B62]" />
              <span>Aosa Brew Bar Ratio Companion</span>
            </div>
            <h3 className="text-2xl font-serif text-[#F5F3EF]">
              Dial in the exact extraction ratio at home.
            </h3>
            <p className="text-sm text-[#A8A29A] mt-2">
              Select your brew apparatus and cup yield to calculate precise coffee weight, water volume, and extraction timing.
            </p>
          </div>

          {/* Functional Tab Bar (Permitted interactive segmented controls) */}
          <div className="flex flex-wrap gap-2 mb-8 p-1.5 bg-[#121110] border border-[#2B2824] w-fit">
            {BREW_GUIDES.map((guide) => (
              <button
                key={guide.id}
                onClick={() => setSelectedBrewId(guide.id)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors ${
                  selectedBrewId === guide.id
                    ? 'bg-[#2B2824] text-[#F5F3EF]'
                    : 'text-[#A8A29A] hover:text-[#F5F3EF]'
                }`}
              >
                {guide.method}
              </button>
            ))}
          </div>

          {/* Calculator Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Dynamic Variables */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="text-xs uppercase tracking-wider text-[#A8A29A] block mb-2">
                  Serving Yield: <span className="text-[#F5F3EF] font-semibold">{servings} {servings === 1 ? 'Cup' : 'Cups'}</span>
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4].map((count) => (
                    <button
                      key={count}
                      onClick={() => setServings(count)}
                      className={`flex-1 py-2 text-xs font-semibold tabular-nums border transition-colors ${
                        servings === count
                          ? 'border-[#C29B62] bg-[#C29B62]/10 text-[#F5F3EF]'
                          : 'border-[#2B2824] bg-[#121110] text-[#A8A29A] hover:border-[#423D37]'
                      }`}
                    >
                      {count} {count === 1 ? 'Cup' : 'Cups'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extraction Metrics */}
              <div className="grid grid-cols-2 gap-4 border-t border-[#2B2824] pt-6">
                <div className="bg-[#121110] p-4 border border-[#2B2824]">
                  <div className="text-[11px] uppercase tracking-wider text-[#807A72]">
                    Coffee Dose
                  </div>
                  <div className="text-2xl font-serif text-[#F5F3EF] tabular-nums mt-1">
                    {totalCoffee}g
                  </div>
                  <div className="text-xs text-[#A8A29A] mt-1">{currentGuide.grind}</div>
                </div>

                <div className="bg-[#121110] p-4 border border-[#2B2824]">
                  <div className="text-[11px] uppercase tracking-wider text-[#807A72]">
                    Water Target
                  </div>
                  <div className="text-2xl font-serif text-[#F5F3EF] tabular-nums mt-1">
                    {totalWater}g
                  </div>
                  <div className="text-xs text-[#A8A29A] mt-1">{currentGuide.temp}</div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-[#A8A29A] bg-[#121110] p-3 border border-[#2B2824]">
                <span className="flex items-center gap-2">
                  <Droplet className="w-3.5 h-3.5 text-[#C29B62]" />
                  Standard Brew Ratio: {currentGuide.ratio}
                </span>
                <span className="tabular-nums">Target Time: {currentGuide.time}</span>
              </div>
            </div>

            {/* Right: Barista Protocol Steps */}
            <div className="lg:col-span-7 bg-[#121110] p-6 lg:p-8 border border-[#2B2824]">
              <div className="text-xs uppercase tracking-wider text-[#C29B62] font-semibold mb-4">
                Barista Extraction Protocol
              </div>
              <p className="text-xs text-[#A8A29A] mb-4">{currentGuide.description}</p>
              <ol className="space-y-3">
                {currentGuide.instructions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#E8E4DF] leading-relaxed">
                    <span className="text-[#C29B62] font-mono font-medium text-xs pt-0.5 shrink-0">
                      0{idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
