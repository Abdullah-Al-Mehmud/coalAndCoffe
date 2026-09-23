'use client';

import type { LucideIcon } from 'lucide-react';
import type { MouseEventHandler, ReactNode } from 'react';

/* ── Corner diamond ornaments — matches the HeroSection pattern ── */
export function Diamonds({
  className = '',
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const gold = dark ? '#C48D3F' : '#B07A3B';
  return (
    <div aria-hidden className={`absolute hidden md:block w-7 h-7 ${className}`}>
      <span
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45"
        style={{ background: gold }}
      />
      <span
        className="absolute bottom-0 left-0 w-2.5 h-2.5 rotate-45 border"
        style={{ borderColor: gold }}
      />
      <span
        className="absolute bottom-0 right-0 w-2.5 h-2.5 rotate-45 border"
        style={{ borderColor: `${gold}80` }}
      />
    </div>
  );
}

/* ── Italic gold-gradient accent run — the hero's headline treatment ── */
export function Accent({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return dark ? (
    <em className="italic text-[#C48D3F]">{children}</em>
  ) : (
    <em className="italic bg-gradient-to-r from-[#B07A3B] via-[#C48D3F] to-[#8C5824] bg-clip-text text-transparent">
      {children}
    </em>
  );
}

/* ── Feature highlight chip — exact match with HeroSection ── */
export function FeatureChip({
  icon: Icon,
  title,
  sub,
  dark = false,
}: {
  icon: LucideIcon;
  title: string;
  sub: string;
  dark?: boolean;
}) {
  return (
    <li className="flex items-center gap-3">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border shadow-[0_4px_12px_rgba(43,30,22,0.04)] ${
          dark ? 'border-white/10 bg-white/5 shadow-[0_4px_12px_rgba(0,0,0,0.2)]' : 'border-[#2B1E16]/10 bg-white'
        }`}
      >
        <Icon className={`h-5 w-5 ${dark ? 'text-[#C48D3F]' : 'text-[#B07A3B]'}`} />
      </span>
      <span>
        <span className={`block text-sm font-bold ${dark ? 'text-white' : 'text-[#211611]'}`}>
          {title}
        </span>
        <span className={`block text-xs ${dark ? 'text-stone-400' : 'text-stone-500'}`}>
          {sub}
        </span>
      </span>
    </li>
  );
}

/* ── Pill CTA — exact match with the hero's button pair ── */
export function Cta({
  children,
  icon,
  href,
  onClick,
  variant = 'primary',
  dark = false,
  className = '',
}: {
  children: ReactNode;
  icon?: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary';
  dark?: boolean;
  className?: string;
}) {
  const base =
    'flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-3.5 text-base transition-all sm:w-auto';
  const tones =
    variant === 'primary'
      ? dark
        ? 'bg-[#C48D3F] text-[#18110D] hover:bg-[#b07b32] font-bold shadow-[0_10px_25px_rgba(196,141,63,0.25)]'
        : 'bg-[#241812] text-[#FDFBF7] hover:bg-[#3D291F] font-bold shadow-[0_10px_25px_rgba(36,24,18,0.15)]'
      : dark
        ? 'border border-white/15 bg-white/5 text-white hover:border-[#C48D3F] hover:bg-white/10 font-medium'
        : 'border border-[#2B1E16]/15 bg-white text-[#2B1E16] hover:bg-stone-50 font-medium shadow-sm';
  const cls = `${base} ${tones} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
        {icon}
      </a>
    );
  }
  return (
    <button onClick={onClick} type="button" className={`${cls} cursor-pointer`}>
      {children}
      {icon}
    </button>
  );
}