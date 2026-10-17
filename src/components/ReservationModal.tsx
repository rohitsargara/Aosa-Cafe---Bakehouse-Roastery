import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';
import { ReservationData } from '../types';
import { CAFE_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationData>({
    guestName: '',
    email: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: 2,
    seatingArea: 'Indoor Roastery Bar',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.guestName || !formData.phone) return;

    // Generate clean reservation reference
    const refCode = `AOSA-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(refCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `Hello Aosa Cafe! I'd like to confirm my table reservation:\n\nReference: ${bookingRef}\nName: ${formData.guestName}\nDate: ${formData.date}\nTime: ${formData.time}\nGuests: ${formData.guests}\nArea: ${formData.seatingArea}\nNotes: ${formData.specialRequests || 'None'}`
    );
    window.open(`https://wa.me/919251998739?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#1A1918] border border-[#2B2824] shadow-2xl p-6 sm:p-10 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#807A72] hover:text-[#F5F3EF] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <div className="text-xs uppercase tracking-[0.16em] text-[#C29B62] font-semibold mb-2">
                Table Reservation
              </div>
              <h3 className="text-2xl font-serif text-[#F5F3EF]">
                Reserve Your Experience at Aosa
              </h3>
              <p className="text-xs text-[#A8A29A] mt-1">
                Panchwati, Udaipur · Open Daily 09:00 AM – 11:00 PM (Late Night Weekend till 02:00 AM)
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohith Sharma"
                    value={formData.guestName}
                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3.5 py-2.5 text-xs text-[#F5F3EF] placeholder-[#59534B] focus:outline-none focus:border-[#C29B62]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3.5 py-2.5 text-xs text-[#F5F3EF] placeholder-[#59534B] focus:outline-none focus:border-[#C29B62]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121110] border border-[#2B2824] px-3.5 py-2.5 text-xs text-[#F5F3EF] placeholder-[#59534B] focus:outline-none focus:border-[#C29B62]"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3 text-[#C29B62]" />
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3 py-2 text-xs text-[#F5F3EF] focus:outline-none focus:border-[#C29B62]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#C29B62]" />
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3 py-2 text-xs text-[#F5F3EF] focus:outline-none focus:border-[#C29B62]"
                  >
                    <option value="09:30">09:30 AM (Morning Brew)</option>
                    <option value="11:30">11:30 AM (Brunch)</option>
                    <option value="14:00">02:00 PM (Afternoon Coffee)</option>
                    <option value="16:30">04:30 PM (Fresh Pastry Bake)</option>
                    <option value="18:30">06:30 PM (Sunset / Evening)</option>
                    <option value="20:30">08:30 PM (Dinner & Dessert)</option>
                    <option value="22:30">10:30 PM (Late Night)</option>
                    <option value="00:30">12:30 AM (Weekend Roastery)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3 h-3 text-[#C29B62]" />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-[#121110] border border-[#2B2824] px-3 py-2 text-xs text-[#F5F3EF] focus:outline-none focus:border-[#C29B62]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Seating Preference */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5">
                  Seating Ambience Preference
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {(
                    [
                      'Indoor Roastery Bar',
                      'Courtyard Patio',
                      'Quiet Work Booth',
                      'Any Available',
                    ] as const
                  ).map((area) => (
                    <button
                      type="button"
                      key={area}
                      onClick={() => setFormData({ ...formData, seatingArea: area })}
                      className={`py-2 px-3 text-left border transition-colors ${
                        formData.seatingArea === area
                          ? 'border-[#C29B62] bg-[#C29B62]/10 text-[#F5F3EF]'
                          : 'border-[#2B2824] bg-[#121110] text-[#A8A29A] hover:border-[#423D37]'
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#A8A29A] mb-1.5">
                  Special Notes (Jain Friendly, Meeting, Birthday, etc.)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Jain preparation required, or anniversary celebration"
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full bg-[#121110] border border-[#2B2824] px-3.5 py-2 text-xs text-[#F5F3EF] placeholder-[#59534B] focus:outline-none focus:border-[#C29B62]"
                />
              </div>

              <div className="pt-4 border-t border-[#2B2824]">
                <button
                  type="submit"
                  className="w-full py-3 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#F5F3EF] hover:bg-[#C29B62] transition-colors"
                >
                  Confirm Table Request
                </button>
                <p className="text-[11px] text-[#807A72] text-center mt-2.5">
                  No advance booking fee required · Instant table hold for 15 minutes
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Success Confirmation Voucher */
          <div className="py-4 space-y-6 text-center">
            <div className="w-12 h-12 mx-auto rounded-full bg-[#C29B62]/20 border border-[#C29B62] flex items-center justify-center text-[#C29B62]">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-[#C29B62] font-semibold">
                Table Reserved
              </div>
              <h3 className="text-2xl font-serif text-[#F5F3EF] mt-1">
                We Look Forward to Welcoming You
              </h3>
              <p className="text-xs text-[#A8A29A] mt-2">
                Your reservation at Aosa Cafe, Panchwati has been registered.
              </p>
            </div>

            {/* Voucher Details */}
            <div className="bg-[#121110] border border-[#2B2824] p-5 text-left text-xs space-y-2.5">
              <div className="flex justify-between border-b border-[#242220] pb-2">
                <span className="text-[#807A72]">Booking Reference</span>
                <span className="font-mono text-[#F5F3EF] font-semibold">{bookingRef}</span>
              </div>
              <div className="flex justify-between border-b border-[#242220] pb-2">
                <span className="text-[#807A72]">Guest Name</span>
                <span className="text-[#F5F3EF]">{formData.guestName}</span>
              </div>
              <div className="flex justify-between border-b border-[#242220] pb-2">
                <span className="text-[#807A72]">Date & Time</span>
                <span className="text-[#F5F3EF] font-mono">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#242220] pb-2">
                <span className="text-[#807A72]">Party Size & Area</span>
                <span className="text-[#F5F3EF]">{formData.guests} Guests · {formData.seatingArea}</span>
              </div>
              {formData.specialRequests && (
                <div className="flex justify-between pt-1">
                  <span className="text-[#807A72]">Special Request</span>
                  <span className="text-[#C29B62] italic">{formData.specialRequests}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppShare}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 text-xs tracking-wider uppercase font-semibold text-[#121110] bg-[#C29B62] hover:bg-[#d5af7a] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp to Cafe</span>
              </button>

              <button
                onClick={handleReset}
                className="flex-1 py-3 text-xs tracking-wider uppercase font-semibold text-[#F5F3EF] bg-[#2B2824] hover:bg-[#38342F] transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
