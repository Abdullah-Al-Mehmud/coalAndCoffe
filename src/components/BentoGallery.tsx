'use client';

/* eslint-disable @next/next/no-img-element */

import { motion } from 'framer-motion';
import { Compass, Moon, Laptop, Coffee, Flame } from 'lucide-react';
import { Accent, Diamonds } from './decor';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

export function BentoGallery() {
  const bentoItems = [
    {
      id: 1,
      title: 'Rooftop Evenings',
      subtitle: 'Fairy lights & golden hour skyline',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000',
      icon: Moon,
      span: 'md:col-span-2 md:row-span-2',
      tag: 'Signature Vibe',
    },
    {
      id: 2,
      title: 'Focused Workspaces',
      subtitle: 'Quiet nooks, high-speed Wi-Fi, power outlets',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800',
      icon: Laptop,
      span: 'md:col-span-1 md:row-span-1',
      tag: 'Co-Working Haven',
    },
    {
      id: 3,
      title: 'Artisanal Brews',
      subtitle: 'Masterfully extracted espresso & cold brews',
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800',
      icon: Coffee,
      span: 'md:col-span-1 md:row-span-1',
      tag: 'Top 3 in Dhaka',
    },
    {
      id: 4,
      title: 'Rustic Brickwork',
      subtitle: 'Architectural warmth & coal ember aesthetics',
      image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800',
      icon: Compass,
      span: 'md:col-span-1 md:row-span-1',
      tag: 'Interior Charm',
    },
    {
      id: 5,
      title: 'Coal & Grill Kitchen',
      subtitle: 'Smokey gourmet mains & handcrafted sides',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200',
      icon: Flame,
      span: 'md:col-span-2 md:row-span-1',
      tag: 'Gourmet Kitchen',
    },
  ];

  return (
    <section
      id="vibe"
      className="relative overflow-hidden bg-[#FDFBF7] py-24 border-t border-[#2B1E16]/10 sm:py-28"
    >
      {/* Corner ornaments — matches HeroSection */}
      <Diamonds className="top-24 left-8 lg:left-12" />
      <Diamonds className="top-24 right-8 lg:right-12" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header — centered like the hero */}
        <div className="relative z-[200] mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.h2
            {...fadeUp(0.3)}
            className="mb-5 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#211611] sm:text-5xl md:text-6xl"
          >
            Curated Spaces &amp; <Accent>Rooftop Vibes.</Accent>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            Designed for every moment—from productive solo work mornings to
            fairy-lit evening celebrations.
          </motion.p>
        </div>

        {/* Bento grid — hero-style card treatment */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid auto-rows-[240px] grid-cols-1 gap-6 md:grid-cols-3"
        >
          {bentoItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`group relative overflow-hidden rounded-[1.75rem] ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(43,30,22,0.15)] hover:ring-[#B07A3B]/50 ${item.span}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#211611]/90 via-[#211611]/35 to-transparent transition-all duration-300 group-hover:from-[#211611]/80" />

                {/* Top Badge */}
                <div className="absolute left-4 top-4 z-10">
                  <span className="flex items-center gap-1.5 rounded-full border border-[#2B1E16]/10 bg-white/90 px-3 py-1 text-xs font-semibold text-[#2B1E16] shadow-sm backdrop-blur-md">
                    <IconComponent className="h-3.5 w-3.5 text-[#B07A3B]" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                  <h3 className="mb-1 font-serif text-xl font-bold text-white sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-xs font-normal leading-relaxed text-stone-200 opacity-90 sm:text-sm">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}