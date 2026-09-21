'use client';

/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Sparkles, Calendar, UtensilsCrossed, Coffee, Phone, ChevronRight } from 'lucide-react';

interface EventsSectionProps {
  onOpenEventModal: () => void;
}

export function EventsSection({ onOpenEventModal }: EventsSectionProps) {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#18110D] border-t border-white/10 overflow-hidden text-stone-200">
      {/* Warm Caramel Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#C48D3F]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Fine Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="backdrop-blur-md bg-black/40 border border-white/10 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
          {/* Top Gold Highlight Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C48D3F] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C48D3F] mb-4 px-4 py-1.5 rounded-full bg-[#C48D3F]/10 border border-[#C48D3F]/20 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C48D3F]" />
                <span>Rooftop Hosting &amp; Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight mb-6">
                Host Your Moments <br />
                <span className="text-[#C48D3F]">
                  Under the Fairy Lights.
                </span>
              </h2>

              <p className="text-stone-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
                Birthdays, corporate meetups, or private dinners. Book our fairy-lit rooftop for an unforgettable evening high above Uttara. Custom catering menus and dedicated staff included.
              </p>

              {/* Exact Feature Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm">
                  <Calendar className="w-5 h-5 text-[#C48D3F] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Full Rooftop Booking</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Private Sky Lounge Access</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm">
                  <UtensilsCrossed className="w-5 h-5 text-[#C48D3F] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Customized Multi-Course Catering</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Tailored Gourmet Menus</p>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-left backdrop-blur-sm">
                  <Coffee className="w-5 h-5 text-[#C48D3F] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Dedicated Barista Station</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Craft Espresso &amp; Beverages</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenEventModal}
                  className="w-full sm:w-auto bg-[#C48D3F] hover:bg-[#b07b32] text-[#18110D] font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-lg flex items-center justify-center gap-2 group"
                >
                  <span>Inquire About Events</span>
                  <ChevronRight className="w-4 h-4 text-[#18110D] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:01720440445"
                  className="w-full sm:w-auto border border-white/15 hover:border-[#C48D3F] hover:bg-white/5 text-white font-semibold px-6 py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C48D3F]" />
                  <span>Call Hotline: 01720-440445</span>
                </a>
              </div>
            </motion.div>

            {/* Right Visual Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=800"
                  alt="Rooftop Event Celebration"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18110D] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/60 border border-white/10 rounded-xl p-3.5 text-center shadow-md">
                  <span className="text-xs text-[#C48D3F] font-semibold uppercase tracking-wider">Exclusive Venue Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


