'use client';
import { useRef } from 'react';
import Particles from './Particles';
import Stack from './Stack';
import { HobbyCard } from './hobby-card';
import { ScrollReveal } from './scroll-reveal';

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

  const hobbies = [
    { name: 'Coding', src: '/images/coding.jpg' },
    { name: 'Gaming', src: '/images/gaming.jpg' },
    { name: 'Cooking', src: '/images/cooking.jpg' },
    { name: 'Trumpet', src: '/images/trumpet.jpg' },
    { name: 'Dancing', src: '/images/dancing.jpg' },
    { name: 'Working out', src: '/images/workout.jpg' },
  ];

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
                  Hello! I'm Karl Albrecht, 15 and currently based in Karlsruhe,
                  Germany. Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Fuga suscipit cum dolores at excepturi quod ea libero,
                  reiciendis a repellat tempore minima repudiandae ab ex
                  corrupti vitae quibusdam, vel eligendi. Lorem ipsum dolor sit
                  amet consectetur, adipisicing elit. Autem illo asperiores,
                  consectetur quae at optio perferendis architecto. Fugit nam
                  repellat, consequuntur odio iusto ex aperiam tempora veritatis
                  ducimus, minima nostrum. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Fugiat ipsa nihil suscipit
                  harum. Iure illo amet, mollitia sint enim totam, asperiores
                  necessitatibus blanditiis sed voluptate nobis eum, cumque
                  tempore beatae.
                </p>
              </ScrollReveal>
            </div>
            {/* hobby gallery */}
            <div className="w-full max-w-130 min-w-70 flex-1 self-start">
              <ScrollReveal delay={0.4}>
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
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
