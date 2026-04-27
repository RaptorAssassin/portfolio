'use client';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSnapping({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // useLayoutEffect ist besser für Messungen vor dem Painting
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('section') as HTMLElement[];
      
      if (sections.length <= 1) return;

      // Wir erstellen einen "Master" Trigger für das Snapping
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        snap: {
          snapTo: 1 / (sections.length - 1), // Teilt den Scrollweg exakt in Sektionen
          duration: { min: 0.2, max: 0.6 },
          delay: 0.1,
          ease: "power1.inOut"
        }
      });

      // Optional: Animationen pro Sektion triggern
      sections.forEach((section) => {
        gsap.from(section.querySelectorAll(".animate-me"), {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, containerRef);

    return () => ctx.revert(); // Räumt ALLES sauber auf (keine Memory Leaks)
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {children}
    </div>
  );
}