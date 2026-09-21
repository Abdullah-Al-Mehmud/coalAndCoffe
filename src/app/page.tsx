'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { BentoGallery } from '@/components/BentoGallery';
import { MenuSection } from '@/components/MenuSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { EventsSection } from '@/components/EventsSection';
import { FooterSection } from '@/components/FooterSection';
import { EventModal } from '@/components/EventModal';

export default function Home() {
  const [eventModalOpen, setEventModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-100 selection:bg-[#d4af37] selection:text-black font-sans relative">
      {/* Navbar */}
      <Navbar onOpenEventModal={() => setEventModalOpen(true)} />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Story (Beans to Bricks) */}
        <StorySection />

        {/* Section 3: Bento Gallery (The Vibe) */}
        <BentoGallery />

        {/* Section 4: Curated Menu */}
        <MenuSection />

        {/* Section 5: Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* Section 6: Private Events */}
        <EventsSection onOpenEventModal={() => setEventModalOpen(true)} />
      </main>

      {/* Section 7: Footer & Location */}
      <FooterSection />

      {/* Event Booking Modal */}
      <EventModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
    </div>
  );
}
