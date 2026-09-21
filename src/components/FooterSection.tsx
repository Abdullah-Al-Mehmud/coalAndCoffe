"use client";

import {
  Car,
  ChevronRight,
  Clock,
  Coffee,
  Globe,
  MapPin,
  MessageSquare,
  Phone,
  Share2,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import Image from "next/image";

export function FooterSection() {
  return (
    <footer className="bg-[#140D09] text-stone-400 pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 4 Column Footer Navigation & Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-sm">
                <Coffee className="w-5 h-5 text-[#C48D3F]" />
              </div>
              <span className="text-xl font-bold tracking-[0.2em] font-serif text-[#FDFBF7]">
                COAL &amp; COFFEE
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed font-normal">
              Uttara&apos;s premier rooftop destination combining masterfully
              roasted coffee, coal-fired gourmet dining, and fairy-lit evening
              skies.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-[#C48D3F] hover:border-[#C48D3F]/40 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#reviews"
                aria-label="Share"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-[#C48D3F] hover:border-[#C48D3F]/40 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a
                href="#location"
                aria-label="Message"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-stone-300 hover:text-[#C48D3F] hover:border-[#C48D3F]/40 transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#FDFBF7]">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-stone-400">
              {[
                "Home",
                "Story",
                "Vibe",
                "Menu",
                "Events",
                "Reviews",
                "Location",
              ].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-[#C48D3F] transition-colors flex items-center gap-1.5">
                    <ChevronRight className="w-3.5 h-3.5 text-[#C48D3F]" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Practical Information */}
          <div>
            <h4 className="font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#FDFBF7]">
              Practical Info
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C48D3F] shrink-0 mt-0.5" />
                <span>House 60, Sonargaon Janapath Rd, Uttara, Dhaka 1230</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C48D3F] shrink-0" />
                <a
                  href="tel:01720440445"
                  className="hover:text-[#C48D3F] transition-colors">
                  01720-440445
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#C48D3F] shrink-0" />
                <span>Open Daily: Until 12:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h4 className="font-bold font-serif text-sm tracking-wider uppercase mb-4 text-[#FDFBF7]">
              Services &amp; Delivery
            </h4>
            <ul className="space-y-3 text-sm text-stone-400">
              <li className="flex items-center gap-2.5">
                <Utensils className="w-4 h-4 text-[#C48D3F] shrink-0" />
                <span>Rooftop Dine-in &amp; Lounge</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Car className="w-4 h-4 text-[#C48D3F] shrink-0" />
                <span>Kerbside Express Pickup</span>
              </li>
              <li className="flex items-center gap-2.5">
                <ShoppingBag className="w-4 h-4 text-[#C48D3F] shrink-0" />
                <span>Foodpanda &amp; Pathao Delivery</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 2026 Coal &amp; Coffee. All rights reserved.</p>
          <div className=" text-stone-400">
            <a
              href="https://www.stellarworm.com/"
              className="flex items-center gap-1">
              <span>Crafted by</span>
              <Image
                src="/stellar.png"
                alt="Stellar"
                width={110}
                height={28}
                className="h-3 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
