'use client';
import { useRef } from 'react';
import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { NavBar } from '@/components/nav-bar';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { LearningJourney } from '@/components/learning-journey';

export default function Home() {
  const scrollContainerRef = useRef<HTMLElement | null>(null);

  return (
    <main ref={scrollContainerRef} className="h-full w-full">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <LearningJourney scrollContainerRef={scrollContainerRef} />
      <Contact />
    </main>
  );
}
