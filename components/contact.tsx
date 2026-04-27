'use client';

import { useEffect, useRef, useState } from 'react';
import Antigravity from './Antigravity';
import { ScrollReveal } from './scroll-reveal';
import Icon from './icon';

export const Contact = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [isNonTouchDevice, setIsNonTouchDevice] = useState(false);

  useEffect(() => {
    setIsNonTouchDevice(!window.matchMedia('(hover: none)').matches);
  }, []);

  const relayPointerMove = (clientX: number, clientY: number) => {
    const canvas = backgroundRef.current
      ?.firstElementChild as HTMLElement | null;
    if (!canvas) return;

    canvas.dispatchEvent(
      new PointerEvent('pointermove', {
        bubbles: true,
        cancelable: true,
        clientX,
        clientY,
        pointerId: 1,
        pointerType: 'mouse',
        isPrimary: true,
      }),
    );
  };

  const relayPointerLeave = () => {
    const canvas = backgroundRef.current
      ?.firstElementChild as HTMLElement | null;
    if (!canvas) return;

    canvas.dispatchEvent(
      new PointerEvent('pointerleave', {
        bubbles: true,
        cancelable: true,
        pointerId: 1,
        pointerType: 'mouse',
        isPrimary: true,
      }),
    );
  };

  interface SocialLink {
    name: string;
    href: string;
    icon: string;
  }

  const socialLinks: SocialLink[] = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/karl-albrecht-6a1059379/',
      icon: '/icons/linkedin.svg',
    },
    { name: 'X', href: 'https://x.com/raptor_dev_', icon: '/icons/x.svg' },
    {
      name: 'Email',
      href: 'mailto:karl.b.albrecht@gmail.com',
      icon: '/icons/email.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/RaptorAssassin',
      icon: '/icons/github.svg',
    },
  ];

  return (
    <section id="contact" className="relative h-dvh w-full overflow-hidden">
      {/* background */}
      {isNonTouchDevice && (
        <div
          ref={backgroundRef}
          className="pointer-events-none absolute inset-0 z-0 m-auto h-full w-full"
        >
          <Antigravity
            count={300}
            magnetRadius={8}
            ringRadius={8}
            waveSpeed={1}
            waveAmplitude={1}
            particleSize={2}
            lerpSpeed={0.2}
            color="#7701ad"
            autoAnimate={false}
            particleVariance={0.4}
            rotationSpeed={0}
            depthFactor={1}
            pulseSpeed={0.5}
            particleShape="sphere"
            fieldStrength={10}
          />
        </div>
      )}
      {/* content */}
      <div
        className="relative z-10 flex min-h-dvh w-full items-center justify-center px-6 py-24 md:px-10 md:py-32"
        onPointerMove={(event) =>
          relayPointerMove(event.clientX, event.clientY)
        }
        onPointerLeave={relayPointerLeave}
      >
        <div className="flex flex-col items-center gap-4">
          {/* title */}
          <div className="">
            <ScrollReveal>
              <h1 className="text-center text-5xl font-bold text-white md:text-7xl">
                Contact
              </h1>
            </ScrollReveal>
          </div>
          {/* subtitle */}
          <div className="mt-6">
            <ScrollReveal delay={0.1}>
              <span className="block max-w-2xl text-center text-lg leading-relaxed text-white md:text-xl">
                Thank you for taking the time to explore my portfolio! If you
                have any questions or just want to get in touch, don't hesitate
                to reach out to me.
              </span>
            </ScrollReveal>
          </div>
          {/* social links */}
          <div className="flex max-w-2xl flex-row items-center justify-center gap-6 mt-4">
            {socialLinks.map((link, index) => (
              <ScrollReveal key={index} delay={0.2 + index * 0.1}>
                <Icon
                  href={link.href}
                  src={link.icon}
                  alt={link.name}
                  tooltip={link.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
