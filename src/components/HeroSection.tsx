"use client";

/* eslint-disable @next/next/no-img-element */

import type { MotionValue } from "framer-motion";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowLeftRight,
  Award,
  Clock,
  ShoppingBag,
  Star,
  Utensils,
} from "lucide-react";
import type {
  CSSProperties,
  KeyboardEvent,
  PointerEvent as ReactPointerEvent,
} from "react";
import { useCallback, useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────────
   ARC CAROUSEL
   • Every photo sits ON a circle and is rotated to follow it.
   • `pos` is one number: "which photo is in the centre right now".
     Dragging / swiping / trackpad-scrolling just changes `pos`,
     and every card recalculates its place on the circle from it.
   • Cards that leave one side wrap around and enter from the other
     side, so it loops forever. (Needs 8+ photos so the wrap-around
     always happens off-screen.)
   ──────────────────────────────────────────────────────────────── */

const img = (id: string) =>
  `https://images.unsplash.com/${id}?q=80&w=900&auto=format&fit=crop`;

const PHOTOS = [
  { src: img("photo-1544025162-d76694265947"), alt: "Coal-fired grilled ribs" },
  {
    src: img("photo-1495474472287-4d71bcdd2085"),
    alt: "Freshly brewed latte art",
  },
  {
    src: img("photo-1517248135467-4c7edcad34c4"),
    alt: "Rooftop dining area with fairy lights",
  },
  { src: img("photo-1414235077428-338989a2e8c0"), alt: "Gourmet plated dish" },
  { src: img("photo-1555396273-367ea4eb4db5"), alt: "Cozy evening seating" },
  { src: img("photo-1504674900247-0877df9cc836"), alt: "Fresh grilled plate" },
  { src: img("photo-1565299624946-b28f40a0ae38"), alt: "Wood-fired pizza" },
  {
    src: img("photo-1521017432531-fbd92d768814"),
    alt: "Cafe corner with warm lights",
  },
  {
    src: img("photo-1514933651103-005eec06c04b"),
    alt: "Candle-lit dining tables",
  },
];

const N = PHOTOS.length;
const R = 1.15; // arc radius, in units of arc width
const STEP = 12; // degrees between neighbouring cards
const STEP_RAD = (STEP * Math.PI) / 180;
const CARD_H = 24; // card height, in % of arc width
const START_INDEX = 2; // photo that starts in the centre

const sectionVars = { "--w": "max(1100px, 100vw)" } as CSSProperties;

const wrapRel = (v: number) => v - N * Math.round(v / N);

/* ── One card ───────────────────────────────────────────────── */
function ArcCard({
  photo,
  index,
  pos,
}: {
  photo: { src: string; alt: string };
  index: number;
  pos: MotionValue<number>;
}) {
  const rel = useTransform(pos, (v) => wrapRel(index - v));

  const left = useTransform(
    rel,
    (p) => `${(50 + R * Math.sin(p * STEP_RAD) * 100).toFixed(3)}%`,
  );
  const top = useTransform(
    rel,
    (p) => `calc(var(--w) * ${(R * (1 - Math.cos(p * STEP_RAD))).toFixed(4)})`,
  );
  const rotate = useTransform(rel, (p) => p * STEP);
  const zIndex = useTransform(rel, (p) => 100 - Math.round(Math.abs(p) * 10));
  const opacity = useTransform(rel, (p) => {
    const a = Math.abs(p);
    return a <= 2.7 ? 1 : Math.max(0, 1 - (a - 2.7) / 0.5);
  });
  const w = useTransform(rel, (p) => 20 + 2 * Math.min(Math.abs(p), 1));
  const width = useTransform(w, (v) => `${v}%`);
  const aspectRatio = useTransform(w, (v) => `${v} / ${CARD_H}`);

  const intro = Math.abs(wrapRel(index - START_INDEX));

  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        width,
        aspectRatio,
        zIndex,
        opacity,
        rotate,
        x: "-50%",
      }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.15 + intro * 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-full w-full overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-[#2B1E16]/10 shadow-[0_20px_45px_rgba(43,30,22,0.08)] sm:rounded-[2.25rem]">
        <img
          src={photo.src}
          alt={photo.alt}
          draggable={false}
          decoding="async"
          className="pointer-events-none h-full w-full select-none object-cover"
        />
      </motion.div>
    </motion.div>
  );
}

