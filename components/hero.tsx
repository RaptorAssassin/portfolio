'use client';
import DarkVeil from './DarkVeil';
import { motion } from 'framer-motion';
import Icon from './icon';
import RotatingText from './RotatingText';
import { ScrollReveal } from './scroll-reveal';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const skills: string[] = [
    'Full-Stack Web Developer',
    'DSA grinder',
    'passionate learner',
  ];

  return (
    <section id="home" className="relative h-dvh w-full overflow-hidden">
      {/* animated background */}
      <div className="pointer-events-none relative h-full w-full">
        <DarkVeil
          hueShiftFrom={-60}
          hueShiftTo={-20}
          hueShiftDuration={6}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.7}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      {/* content */}
      <div className="w-80vw pointer-events-auto absolute inset-0 z-10 m-auto flex flex-col items-center justify-center gap-8 select-text">
        {/* greeting */}
        <div className="align-center flex flex-col justify-center gap-2">
          <div className="mx-auto">
            <ScrollReveal>
              <span className="text-2xl font-semibold">Hi, I'm</span>
            </ScrollReveal>
          </div>
          <div className="mx-auto">
            <ScrollReveal>
              <span className="text-8xl font-bold">Karl.</span>
            </ScrollReveal>
          </div>
        </div>
        {/* skills text */}
        <div className="">
          <ScrollReveal delay={0.1}>
            <motion.div
              layout
              transition={{
                layout: { type: 'spring', stiffness: 170, damping: 28 },
              }}
              className="inline-flex h-fit w-fit rounded-md bg-(--accent)/80 p-2 px-3 text-2xl font-bold"
            >
              <RotatingText
                texts={skills}
                rotationInterval={4000}
                splitBy="characters"
                staggerDuration={0.015}
                staggerFrom="first"
                transition={{ type: 'spring', damping: 25, stiffness: 170 }}
                initial={{ y: '85%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-85%', opacity: 0 }}
                mainClassName="inline-flex overflow-hidden align-middle leading-relaxed m-auto"
              />
            </motion.div>
          </ScrollReveal>
        </div>
        {/* tech stack icons */}
        <div className="flex flex-row gap-2">
          <ScrollReveal delay={0.2} strength={25}>
            <Icon src="/icons/nextjs.svg" tooltip="Next.js" />
          </ScrollReveal>
          <ScrollReveal delay={0.4} strength={25}>
            <Icon src="/icons/react.svg" tooltip="React" />
          </ScrollReveal>
          <ScrollReveal delay={0.6} strength={25}>
            <Icon src="/icons/nodejs.svg" tooltip="Node.js" />
          </ScrollReveal>
          <ScrollReveal delay={0.8} strength={25}>
            <Icon src="/icons/typescript.svg" tooltip="Typescript" />
          </ScrollReveal>
          <ScrollReveal delay={1.0} strength={25}>
            <Icon src="/icons/supabase.svg" tooltip="Supabase" />
          </ScrollReveal>
        </div>
      </div>
      {/* scroll indicator */}
      <div className="pointer-events-auto absolute bottom-5 left-1/2 z-10 -translate-x-1/2">
        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <button
            onClick={() =>
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            <ArrowDown />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
