'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle2,
  ExternalLink,
  Navigation as NavIcon,
  Coffee,
} from 'lucide-react';
import { Accent, Cta, Diamonds } from './decor';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

export function LocationSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('House 60, Sonargaon Janapath Rd, Uttara, Dhaka 1230');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section
      id="location"
      className="relative overflow-hidden bg-[#FDFBF7] py-24 border-t border-[#2B1E16]/10 text-[#211611] sm:py-28"
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
            Location &amp; <Accent>Practical Details.</Accent>
          </motion.h2>

          <motion.p
            {...fadeUp(0.4)}
            className="max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg"
          >
            Conveniently located on Sonargaon Janapath Road, Uttara. Join us for
            rooftop dining or drop by for quick kerbside pickup.
          </motion.p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left column: details cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-between space-y-5 lg:col-span-5"
          >
            {[
              {
                icon: MapPin,
                title: 'Our Location',
                body: (
                  <>
                    House 60, Sonargaon Janapath Rd, <br />
                    Sector 11/13, Uttara, Dhaka 1230
                    <button
                      onClick={handleCopyAddress}
                      className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-[#B07A3B] transition-colors hover:text-[#8C5824] cursor-pointer"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#B07A3B]" />
                      <span>{copiedAddress ? 'Address Copied to Clipboard!' : 'Click to Copy Full Address'}</span>
                    </button>
                  </>
                ),
              },
              {
                icon: Phone,
                title: 'Reservations & Hotline',
                body: (
                  <>
                    <a
                      href="tel:01720440445"
                      className="block text-[#211611] text-lg font-semibold transition-colors hover:text-[#B07A3B]"
                    >
                      01720-440445
                    </a>
                    <p className="mt-1 text-xs text-stone-500">
                      Call for table reservations, group bookings, or kerbside orders.
                    </p>
                  </>
                ),
              },
              {
                icon: Clock,
                title: 'Opening Hours',
                body: (
                  <>
                    <div className="flex items-center justify-between border-b border-[#2B1E16]/5 py-1 text-sm text-stone-600">
                      <span>Monday – Sunday</span>
                      <span className="font-semibold text-[#B07A3B]">Open daily until 12:00 AM</span>
                    </div>
                    <p className="mt-2 text-xs text-stone-500">
                      Rooftop fairy-lit setting operational every evening.
                    </p>
                  </>
                ),
              },
            ].map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="rounded-[1.75rem] bg-white p-6 ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] transition-all duration-300 hover:ring-[#B07A3B]/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#2B1E16]/10 bg-[#F8F5F0]">
                      <Icon className="h-6 w-6 text-[#B07A3B]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-serif text-lg font-bold text-[#211611]">{card.title}</h3>
                      <div className="text-sm leading-relaxed text-stone-600">{card.body}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Right column: map card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] bg-white p-6 ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] lg:col-span-7"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-stone-700">Live Navigation Map</span>
              </div>
              <span className="rounded-full border border-[#2B1E16]/10 bg-[#F8F5F0] px-3 py-1 text-xs font-medium text-[#B07A3B]">
                Sonargaon Janapath Rd
              </span>
            </div>

            <div className="relative h-[320px] w-full overflow-hidden rounded-[1.25rem] border border-[#2B1E16]/10 shadow-inner sm:h-[380px]">
              <iframe
                title="Coal & Coffee Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.423985794821!2d90.387932!3d23.874551!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b5a31e17d%3A0x86b0ff22ec2878d6!2sSonargaon%20Janapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full object-cover"
              />

              {/* Static gold pin */}
              <span className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                <span className="relative flex h-8 w-8 rotate-45 items-center justify-center rounded-[4px] border-2 border-white bg-[#B07A3B] shadow-[0_6px_18px_rgba(176,122,59,0.5)]">
                  <MapPin className="h-4 w-4 -rotate-45 text-white" />
                </span>
              </span>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-[#2B1E16]/15 bg-white/95 p-3.5 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#241812] font-bold text-[#FDFBF7]">
                    <Coffee className="h-4 w-4 text-[#C48D3F]" />
                  </div>
                  <div>
                    <div className="text-[#211611] text-xs font-bold sm:text-sm">COAL &amp; COFFEE</div>
                    <div className="text-[10px] text-stone-500">Uttara Sector 11/13, Dhaka</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=House+60,+Sonargaon+Janapath+Rd,+Dhaka+1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-[#B07A3B] px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-[#996429]"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Cta
                className="flex-1"
                href="https://maps.google.com/?q=House+60,+Sonargaon+Janapath+Rd,+Dhaka+1230"
                icon={<NavIcon className="h-4 w-4 text-[#C48D3F]" />}
              >
                Get Driving Directions
              </Cta>
              <Cta
                className="flex-1"
                variant="secondary"
                href="tel:01720440445"
                icon={<Phone className="h-4 w-4 text-[#B07A3B]" />}
              >
                Call Hotline
              </Cta>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}