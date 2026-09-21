'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Users, Phone, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EventModal({ isOpen, onClose }: EventModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: 'Birthday Party',
    guestCount: '20-30 Guests',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg backdrop-blur-xl bg-[#14100c] border border-[#d4af37]/40 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
          >
            {/* Top Amber Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1.5 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent rounded-full" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-[#d4af37]/50 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-white mb-2">Inquiry Received!</h3>
                <p className="text-neutral-300 text-sm max-w-xs leading-relaxed">
                  Our event manager will contact you at <span className="text-[#d4af37] font-semibold">{formData.phone || 'your phone'}</span> within 2 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Rooftop Private Bookings</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif text-white">Inquire About Private Events</h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    Book our fairy-lit rooftop for birthdays, corporate dinners, or intimate celebrations.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Phone Number</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="017XX-XXXXXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Event Date</label>
                      <div className="relative">
                        <Calendar className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Event Type</label>
                      <select
                        value={formData.eventType}
                        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                        className="w-full bg-[#1c140f] border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="Birthday Party">Birthday Party</option>
                        <option value="Corporate Meetup">Corporate Dinner</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Private Dining">Private Dining</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-300 mb-1">Estimated Guests</label>
                      <div className="relative">
                        <Users className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                        <select
                          value={formData.guestCount}
                          onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                          className="w-full bg-[#1c140f] border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#d4af37]"
                        >
                          <option value="10-20 Guests">10 - 20 Guests</option>
                          <option value="20-30 Guests">20 - 30 Guests</option>
                          <option value="30-50 Guests">30 - 50 Guests</option>
                          <option value="50+ Guests">50+ Guests (Full Rooftop)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">Special Requests (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Preferred decor, specific menu items..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-bold py-3.5 rounded-xl text-sm transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] mt-2"
                  >
                    Submit Booking Inquiry
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
