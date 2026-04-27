'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Fallback wrapper when '@studio-freight/react-lenis' is not available.
// This avoids a build-time error if the package isn't installed.
const ReactLenis: React.FC<{
  root?: any;
  options?: any;
  children?: React.ReactNode;
}> = ({ children }) => <>{children}</>;

gsap.registerPlugin(ScrollTrigger);

export default function ScrollSnapping({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const sections = gsap.utils.toArray('section');

    ScrollTrigger.create({
      snap: {
        snapTo: 1 / (sections.length - 1),
        duration: { min: 0.2, max: 0.8 },
        delay: 0.1,
        ease: 'power2.inOut',
      },
    });
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.2 }}>
      <main>{children}</main>
    </ReactLenis>
  );
}
