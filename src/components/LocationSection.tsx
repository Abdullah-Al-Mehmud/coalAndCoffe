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

export function LocationSection() {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText('House 60, Sonargaon Janapath Rd, Uttara, Dhaka 1230');
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-[#FDFBF7] text-[#211611] border-b border-[#2B1E16]/10">
      {/* Background subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#EEDCC6]/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B07A3B] mb-3 px-4 py-1.5 rounded-full bg-white border border-[#2B1E16]/10 shadow-sm"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B07A3B]" />
            <span>Visit Us In Uttara</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold font-serif text-[#211611] tracking-tight mb-4"
          >
            Location &amp; Practical Details
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-stone-600 text-base sm:text-lg font-normal"
          >
            Conveniently located on Sonargaon Janapath Road, Uttara. Join us for rooftop dining or drop by for quick kerbside pickup.
          </motion.p>
        </div>

        {/* Location Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col justify-between space-y-5"
          >
            {/* Address Card */}
            <div className="bg-white/80 backdrop-blur-md border border-[#2B1E16]/10 rounded-2xl p-6 group hover:border-[#B07A3B]/40 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F5F0] border border-[#2B1E16]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#B07A3B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#211611] font-serif mb-1">Our Location</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-3">
                    House 60, Sonargaon Janapath Rd, <br />
                    Sector 11/13, Uttara, Dhaka 1230
                  </p>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#B07A3B] hover:text-[#8C5824] transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B07A3B]" />
                    <span>{copiedAddress ? 'Address Copied to Clipboard!' : 'Click to Copy Full Address'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Phone & Hotline Card */}
            <div className="bg-white/80 backdrop-blur-md border border-[#2B1E16]/10 rounded-2xl p-6 group hover:border-[#B07A3B]/40 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F5F0] border border-[#2B1E16]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#B07A3B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#211611] font-serif mb-1">Reservations &amp; Hotline</h3>
                  <a
                    href="tel:01720440445"
                    className="text-[#211611] text-lg font-semibold hover:text-[#B07A3B] transition-colors block mb-1"
                  >
                    01720-440445
                  </a>
                  <p className="text-xs text-stone-500">
                    Call for table reservations, group bookings, or kerbside orders.
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white/80 backdrop-blur-md border border-[#2B1E16]/10 rounded-2xl p-6 group hover:border-[#B07A3B]/40 transition-all duration-300 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#F8F5F0] border border-[#2B1E16]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#B07A3B]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#211611] font-serif mb-1">Opening Hours</h3>
                  <div className="flex items-center justify-between text-sm text-stone-600 py-1 border-b border-[#2B1E16]/5">
                    <span>Monday – Sunday</span>
                    <span className="font-semibold text-[#B07A3B]">Open daily until 12:00 AM</span>
                  </div>
                  <p className="text-xs text-stone-500 mt-2">
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
            className="lg:col-span-7 bg-white/80 backdrop-blur-md border border-[#2B1E16]/10 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden shadow-sm"
          >
            <div className="flex items-center justify-between mb-4 z-10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-stone-700">Live Navigation Map</span>
              </div>
              <span className="text-xs text-[#B07A3B] font-medium bg-[#F8F5F0] border border-[#2B1E16]/10 px-3 py-1 rounded-full shadow-sm">
                Sonargaon Janapath Rd
              </span>
            </div>

            <div className="relative w-full h-[320px] sm:h-[380px] rounded-xl overflow-hidden border border-[#2B1E16]/10 shadow-inner group">
              <iframe
                title="Coal & Coffee Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.423985794821!2d90.387932!3d23.874551!2m3!1f0!1f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c46b5a31e17d%3A0x86b0ff22ec2878d6!2sSonargaon%20Janapath%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-white/95 border border-[#2B1E16]/15 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#241812] text-[#FDFBF7] flex items-center justify-center font-bold">
                    <Coffee className="w-4 h-4 text-[#C48D3F]" />
                  </div>
                  <div>
                    <div className="text-[#211611] font-bold text-xs sm:text-sm">COAL &amp; COFFEE</div>
                    <div className="text-[10px] text-stone-500">Uttara Sector 11/13, Dhaka</div>
                  </div>
                </div>

                <a
                  href="https://maps.google.com/?q=House+60,+Sonargaon+Janapath+Rd,+Dhaka+1230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#B07A3B] hover:bg-[#996429] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all flex items-center gap-1.5 shadow-sm"
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
                className="flex-1 bg-[#241812] hover:bg-[#3D291F] text-[#FDFBF7] font-bold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <NavIcon className="w-4 h-4 text-[#C48D3F]" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href="tel:01720440445"
                className="flex-1 bg-white hover:bg-stone-50 border border-[#2B1E16]/15 hover:border-[#B07A3B] text-[#2B1E16] font-semibold py-3.5 px-6 rounded-xl text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#B07A3B]" />
                <span>Call Hotline</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
