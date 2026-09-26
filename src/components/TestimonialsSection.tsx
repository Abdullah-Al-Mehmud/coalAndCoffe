'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Coffee, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Accent, Cta, Diamonds } from './decor';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

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
    <section
      id="reviews"
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
            What Our <Accent>Guests Say.</Accent>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            Read authentic stories from guests who love our coffee, artisanal
            menu, and fairy-lit rooftop ambiance.
          </motion.p>
        </div>

        {/* Reviews grid — hero-style cards */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {testimonials.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative flex flex-col justify-between rounded-[1.75rem] bg-white p-8 ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] transition-all duration-500 hover:shadow-[0_20px_45px_rgba(43,30,22,0.15)] hover:ring-[#B07A3B]/40"
            >
              <Quote className="pointer-events-none absolute top-6 right-6 h-12 w-12 text-[#2B1E16]/5 transition-colors duration-500 group-hover:text-[#B07A3B]/10" />

              <div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#B07A3B]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#B07A3B]" />
                    ))}
                  </div>
                  <span className="rounded-full border border-[#2B1E16]/10 bg-[#F8F5F0] px-2.5 py-0.5 text-[11px] font-semibold text-[#B07A3B]">
                    {review.tag}
                  </span>
                </div>

                <p className="relative z-10 mb-8 text-base italic leading-relaxed text-stone-700 font-normal">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-[#2B1E16]/10 pt-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#2B1E16]/15 bg-[#F8F5F0] font-serif text-sm font-bold text-[#211611] shadow-sm">
                  {review.initials}
                </div>
                <div>
                  <h4 className="flex items-center gap-1.5 text-base font-bold text-[#211611] transition-colors group-hover:text-[#B07A3B]">
                    <span>{review.name}</span>
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#B07A3B]" />
                  </h4>
                  <p className="text-xs font-medium text-stone-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Community banner — pill CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 flex flex-col items-center justify-between gap-6 rounded-[1.75rem] bg-white p-6 text-center ring-1 ring-[#2B1E16]/10 shadow-[0_8px_25px_rgba(43,30,22,0.04)] sm:flex-row sm:p-8 sm:text-left"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2B1E16]/10 bg-[#F8F5F0]">
              <Coffee className="h-6 w-6 text-[#B07A3B]" />
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold text-[#211611]">
                Loved by 10,000+ Coffee Enthusiasts in Dhaka
              </h4>
              <p className="text-xs text-stone-500">
                Ranked among Uttara&apos;s top rooftop cafe destinations
              </p>
            </div>
          </div>

          <Cta href="#location" className="shrink-0" icon={<ChevronRight className="h-4 w-4 text-[#C48D3F]" />}>
            Visit Us Today
          </Cta>
        </motion.div>
      </div>
    </section>
  );
}