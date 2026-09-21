'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Coffee, ChevronRight, CheckCircle2 } from 'lucide-react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Rashidul Hasan',
      role: 'Local Guide',
      initials: 'RH',
      comment: "It's a hidden gem that radiates warmth and modern charm. The ambiance is an inviting blend of rustic brickwork and enchanting fairy lights...",
      rating: 5,
      tag: 'Verified Guest',
    },
    {
      id: 2,
      name: 'Shahriar Mamun',
      role: 'Coffee Enthusiast',
      initials: 'SM',
      comment: "...I would rate it among the top three best coffee I have had in Dhaka. The texture and taste were perfect.",
      rating: 5,
      tag: 'Top Coffee Pick',
    },
    {
      id: 3,
      name: 'Nusrat Jahan',
      role: 'Uttara Resident',
      initials: 'NJ',
      comment: "The rooftop atmosphere under fairy lights is unmatched in Uttara. Amazing Alfredo pasta, artisanal drinks, and very gracious staff.",
      rating: 5,
      tag: 'Rooftop Experience',
    },
  ];

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0f0f0f] border-t border-white/5">
      {/* Glows */}
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#1c140f] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-4 px-4 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/30"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#d4af37] text-[#d4af37]" />
              ))}
            </div>
            <span>4.4 Stars • 1,253 Google Reviews</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4"
          >
            What Our Guests Say
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-normal"
          >
            Read authentic stories from guests who love our coffee, artisanal menu, and fairy-lit rooftop ambiance.
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-8 relative flex flex-col justify-between group hover:border-[#d4af37]/40 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/5"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/[0.04] group-hover:text-[#d4af37]/10 transition-colors duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-[#d4af37] bg-[#1c140f] border border-[#d4af37]/30 px-2.5 py-0.5 rounded-full">
                    {review.tag}
                  </span>
                </div>

                <p className="text-neutral-300 text-base leading-relaxed italic mb-8 relative z-10 font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1c140f] to-[#2c2018] border border-[#d4af37]/40 flex items-center justify-center font-serif text-[#d4af37] font-bold text-sm shadow-md shrink-0">
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-white font-bold text-base group-hover:text-[#d4af37] transition-colors flex items-center gap-1.5">
                    <span>{review.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                  </h4>
                  <p className="text-xs text-neutral-400 font-medium">
                    {review.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Community Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 backdrop-blur-md bg-gradient-to-r from-white/[0.02] via-[#1c140f]/60 to-white/[0.02] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center shrink-0">
              <Coffee className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white font-serif">Loved by 10,000+ Coffee Enthusiasts in Dhaka</h4>
              <p className="text-xs text-neutral-400">Ranked among Uttara&apos;s top rooftop cafe destinations</p>
            </div>
          </div>

          <a
            href="#location"
            className="bg-white/5 hover:bg-[#d4af37] text-white hover:text-[#0f0f0f] border border-white/20 hover:border-[#d4af37] font-semibold px-6 py-3 rounded-full text-sm transition-all duration-300 shrink-0 flex items-center gap-2"
          >
            <span>Visit Us Today</span>
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
