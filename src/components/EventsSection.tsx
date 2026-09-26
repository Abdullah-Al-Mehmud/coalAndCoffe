'use client';

/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Calendar, UtensilsCrossed, Coffee, Phone, ChevronRight } from 'lucide-react';
import { Accent, Cta, Diamonds, FeatureChip } from './decor';

interface EventsSectionProps {
  onOpenEventModal: () => void;
}

export function EventsSection({ onOpenEventModal }: EventsSectionProps) {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#18110D] py-24 border-t border-white/10 text-stone-200 sm:py-28"
    >
      {/* Warm Caramel Ambient Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C48D3F]/10 blur-[130px]" />

      {/* Fine Grid Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Corner ornaments — gold variant of HeroSection */}
      <Diamonds className="top-24 left-8 lg:left-12" dark />
      <Diamonds className="top-24 right-8 lg:right-12" dark />

      <div className="relative z-10">
        {/* Content — centered like the hero */}
        <div className="relative z-[200] mx-auto flex max-w-3xl flex-col items-center px-4 pb-10 text-center sm:px-6">
          <h2 className="mb-5 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl">
            Host Your Moments{' '}
            <br className="hidden sm:inline" />
            <Accent dark>Under the Fairy Lights.</Accent>
          </h2>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-stone-300 sm:text-lg">
            Birthdays, corporate meetups, or private dinners. Book our
            fairy-lit rooftop for an unforgettable evening high above Uttara.
            Custom catering menus and dedicated staff included.
          </p>

          {/* Feature chips */}
          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-left">
            <FeatureChip dark icon={Calendar} title="Full Rooftop Booking" sub="Private Sky Lounge Access" />
            <FeatureChip dark icon={UtensilsCrossed} title="Customized Multi-Course Catering" sub="Tailored Gourmet Menus" />
            <FeatureChip dark icon={Coffee} title="Dedicated Barista Station" sub="Craft Espresso & Beverages" />
          </ul>

          {/* CTAs — hero pill pair on dark */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Cta dark onClick={onOpenEventModal} icon={<ChevronRight className="h-5 w-5 text-[#18110D]" />}>
              Inquire About Events
            </Cta>
            <Cta dark variant="secondary" href="tel:01720440445" icon={<Phone className="h-5 w-5 text-[#C48D3F]" />}>
              Call Hotline: 01720-440445
            </Cta>
          </motion.div>
        </div>

        {/* Hero-style photo card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl px-4 sm:px-6"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] ring-1 ring-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:rounded-[2.25rem]">
            <img
              src="https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000"
              alt="Rooftop Event Celebration"
              className="h-[360px] w-full object-cover sm:h-[420px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#18110D] via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/10 bg-black/60 p-3.5 text-center shadow-md backdrop-blur-md">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C48D3F]">
                Exclusive Venue Access
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}