/* ── The draggable arc ──────────────────────────────────────── */
function ArcGallery() {
  const pos = useMotionValue(START_INDEX);
  const stageRef = useRef<HTMLDivElement>(null);
  const spring = useRef<ReturnType<typeof animate> | null>(null);
  const wheelTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );
  const drag = useRef({
    active: false,
    startX: 0,
    startPos: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
  });

  const stepPx = useCallback(
    () => (stageRef.current?.offsetWidth ?? 1200) * R * Math.sin(STEP_RAD),
    [],
  );

  const snapTo = useCallback(
    (target: number, velocity = 0) => {
      spring.current?.stop();
      spring.current = animate(pos, target, {
        type: "spring",
        stiffness: 140,
        damping: 22,
        mass: 0.9,
        velocity,
      });
    },
    [pos],
  );

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    spring.current?.stop();
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = {
      active: true,
      startX: e.clientX,
      startPos: pos.get(),
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
    };
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.active) return;
    pos.set(d.startPos - (e.clientX - d.startX) / stepPx());

    const now = performance.now();
    const dt = now - d.lastT;
    if (dt > 0) {
      d.velocity = d.velocity * 0.6 + ((e.clientX - d.lastX) / dt) * 0.4;
      d.lastX = e.clientX;
      d.lastT = now;
    }
  };

  const endDrag = () => {
    const d = drag.current;
    if (!d.active) return;
    d.active = false;

    const stale = performance.now() - d.lastT > 100;
    const slotsPerSec = stale ? 0 : (-d.velocity * 1000) / stepPx();
    const fling = Math.max(-3, Math.min(3, slotsPerSec * 0.25));
    snapTo(Math.round(pos.get() + fling), slotsPerSec);
  };

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      spring.current?.stop();
      pos.set(pos.get() + e.deltaX / stepPx());
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => snapTo(Math.round(pos.get())), 120);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", onWheel);
      clearTimeout(wheelTimer.current);
    };
  }, [pos, snapTo, stepPx]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") snapTo(Math.round(pos.get()) + 1);
    if (e.key === "ArrowLeft") snapTo(Math.round(pos.get()) - 1);
  };

  return (
    <div
      ref={stageRef}
      role="region"
      aria-roledescription="carousel"
      aria-label="Cafe photo gallery. Use the left and right arrow keys, or drag, to browse."
      tabIndex={0}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={onKeyDown}
      className="relative left-1/2 -translate-x-1/2 cursor-grab touch-pan-y select-none outline-none focus-visible:outline-[#B07A3B]/40 active:cursor-grabbing"
      style={{ width: "var(--w)", height: "calc(var(--w) * 0.27)" }}>
      {PHOTOS.map((photo, i) => (
        <ArcCard key={photo.src} photo={photo} index={i} pos={pos} />
      ))}
    </div>
  );
}

function Diamonds({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute hidden md:block w-7 h-7 ${className}`}>
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rotate-45 bg-[#B07A3B]" />
      <span className="absolute bottom-0 left-0 w-2.5 h-2.5 rotate-45 border border-[#B07A3B]" />
      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rotate-45 border border-[#B07A3B]/50" />
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section
      id="home"
      style={sectionVars}
      className="relative overflow-hidden bg-[#FDFBF7] pt-24 sm:pt-28">
      {/* Corner ornaments */}
      <Diamonds className="top-28 left-8 lg:left-12" />
      <Diamonds className="top-28 right-8 lg:right-12" />

      <div className="relative">

        <ArcGallery />

        {/* ── Content ─────────────────────────────────────────── */}
        <div className="relative z-[200] mx-auto flex max-w-3xl flex-col items-center px-4 pt-6 pb-14 text-center sm:px-6">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-5 font-serif text-4xl font-semibold leading-[1.15] tracking-tight text-[#211611] sm:text-5xl md:text-6xl">
            Escape to Uttara&apos;s <br className="hidden sm:inline" />
            <span className="italic text-[#B07A3B] bg-gradient-to-r from-[#B07A3B] via-[#C48D3F] to-[#8C5824] bg-clip-text text-transparent">
              Premier Rooftop Haven.
            </span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-8 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
            Where rustic coal-fired charm meets masterfully brewed coffee,
            gourmet bites, and fairy-lit evening skies.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#location"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#241812] px-8 py-3.5 text-base font-bold text-[#FDFBF7] hover:bg-[#3D291F] transition-all shadow-[0_10px_25px_rgba(36,24,18,0.15)] sm:w-auto">
              <span>Book an Evening</span>
              <Utensils className="h-5 w-5 text-[#C48D3F]" />
            </a>

            <a
              href="https://www.foodpanda.com.bd"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full border border-[#2B1E16]/15 bg-white px-8 py-3.5 text-base font-medium text-[#2B1E16] hover:bg-stone-50 transition-all shadow-sm sm:w-auto">
              <ShoppingBag className="h-5 w-5 text-[#B07A3B]" />
              <span>Order on Foodpanda</span>
            </a>
          </motion.div>

          {/* Feature highlights */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-left">
            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2B1E16]/10 bg-white shadow-[0_4px_12px_rgba(43,30,22,0.04)]">
                <Award className="h-5 w-5 text-[#B07A3B]" />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#211611]">
                  Top 3 Brews
                </span>
                <span className="block text-xs text-stone-500">
                  Coffee in Dhaka
                </span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2B1E16]/10 bg-white shadow-[0_4px_12px_rgba(43,30,22,0.04)]">
                <Star className="h-5 w-5 fill-[#B07A3B] text-[#B07A3B]" />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#211611]">
                  4.4 ★ Google
                </span>
                <span className="block text-xs text-stone-500">
                  1,253 Reviews
                </span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2B1E16]/10 bg-white shadow-[0_4px_12px_rgba(43,30,22,0.04)]">
                <Clock className="h-5 w-5 text-[#B07A3B]" />
              </span>
              <span>
                <span className="block text-sm font-bold text-[#211611]">
                  Open Till 12 AM
                </span>
                <span className="block text-xs text-stone-500">
                  Fairy-Lit Nights
                </span>
              </span>
            </li>
          </motion.ul>

          {/* Interaction hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-8 flex items-center gap-2 text-xs text-stone-500">
            <ArrowLeftRight className="h-3.5 w-3.5 text-[#B07A3B]" />
            Drag the photos to explore
          </motion.p>
        </div>
      </div>
    </section>
  );
}

