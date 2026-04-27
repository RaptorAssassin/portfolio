'use client';
import { useEffect } from 'react';
import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { NavBar } from '@/components/nav-bar';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { LearningJourney } from '@/components/learning-journey';

export default function Home() {

  return (
    <main className="h-full w-full">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <LearningJourney />
      <Contact />
    </main>
  );
}
