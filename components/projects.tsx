import AnoAI from './animated-shader-background';

export const Projects = () => {
  return (
    <section id="projects" className="relative h-dvh w-full">
      {/* background */}
      <div className="absolute inset-0 h-full w-full">
        <AnoAI animationSpeed={0.5} />
      </div>
    </section>
  );
};
