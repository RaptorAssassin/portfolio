'use client';
import { useEffect } from 'react';
import { About } from '@/components/about';
import { Hero } from '@/components/hero';
import { NavBar } from '@/components/nav-bar';
import { Projects } from '@/components/projects';

export default function Home() {
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle initial load with hash
    handleHashNavigation();

    // Handle hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    return () => window.removeEventListener('hashchange', handleHashNavigation);
  }, []);

  return (
    <main className="h-full w-full">
      <NavBar />
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
