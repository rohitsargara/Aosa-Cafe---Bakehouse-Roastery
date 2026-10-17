import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/cafeData';
import { MenuItem, MenuCategory } from '../types';
import { Search, Plus, Check, ShoppingBag } from 'lucide-react';

interface MenuSectionProps {
  onAddToTray: (item: MenuItem) => void;
  onOpenTray: () => void;
  trayItemCount: number;
  traySubtotal: number;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToTray,
  onOpenTray,
  trayItemCount,
  traySubtotal,
}) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'all' | 'veg' | 'vegan'>('all');
  const [recentlyAddedId, setRecentlyAddedId] = useState<string | null>(null);

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'all', label: 'All Offerings' },
    { key: 'coffee', label: 'Specialty Coffee' },
    { key: 'bakery', label: 'Artisan Bakery' },
    { key: 'savory', label: 'Plates & Sandwiches' },
    { key: 'desserts', label: 'Desserts & Sweets' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Dietary match
      if (dietaryFilter === 'veg' && item.dietary !== 'veg' && item.dietary !== 'vegan-friendly') {
        return false;
      }
      if (dietaryFilter === 'vegan' && item.dietary !== 'vegan-friendly') {
        return false;
      }
      // Search query match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSub = item.subCategory?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesSub) return false;
      }
      return true;
    });
  }, [activeCategory, dietaryFilter, searchQuery]);

  const handleAddWithFeedback = (item: MenuItem) => {
    onAddToTray(item);
    setRecentlyAddedId(item.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1200);
  };

  return (
    <section id="menu" className="py-24 border-b border-[#242220] bg-[#141312] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs tracking-[0.16em] uppercase text-[#C29B62] font-semibold mb-3">
              03. The Curated Menu
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#F5F3EF]">
              Seasonal Coffee, Handcrafted Bakes & All-Day Fare
            </h2>
          </div>
          <div className="text-xs text-[#807A72] tracking-wider uppercase">
            Prices inclusive of all taxes · Freshly prepared to order
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#242220]">
          {/* Segmented Category Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1A1918] border border-[#2B2824] overflow-x-auto">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 text-xs font-medium tracking-wider uppercase whitespace-nowrap transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-[#2B2824] text-[#F5F3EF]'
                    : 'text-[#A8A29A] hover:text-[#F5F3EF]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Dietary Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 text-[#807A72] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#1A1918] border border-[#2B2824] pl-9 pr-3 py-2 text-xs text-[#F5F3EF] placeholder-[#6E6860] focus:outline-none focus:border-[#C29B62]"
              />
            </div>

            {/* Dietary Filter Segment */}
            <div className="flex items-center p-1 bg-[#1A1918] border border-[#2B2824]">
              <button
                onClick={() => setDietaryFilter('all')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  dietaryFilter === 'all'
                    ? 'bg-[#2B2824] text-[#F5F3EF]'
                    : 'text-[#807A72] hover:text-[#A8A29A]'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setDietaryFilter('veg')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  dietaryFilter === 'veg'
                    ? 'bg-[#2B2824] text-[#F5F3EF]'
                    : 'text-[#807A72] hover:text-[#A8A29A]'
                }`}
              >
                Vegetarian
              </button>
              <button
                onClick={() => setDietaryFilter('vegan')}
                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                  dietaryFilter === 'vegan'
                    ? 'bg-[#2B2824] text-[#F5F3EF]'
                    : 'text-[#807A72] hover:text-[#A8A29A]'
                }`}
              >
                Vegan
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#2B2824] bg-[#1A1918]">
            <p className="text-base font-serif text-[#A8A29A]">
              No items match your selected filter or search term.
            </p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
                setDietaryFilter('all');
              }}
              className="mt-4 text-xs tracking-wider uppercase text-[#C29B62] underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const isAdded = recentlyAddedId === item.id;
              return (
                <div
                  key={item.id}
                  className="bg-[#1A1918] border border-[#2B2824] p-6 flex flex-col justify-between hover:border-[#423D37] transition-colors"
                >
                  <div>
                    {/* Unboxed Metadata (no pill badge spam) */}
                    <div className="flex items-center justify-between text-xs text-[#807A72] mb-2.5">
                      <div className="flex items-center gap-2">
                        <span>{item.subCategory}</span>
                        {item.dietary && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="capitalize">{item.dietary}</span>
                          </>
                        )}
                      </div>
                      {item.popular && (
                        <span className="text-[#C29B62] font-medium text-[11px] tracking-wider uppercase">
                          Signature
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-serif text-[#F5F3EF] mb-2">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#A8A29A] leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-4 border-t border-[#2B2824] flex items-center justify-between">
                    <span className="text-lg font-serif text-[#F5F3EF] tabular-nums">
                      ₹{item.price}
                    </span>

                    <button
                      onClick={() => handleAddWithFeedback(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs tracking-wider uppercase font-semibold transition-colors ${
                        isAdded
                          ? 'bg-[#C29B62] text-[#121110]'
                          : 'bg-[#2B2824] text-[#F5F3EF] hover:bg-[#F5F3EF] hover:text-[#121110]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Tray</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Floating / Sticky Mobile Pre-Order Bar if tray has items */}
        {trayItemCount > 0 && (
          <div className="mt-12 p-4 bg-[#201E1B] border border-[#C29B62]/40 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#C29B62] text-[#121110] flex items-center justify-center font-bold text-xs">
                {trayItemCount}
              </div>
              <div>
                <div className="text-sm font-semibold text-[#F5F3EF]">
                  Current Tray: ₹{traySubtotal}
                </div>
                <div className="text-xs text-[#A8A29A]">
                  Fresh takeaway prep in 15–20 minutes
                </div>
              </div>
            </div>

            <button
              onClick={onOpenTray}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-wider uppercase font-semibold bg-[#F5F3EF] text-[#121110] hover:bg-[#C29B62] transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Review Tray & Pre-Order</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
