'use client';

/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Coffee, Flame, Heart, Utensils } from 'lucide-react';
import { Accent, Cta, Diamonds, FeatureChip } from './decor';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

export function StorySection() {
  return (
    <section
      id="story"
      className="relative overflow-hidden bg-[#FDFBF7] py-24 border-t border-[#2B1E16]/10 sm:py-28"
    >
      {/* Corner ornaments — matches HeroSection */}
      <Diamonds className="top-24 left-8 lg:left-12" />
      <Diamonds className="top-24 right-8 lg:right-12" />

      <div className="relative">
        {/* Content — centered like the hero */}
        <div className="relative z-[200] mx-auto flex max-w-3xl flex-col items-center px-4 pb-10 text-center sm:px-6">
          <motion.h2
            {...fadeUp(0.3)}
            className="mb-5 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#211611] sm:text-5xl md:text-6xl"
          >
            From Beans to <Accent>Bricks.</Accent>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="mb-8 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            Born in the vibrant heart of Uttara, Coal &amp; Coffee is a sanctuary
            where modern aesthetic architecture meets the deep, nostalgic warmth
            of coal-fired gastronomy and artisanal coffee roasting.
          </motion.p>

          {/* Feature chips */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-left"
          >
            <FeatureChip icon={Coffee} title="Precision Roasts" sub="Single-origin beans, pulled to crema perfection." />
            <FeatureChip icon={Flame} title="Coal-Fired Grill" sub="Smokey gourmet mains over open embers." />
            <FeatureChip icon={Heart} title="Fairy-Lit Nights" sub="Warm ambient light above the Uttara skyline." />
          </motion.ul>

          {/* CTAs — hero pill pair */}
          <motion.div
            {...fadeUp(0.65)}
            className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <Cta href="#menu" icon={<Utensils className="h-5 w-5 text-[#C48D3F]" />}>
              Explore the Menu
            </Cta>
            <Cta href="#events" variant="secondary">
              Host an Event
            </Cta>
          </motion.div>
        </div>

        {/* Hero-style photo card */}
        <motion.div
          {...fadeUp(0.75)}
          className="mx-auto max-w-5xl px-4 sm:px-6"
        >
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] sm:rounded-[2.25rem]">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1400"
              alt="Rustic brick interior of Coal and Coffee"
              className="h-[380px] w-full object-cover sm:h-[460px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#211611]/80 via-transparent to-transparent" />

            {/* Floating stat card */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#2B1E16]/15 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#2B1E16]/10 bg-[#F8F5F0]">
                  <Flame className="h-5 w-5 text-[#B07A3B]" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#211611] sm:text-base">
                    Coal-Fired &amp; Handcrafted
                  </h4>
                  <p className="text-xs text-stone-500">
                    Uttara, Sector 11/13 • Sonargaon Janapath
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-[#2B1E16]/10 bg-[#F8F5F0] px-3 py-1 text-xs font-semibold text-[#B07A3B]">
                Est. 2022
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}