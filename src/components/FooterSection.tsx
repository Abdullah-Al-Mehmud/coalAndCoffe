'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Coffee,
  MapPin,
  Phone,
  Clock,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
  Navigation as NavIcon,
  Utensils,
  Car,
  ShoppingBag,
  Globe,
  Share2,
  MessageSquare,
  Heart,
} from 'lucide-react';

export function FooterSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('House 60, Sonargaon Janapath Rd, Uttara, Dhaka 1230');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <footer id="location" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#0f0f0f] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37] mb-3 px-4 py-1.5 rounded-full bg-[#1c140f] border border-[#d4af37]/20"
          >
            <MapPin className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Visit Us In Uttara</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-serif text-white tracking-tight mb-4"
          >
            Location &amp; Practical Details
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-base sm:text-lg font-normal"
          >
            Conveniently located on Sonargaon Janapath Road, Uttara. Join us for rooftop dining or drop by for quick kerbside pickup.
          </motion.p>
        </div>

        {/* Location Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-5"
          >
            {/* Address Card */}
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-6 group hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c140f] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white font-serif mb-1">Our Location</h3>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-3">
                    House 60, Sonargaon Janapath Rd, <br />
                    Sector 11/13, Uttara, Dhaka 1230
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#d4af37] hover:text-amber-300 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>{copiedAddress ? 'Address Copied to Clipboard!' : 'Click to Copy Full Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone & Hotline Card */}
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-6 group hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c140f] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white font-serif mb-1">Reservations &amp; Hotline</h3>
                  <a
                    href="tel:01720440445"
                    className="text-neutral-200 text-lg font-semibold hover:text-[#d4af37] transition-colors block mb-1"
                  >
                    01720-440445
                  </a>
                  <p className="text-xs text-neutral-400">
                    Call for table reservations, group bookings, or kerbside orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-6 group hover:border-[#d4af37]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1c140f] border border-[#d4af37]/30 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white font-serif mb-1">Opening Hours</h3>
                  <div className="flex items-center justify-between text-sm text-neutral-300 py-1 border-b border-white/5">
                    <span>Monday – Sunday</span>
                    <span className="font-semibold text-[#d4af37]">Open daily until 12 AM</span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-2">
                    Rooftop fairy-lit setting operational every evening.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Styled Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 backdrop-blur-md bg-white/[0.03] border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-semibold text-neutral-300">Live Navigation Map</span>
              </div>
              <span className="text-xs text-[#d4af37] font-medium bg-[#1c140f] border border-[#d4af37]/30 px-3 py-1 rounded-full">
                Sonargaon Janapath Rd
              </span>
            </div>

            <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-white/10 shadow-inner group">
              <iframe
                title="Coal & Coffee Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.423985794821!2d90.387932!3d23.874551!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b5a31e17d%3A0x86b0ff22ec2878d6!2sSonargaon%20Janapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-[#0f0f0f]/90 border border-[#d4af37]/40 rounded-xl p-3.5 flex items-center justify-between shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#d4af37] text-[#0f0f0f] flex items-center justify-center font-bold">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-xs sm:text-sm">COAL &amp; COFFEE</div>
                    <div className="text-[10px] text-neutral-400">Uttara Sector 11/13, Dhaka</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=House+60,+Sonargaon+Janapath+Rd,+Dhaka+1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] text-xs font-bold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-md"
                >
                  <span>Open Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com/?q=House+60,+Sonargaon+Janapath+Rd,+Dhaka+1230"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#d4af37] hover:bg-[#e5c158] text-[#0f0f0f] font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]"
              >
                <NavIcon className="w-4 h-4" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="tel:01720440445"
                className="flex-1 backdrop-blur-md bg-white/5 hover:bg-white/10 border border-white/20 hover:border-[#d4af37]/60 text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#d4af37]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* 4 Column Footer Navigation & Services */}
        <div className="pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Column 1: Brand & Bio */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-full bg-[#1c140f] border border-[#d4af37]/40 flex items-center justify-center">
                  <Coffee className="w-5 h-5 text-[#d4af37]" />
                </div>
                <span className="text-xl font-bold tracking-[0.2em] font-serif text-white">
                  COAL &amp; COFFEE
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                Uttara&apos;s premier rooftop destination combining masterfully roasted coffee, coal-fired gourmet dining, and fairy-lit evening skies.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Website"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#1c140f] transition-all"
                >
                  <Globe className="w-4 h-4" />
                </a>
                <a
                  href="#reviews"
                  aria-label="Share"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#1c140f] transition-all"
                >
                  <Share2 className="w-4 h-4" />
                </a>
                <a
                  href="#location"
                  aria-label="Message"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:text-[#d4af37] hover:border-[#d4af37]/50 hover:bg-[#1c140f] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#d4af37]">
                Quick Links
              </h4>
              <ul className="space-y-2.5 text-sm text-neutral-400">
                {['Home', 'Story', 'Vibe', 'Menu', 'Reviews', 'Events', 'Location'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Practical Information */}
            <div>
              <h4 className="text-white font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#d4af37]">
                Practical Info
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                  <span>House 60, Sonargaon Janapath Rd, Uttara, Dhaka 1230</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <a href="tel:01720440445" className="hover:text-white transition-colors">01720-440445</a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Open Daily: Until 12:00 AM</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Services */}
            <div>
              <h4 className="text-white font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#d4af37]">
                Services &amp; Delivery
              </h4>
              <ul className="space-y-3 text-sm text-neutral-400">
                <li className="flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Rooftop Dine-in &amp; Lounge</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Car className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Kerbside Express Pickup</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShoppingBag className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Foodpanda &amp; Pathao Delivery</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>
              © {new Date().getFullYear()} Coal &amp; Coffee. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-neutral-400">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-[#d4af37]" />
              <span>in Uttara, Dhaka</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
