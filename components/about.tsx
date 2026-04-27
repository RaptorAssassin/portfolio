'use client';
import { useEffect, useRef, useState } from 'react';
import Particles from './Particles';
import Stack from './Stack';
import { HobbyCard } from './hobby-card';
import { ScrollReveal } from './scroll-reveal';
import { ArrowRight } from 'lucide-react';

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }

  return shuffled;
};

const initialHobbies = [
  { name: 'Coding', src: '/images/coding.jpg' },
  { name: 'Gaming', src: '/images/gaming.jpg' },
  { name: 'Cooking', src: '/images/cooking.jpg' },
  { name: 'Playing the Trumpet', src: '/images/trumpet.jpg' },
  //{ name: 'Dancing', src: '/images/dancing.jpg' },
  { name: 'Working out', src: '/images/workout.jpg' },
  { name: 'Traveling', src: '/images/traveling.jpg' },
  { name: 'Meeting friends', src: '/images/friends.jpg' },
];

export const About = () => {
  const particlesLayerRef = useRef<HTMLDivElement>(null);

  const relayPointerMove = (clientX: number, clientY: number) => {
    const particleContainer = particlesLayerRef.current
      ?.firstElementChild as HTMLElement | null;
    if (!particleContainer) return;

    particleContainer.dispatchEvent(
      new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX,
        clientY,
      }),
    );
  };

  const relayPointerLeave = () => {
    const particleContainer = particlesLayerRef.current
      ?.firstElementChild as HTMLElement | null;
    if (!particleContainer) return;

    particleContainer.dispatchEvent(
      new MouseEvent('mouseleave', {
        bubbles: true,
        cancelable: true,
        view: window,
      }),
    );
  };

  const [hobbies, setHobbies] = useState(initialHobbies);

  useEffect(() => {
    setHobbies(shuffleArray(initialHobbies));
  }, []);

  return (
    <section id="about" className="relative h-dvh w-full overflow-hidden">
      {/* background */}
      <div
        ref={particlesLayerRef}
        className="absolute inset-0 z-0 h-full w-full"
      >
        <Particles
          particleCount={500}
          particleSpread={20}
          speed={0.02}
          particleColors={['#ffffff']}
          moveParticlesOnHover
          particleHoverFactor={0.2}
          alphaParticles={false}
          particleBaseSize={150}
          sizeRandomness={1}
          cameraDistance={10}
          disableRotation={false}
        />
      </div>
      {/* content */}
      <div
        className="absolute inset-0 z-10 m-auto flex h-full w-full items-center justify-center px-6 md:px-10"
        onPointerMove={(event) =>
          relayPointerMove(event.clientX, event.clientY)
        }
        onPointerLeave={relayPointerLeave}
      >
        <div className="flex w-full max-w-6xl flex-col items-center gap-8">
          {/* title */}
          <ScrollReveal>
            <span className="text-5xl font-bold md:text-7xl">About me</span>
          </ScrollReveal>
          {/* left: about me text, right: hobby gallery */}
          <div className="mt-6 flex w-full flex-wrap items-start justify-center gap-8 lg:justify-between">
            {/* about me text */}
            <div className="w-full max-w-2xl min-w-70 flex-1">
              <ScrollReveal delay={0.2}>
                <p className="text-base leading-relaxed font-semibold md:text-lg">
                  Welcome to my portfolio! I'm{' '}
                  <span className="font-extrabold">Karl</span>, 15 and currently
                  based in Karlsruhe, Germany. I'm a software developer
                  currently focusing on full-stack web development with{' '}
                  <span className="font-extrabold">React</span> and{' '}
                  <span className="font-extrabold">Nextjs</span>. I also enjoy
                  learning{' '}
                  <span className="font-extrabold">
                    data structures and algorithms(DSA)
                  </span>
                  .
                </p>
              </ScrollReveal>
            </div>
            {/* hobby gallery */}
            <div className="w-full max-w-130 min-w-70 flex-1 self-start">
              <ScrollReveal delay={0.4}>
                <div className="flex flex-col items-center gap-4">
                  <div className="text-4xl font-extrabold">My Hobbies:</div>
                  <div className="-mt-4 aspect-square w-full max-w-130">
                    <Stack
                      autoplay={true}
                      autoplayDelay={5000}
                      pauseOnHover={true}
                      cards={hobbies.map((hobby) => (
                        <div key={hobby.name} className="pointer-events-none">
                          <HobbyCard name={hobby.name} src={hobby.src} />
                        </div>
                      ))}
                    ></Stack>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
