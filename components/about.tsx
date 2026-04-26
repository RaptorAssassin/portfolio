'use client';
import { useRef } from 'react';
import Particles from './Particles';
import Stack from './Stack';

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
      <div className="pointer-events-none absolute inset-0 z-10 m-auto flex h-full w-full items-center justify-center px-6 md:px-10">
        <div className="flex w-full max-w-6xl flex-col items-center gap-8">
          {/* title */}
          <span className="text-5xl font-bold md:text-7xl">About me</span>
          {/* left: about me text, right: hobby gallery */}
          <div className="mt-6 flex w-full flex-wrap items-start justify-center gap-8 lg:justify-between">
            {/* about me text */}
            <div className="w-full max-w-2xl min-w-70 flex-1">
              <p className="text-base leading-relaxed md:text-lg">
                Hello! I'm Karl Albrecht, 15 and currently based in Karlsruhe,
                Germany. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Fuga suscipit cum dolores at excepturi quod ea libero,
                reiciendis a repellat tempore minima repudiandae ab ex corrupti
                vitae quibusdam, vel eligendi. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Autem illo asperiores,
                consectetur quae at optio perferendis architecto. Fugit nam
                repellat, consequuntur odio iusto ex aperiam tempora veritatis
                ducimus, minima nostrum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Fugiat ipsa nihil suscipit harum. Iure illo
                amet, mollitia sint enim totam, asperiores necessitatibus
                blanditiis sed voluptate nobis eum, cumque tempore beatae.
              </p>
            </div>
            {/* hobby gallery */}
            <div
              className="pointer-events-auto w-full max-w-130 min-w-70 flex-1"
              onPointerMove={(event) =>
                relayPointerMove(event.clientX, event.clientY)
              }
              onPointerLeave={relayPointerLeave}
            >
              <div className="aspect-square w-full max-w-130">
                <Stack></Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
