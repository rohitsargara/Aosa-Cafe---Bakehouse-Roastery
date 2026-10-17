/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { RoasterySection } from './components/RoasterySection';
import { BakehouseSection } from './components/BakehouseSection';
import { MenuSection } from './components/MenuSection';
import { SpacesSection } from './components/SpacesSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { TrayDrawer } from './components/TrayDrawer';
import { MenuItem, TrayItem } from './types';

export default function App() {
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [trayDrawerOpen, setTrayDrawerOpen] = useState(false);
  const [trayItems, setTrayItems] = useState<TrayItem[]>([
    // Initial delightful sample in tray for instant discoverability
    {
      item: {
        id: 'c1',
        name: 'Caramel Popcorn Latte',
        category: 'coffee',
        subCategory: 'Signatures',
        price: 260,
        description: 'Double shot house espresso poured over silky textured milk infused with salted caramel.',
        dietary: 'veg',
      },
      quantity: 1,
    },
    {
      item: {
        id: 'b1',
        name: 'Classic French Butter Croissant',
        category: 'bakery',
        subCategory: 'Viennoiserie',
        price: 180,
        description: '72-hour laminated pastry crafted with Normandy cultured butter.',
        dietary: 'veg',
      },
      quantity: 1,
    },
  ]);

  const handleAddToTray = (item: MenuItem) => {
    setTrayItems((prev) => {
      const existing = prev.find((t) => t.item.id === item.id);
      if (existing) {
        return prev.map((t) =>
          t.item.id === item.id ? { ...t, quantity: t.quantity + 1 } : t
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setTrayItems((prev) => {
      return prev
        .map((t) => {
          if (t.item.id === id) {
            const nextQty = t.quantity + delta;
            return nextQty > 0 ? { ...t, quantity: nextQty } : null;
          }
          return t;
        })
        .filter((t): t is TrayItem => t !== null);
    });
  };

  const handleClearTray = () => {
    setTrayItems([]);
  };

  const trayItemCount = trayItems.reduce((acc, curr) => acc + curr.quantity, 0);
  const traySubtotal = trayItems.reduce(
    (acc, curr) => acc + curr.item.price * curr.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-[#121110] text-[#E8E4DF] selection:bg-[#C29B62] selection:text-[#121110] font-sans antialiased">
      {/* Strict 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenReservation={() => setReservationModalOpen(true)}
        onOpenTray={() => setTrayDrawerOpen(true)}
        trayItemCount={trayItemCount}
      />

      <main>
        {/* Editorial Minimalist Hero */}
        <Hero onOpenReservation={() => setReservationModalOpen(true)} />

        {/* Philosophy & Craft Section */}
        <StorySection />

        {/* 01. The Roastery & Brew Companion */}
        <RoasterySection onAddToTray={handleAddToTray} />

        {/* 02. The Bakehouse & Sourdough Timeline */}
        <BakehouseSection onAddToTray={handleAddToTray} />

        {/* 03. Curated Menu with Segmented Filters & Search */}
        <MenuSection
          onAddToTray={handleAddToTray}
          onOpenTray={() => setTrayDrawerOpen(true)}
          trayItemCount={trayItemCount}
          traySubtotal={traySubtotal}
        />

        {/* 04. Space & Architectural Atmosphere */}
        <SpacesSection onOpenReservation={() => setReservationModalOpen(true)} />

        {/* 05. Visit, Hours & Verified Coordinates */}
        <LocationSection />
      </main>

      {/* Quiet Footer */}
      <Footer />

      {/* Interactive Reservation Modal */}
      <ReservationModal
        isOpen={reservationModalOpen}
        onClose={() => setReservationModalOpen(false)}
      />

      {/* Takeaway Tray Slide-Over Drawer */}
      <TrayDrawer
        isOpen={trayDrawerOpen}
        onClose={() => setTrayDrawerOpen(false)}
        items={trayItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearTray={handleClearTray}
      />
    </div>
  );
}
