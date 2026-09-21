'use client';

import { motion } from 'framer-motion';
import { Sparkles, Flame, Coffee, Heart } from 'lucide-react';

export function StorySection() {
  return (
    <section id="story" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0c0c0c] border-t border-white/5">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column - Image Composition */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200"
                alt="Rustic brick interior of Coal and Coffee"
                className="w-full h-[450px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-black/30" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-[#0f0f0f]/85 border border-[#d4af37]/40 rounded-xl p-5 shadow-2xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#1c140f] border border-[#d4af37]/40 flex items-center justify-center shrink-0">
                    <Flame className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif font-bold text-base">Coal-Fired &amp; Handcrafted</h4>
                    <p className="text-xs text-neutral-400">Uttara, Sector 11/13 • Sonargaon Janapath</p>
                  </div>
                </div>
                <div className="hidden sm:block text-right">
                  <span className="text-xs font-semibold text-[#d4af37] bg-[#1c140f] border border-[#d4af37]/30 px-3 py-1 rounded-full">
                    Est. 2022
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Ambient Border Offset */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#d4af37]/20 rounded-2xl -z-10 hidden sm:block pointer-events-none" />
          </motion.div>

          {/* Right Column - Brand Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4 px-3.5 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/30 self-start">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Legacy &amp; Ethos</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight leading-tight mb-6">
              From Beans to Bricks.
            </h2>

            <p className="text-neutral-300 text-base sm:text-lg font-normal leading-relaxed mb-6">
              Born in the vibrant heart of Uttara, <strong className="text-white">Coal &amp; Coffee</strong> was envisioned as a sanctuary where modern aesthetic architecture meets the deep, nostalgic warmth of coal-fired gastronomy and artisanal coffee roasting.
            </p>

            <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed mb-8">
              Whether you are looking for a quiet corner nook for afternoon deep work, an intimate candlelit dinner under fairy-lit skies, or a celebratory gathering with handcrafted artisan brews, our rooftop provides the ideal elevation above the city hustle.
            </p>

            {/* Feature Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1c140f] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Coffee className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Precision Roasts</h4>
                  <p className="text-xs text-neutral-400">Single-origin beans pulled to crema perfection.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1c140f] border border-[#d4af37]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Heart className="w-4 h-4 text-[#d4af37]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm">Fairy-Lit Nights</h4>
                  <p className="text-xs text-neutral-400">Warm ambient lighting overlooking Uttara skyline.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
