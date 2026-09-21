'use client';

import { motion } from 'framer-motion';
import { Sparkles, Compass, Moon, Laptop, Coffee, Flame } from 'lucide-react';

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
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800',
      icon: Flame,
      span: 'md:col-span-1 md:row-span-1',
      tag: 'Gourmet Kitchen',
    },
  ];

  return (
    <section id="vibe" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0f0f0f]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3 px-4 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/30"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Atmosphere</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4"
          >
            Curated Spaces &amp; Rooftop Vibes
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-normal"
          >
            Designed for every moment—from productive solo work mornings to fairy-lit evening celebrations.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {bentoItems.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-2xl overflow-hidden group border border-white/10 hover:border-[#d4af37]/50 transition-all duration-500 shadow-xl ${item.span}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/95 via-[#0f0f0f]/40 to-black/20 group-hover:from-[#0f0f0f]/90 transition-all duration-300" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="backdrop-blur-md bg-black/60 border border-white/10 text-[#d4af37] text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5">
                    <IconComponent className="w-3.5 h-3.5" />
                    <span>{item.tag}</span>
                  </span>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-white mb-1 group-hover:text-[#d4af37] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
