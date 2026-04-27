import AnoAI from './animated-shader-background';
import { ScrollReveal } from './scroll-reveal';
import { ProjectCard } from './project-card';

interface Project {
  name: string;
  description: string;
  image: string;
  techstack: string[];
  demoLink?: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    name: 'Portfolio Website',
    description:
      'A modern portfolio website built with Next.js, React and Tailwind CSS.',
    image: '/images/projects/portfolio.jpg',
    techstack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Snippet Vault',
    description:
      'A code snippet manager that allows developers to store and organize their code snippets efficiently.',
    image: '/images/projects/snippet-vault.jpg',
    techstack: [
      'Next.js',
      'React',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Supabase',
    ],
    demoLink: 'https://snippet-vault-app.vercel.app/',
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-dvh w-full overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 h-full w-full">
        <AnoAI animationSpeed={0.5} />
      </div>
      {/* content */}
      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-6 py-24 md:px-10 md:py-32">
        <div className="flex w-full flex-col items-center gap-4">
          {/* title */}
          <ScrollReveal>
            <h1 className="text-5xl font-bold text-white md:text-7xl">
              My Projects
            </h1>
          </ScrollReveal>
          {/* project cards */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:auto-rows-fr md:grid-cols-2 md:gap-8 lg:max-w-5xl">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 0.1 + 0.2}>
                <ProjectCard
                  name={project.name}
                  description={project.description}
                  image={project.image}
                  techstack={project.techstack}
                  demoLink={project.demoLink}
                  repoLink={project.repoLink}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
