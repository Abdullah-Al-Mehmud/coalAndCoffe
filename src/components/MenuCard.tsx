'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Sparkles, ShoppingBag } from 'lucide-react';

export interface MenuCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
  category?: string;
  isPopular?: boolean;
  badgeText?: string;
  onOrder?: () => void;
}

export function MenuCard({
  title,
  description,
  price,
  imageUrl,
  category,
  isPopular = false,
  badgeText,
  onOrder,
}: MenuCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#2B1E16]/10 p-4 sm:p-5 flex flex-col justify-between shadow-[0_8px_25px_rgba(43,30,22,0.04)] hover:shadow-[0_12px_35px_rgba(43,30,22,0.08)] transition-all duration-300 hover:-translate-y-1 group">
      {/* Top Image Presentation */}
      <div className="relative h-44 sm:h-52 w-full rounded-xl overflow-hidden bg-[#F8F5F0]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Floating Overlay Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
          {category ? (
            <span className="backdrop-blur-md bg-white/90 border border-[#2B1E16]/10 text-[#211611] text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
              {category}
            </span>
          ) : (
            <div />
          )}

          {(isPopular || badgeText) && (
            <span className="bg-[#211611] text-[#FDFBF7] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-[#E6C687]" />
              <span>{badgeText || 'Popular'}</span>
            </span>
          )}
        </div>
      </div>

      {/* Content Anatomy (Left-Aligned) */}
      <div className="mt-4 sm:mt-5 flex-1 flex flex-col justify-between text-left">
        <div>
          <h3 className="font-bold text-lg sm:text-xl text-[#211611] font-sans leading-snug group-hover:text-[#B07A3B] transition-colors">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-1.5 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Standalone Price & Full-Width CTA */}
        <div>
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-[#211611] mt-5 mb-4">
            {price}
          </div>

          <button
            type="button"
            onClick={onOrder}
            className="w-full border-2 border-[#211611] text-[#211611] hover:bg-[#211611] hover:text-[#FDFBF7] font-semibold text-sm py-2.5 rounded-xl transition-all duration-200 active:scale-[0.99] flex items-center justify-center gap-2 group/btn cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4 transition-transform duration-200 group-hover/btn:scale-110" />
            <span>Add to Order</span>
          </button>
        </div>
      </div>
    </div>
  );
}
