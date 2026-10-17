import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

interface NavbarProps {
  onOpenReservation: () => void;
  onOpenTray: () => void;
  trayItemCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  onOpenTray,
  trayItemCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#121110]/95 backdrop-blur-md border-b border-[#242220]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 lg:px-12 h-20">
        {/* Zone 1: Brand Wordmark (Single text element wordmark in display face) */}
        <a
          href="#"
          className="text-2xl font-serif tracking-[0.24em] font-medium text-[#F5F3EF] hover:text-[#C29B62] transition-colors whitespace-nowrap shrink-0"
        >
          {CAFE_INFO.brand}
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.08em] font-medium text-[#A8A29A]">
          <a
            href="#story"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Philosophy
          </a>
          <a
            href="#roastery"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Roastery
          </a>
          <a
            href="#bakehouse"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Bakehouse
          </a>
          <a
            href="#menu"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Curated Menu
          </a>
          <a
            href="#space"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Atmosphere
          </a>
          <a
            href="#visit"
            className="hover:text-[#F5F3EF] transition-colors whitespace-nowrap shrink-0"
          >
            Location
          </a>
        </nav>

        {/* Zone 3: Primary Action (1 primary button + subtle tray trigger) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenTray}
            aria-label="View Tray"
            className="relative p-2.5 text-[#A8A29A] hover:text-[#F5F3EF] transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {trayItemCount > 0 && (
              <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-[#121110] bg-[#C29B62] rounded-full tabular-nums">
                {trayItemCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs tracking-[0.08em] uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors whitespace-nowrap shrink-0 rounded-none"
          >
            Reserve Table
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A8A29A] hover:text-[#F5F3EF] transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#242220] bg-[#121110] px-6 py-8 space-y-5">
          <nav className="flex flex-col space-y-4 text-sm font-medium tracking-wider text-[#A8A29A]">
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#roastery"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Roastery
            </a>
            <a
              href="#bakehouse"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Bakehouse
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Curated Menu
            </a>
            <a
              href="#space"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Atmosphere
            </a>
            <a
              href="#visit"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-[#F5F3EF] transition-colors"
            >
              Location & Hours
            </a>
          </nav>

          <div className="pt-4 border-t border-[#242220] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors text-center"
            >
              Reserve a Table
            </button>
            <div className="text-xs text-[#807A72] text-center pt-2">
              Panchwati, Udaipur · Open Daily 9:00 AM – 11:00 PM
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
