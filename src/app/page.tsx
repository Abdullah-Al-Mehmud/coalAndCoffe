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

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero (Light: bg-[#FDFBF7]) */}
        <HeroSection />

        {/* Section 2: Story (Light: bg-[#F8F5F0]) */}
        <StorySection />

        {/* Section 3: Bento Gallery (Light: bg-[#FDFBF7]) */}
        <BentoGallery />

        {/* Section 4: Curated Menu (Light: bg-[#FDFBF7]) */}
        <MenuSection />

        {/* Section 5: Private Events - THE ONLY DARK SECTION (Dark: bg-[#18110D]) */}
        <EventsSection onOpenEventModal={() => setEventModalOpen(true)} />

        {/* Section 6: Social Proof & Testimonials - BACK TO LIGHT (Light: bg-[#F8F5F0]) */}
        <TestimonialsSection />

        {/* Section 7: Location, Map & Visit Details - STILL LIGHT (Light: bg-[#FDFBF7]) */}
        <LocationSection />
      </main>

      {/* Section 8: Grounding Footer & Navigation - DARK FINISH (Dark: bg-[#140D09]) */}
      <FooterSection />

      {/* Event Booking Modal */}
      <EventModal isOpen={eventModalOpen} onClose={() => setEventModalOpen(false)} />
    </div>
  );
}

