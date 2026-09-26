'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { BentoGallery } from '@/components/BentoGallery';
import { MenuSection } from '@/components/MenuSection';
import { EventsSection } from '@/components/EventsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { LocationSection } from '@/components/LocationSection';
import { FooterSection } from '@/components/FooterSection';
import { EventModal } from '@/components/EventModal';

export default function Home() {
  const [eventModalOpen, setEventModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F1815] selection:bg-[#B07A3B]/20 selection:text-[#2B1E16] font-sans relative">
      {/* Navbar */}
      <Navbar onOpenEventModal={() => setEventModalOpen(true)} />

      {/* Main Sections — all light sections follow the HeroSection pattern */}
      <main>
        {/* Section 1: Hero */}
        <HeroSection />

        {/* Section 2: Story */}
        <StorySection />

        {/* Section 3: Bento Gallery */}
        <BentoGallery />

        {/* Section 4: Curated Menu */}
        <MenuSection />

        {/* Section 5: Private Events - THE ONLY DARK SECTION */}
        <EventsSection onOpenEventModal={() => setEventModalOpen(true)} />

        {/* Section 6: Social Proof & Testimonials */}
        <TestimonialsSection />

        {/* Section 7: Location, Map & Visit Details */}
        <LocationSection />
      </main>

      {/* Section 8: Grounding Footer & Navigation - DARK FINISH */}
      <FooterSection />

      {/* Event Booking Modal */}
      <EventModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
    </div>
  );
}

