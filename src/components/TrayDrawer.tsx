import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageSquare, ShoppingBag } from 'lucide-react';
import { TrayItem } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface TrayDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: TrayItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearTray: () => void;
}

export const TrayDrawer: React.FC<TrayDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearTray,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [pickupTime, setPickupTime] = useState('In 20 minutes');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);

  const handleWhatsAppPreOrder = () => {
    if (items.length === 0) return;

    const itemListText = items
      .map((i) => `• ${i.quantity}x ${i.item.name} (₹${i.item.price * i.quantity})`)
      .join('\n');

    const message = encodeURIComponent(
      `Hello Aosa Cafe! I'd like to place a takeaway pre-order:\n\n*Name:* ${customerName || 'Customer'}\n*Pickup Time:* ${pickupTime}\n\n*Items:*\n${itemListText}\n\n*Estimated Total:* ₹${subtotal}\n\nPlease confirm availability and prep time. Thank you!`
    );

    window.open(`https://wa.me/919251998739?text=${message}`, '_blank');
    setIsOrdered(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md h-full bg-[#1A1918] border-l border-[#2B2824] shadow-2xl flex flex-col justify-between">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#242220] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#C29B62]" />
            <h3 className="text-base font-serif text-[#F5F3EF]">
              Your Takeaway Tray ({items.reduce((a, b) => a + b.quantity, 0)})
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#807A72] hover:text-[#F5F3EF] transition-colors"
            aria-label="Close Tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-3">
              <ShoppingBag className="w-10 h-10 text-[#423D37] mx-auto stroke-1" />
              <p className="text-sm font-serif text-[#A8A29A]">
                Your tray is currently empty.
              </p>
              <p className="text-xs text-[#807A72] max-w-xs mx-auto">
                Explore our single-origin coffees, flaky butter croissants, and sourdough sandwiches from the menu.
              </p>
            </div>
          ) : isOrdered ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#C29B62]/20 border border-[#C29B62] flex items-center justify-center text-[#C29B62]">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="text-xl font-serif text-[#F5F3EF]">Pre-Order Dispatched</h4>
              <p className="text-xs text-[#A8A29A] leading-relaxed">
                Your order details were formatted for our bakehouse team via WhatsApp (+91 92519 98739). Freshly prepared upon receipt!
              </p>
              <button
                onClick={() => {
                  onClearTray();
                  setIsOrdered(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF]"
              >
                Clear & Return
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((trayItem) => (
                <div
                  key={trayItem.item.id}
                  className="bg-[#121110] border border-[#2B2824] p-3.5 flex items-center justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-semibold text-[#F5F3EF] truncate">
                      {trayItem.item.name}
                    </h5>
                    <div className="text-[11px] text-[#807A72] mt-0.5 font-mono tabular-nums">
                      ₹{trayItem.item.price} each
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#2B2824] bg-[#1A1918]">
                    <button
                      onClick={() => onUpdateQuantity(trayItem.item.id, -1)}
                      className="p-1.5 text-[#A8A29A] hover:text-[#F5F3EF] transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-2 text-xs font-mono font-medium text-[#F5F3EF] tabular-nums">
                      {trayItem.quantity}
                    </span>
                    <button
                      onClick={() => onUpdateQuantity(trayItem.item.id, 1)}
                      className="p-1.5 text-[#A8A29A] hover:text-[#F5F3EF] transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Item Total */}
                  <div className="text-xs font-serif font-medium text-[#F5F3EF] tabular-nums text-right w-14">
                    ₹{trayItem.item.price * trayItem.quantity}
                  </div>
                </div>
              ))}

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onClearTray}
                  className="text-[11px] text-[#807A72] hover:text-[#F5F3EF] transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear tray</span>
                </button>
              </div>

              {/* Pickup Information */}
              <div className="pt-4 border-t border-[#242220] space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#A8A29A] font-medium">
                  Takeaway Pickup Details
                </div>
                <div>
                  <label className="block text-[11px] text-[#807A72] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3 py-2 text-xs text-[#F5F3EF] placeholder-[#59534B] focus:outline-none focus:border-[#C29B62]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-[#807A72] mb-1">
                    Expected Pickup Time
                  </label>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3 py-2 text-xs text-[#F5F3EF] focus:outline-none focus:border-[#C29B62]"
                  >
                    <option value="In 15-20 minutes">In 15–20 minutes</option>
                    <option value="In 30-40 minutes">In 30–40 minutes</option>
                    <option value="In 1 hour">In 1 hour</option>
                    <option value="This afternoon at 4:00 PM">Today at 04:00 PM (Hot Bake)</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {items.length > 0 && !isOrdered && (
          <div className="p-6 border-t border-[#242220] bg-[#141312] space-y-3">
            <div className="flex items-center justify-between text-xs text-[#A8A29A]">
              <span>Subtotal</span>
              <span className="text-base font-serif text-[#F5F3EF] font-semibold tabular-nums">
                ₹{subtotal}
              </span>
            </div>
            <div className="text-[11px] text-[#807A72]">
              Taxes included · Pay upon pickup at counter via UPI or Card
            </div>

            <button
              onClick={handleWhatsAppPreOrder}
              className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Send Pre-Order to Cafe</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
