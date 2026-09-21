'use client';

import { motion } from 'framer-motion';
import { Sparkles, Calendar, Users, Music, Phone, ChevronRight } from 'lucide-react';

interface EventsSectionProps {
  onOpenEventModal: () => void;
}

export function EventsSection({ onOpenEventModal }: EventsSectionProps) {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#090706] border-t border-white/5 overflow-hidden">
      {/* Warm Ember Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-gradient-to-b from-[#1c140f]/80 to-[#120c08]/90 border border-[#d4af37]/30 rounded-3xl p-8 sm:p-14 relative overflow-hidden shadow-2xl">
          {/* Top Amber Highlight Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4 px-4 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/30">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Rooftop Hosting &amp; Celebrations</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight mb-6">
                Host Your Moments <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-[#d4af37] to-amber-400">
                  in the Sky.
                </span>
              </h2>

              <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed mb-8 max-w-xl">
                Birthdays, corporate meetups, or private dinners. Book our fairy-lit rooftop for an unforgettable evening high above Uttara. Custom catering menus and dedicated staff included.
              </p>

              {/* Event Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-8">
                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
                  <Calendar className="w-5 h-5 text-[#d4af37] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Flexible Dates</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Weekdays &amp; Weekends</p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
                  <Users className="w-5 h-5 text-[#d4af37] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Up to 60 Guests</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Private Rooftop Space</p>
                </div>

                <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 text-left">
                  <Music className="w-5 h-5 text-[#d4af37] mb-2" />
                  <h4 className="text-white font-semibold text-sm">Custom Sound &amp; Decor</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">Fairy Lights &amp; Audio Setup</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenEventModal}
                  className="w-full sm:w-auto bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:shadow-[0_0_35px_rgba(212,175,55,0.55)] flex items-center justify-center gap-2 group"
                >
                  <span>Inquire About Events</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:01720440445"
                  className="w-full sm:w-auto backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-4 rounded-full text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#d4af37]" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-black/70 border border-[#d4af37]/30 rounded-xl p-3.5 text-center">
                  <span className="text-xs text-[#d4af37] font-semibold uppercase tracking-wider">Exclusive Venue Access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
