export interface Project {
  name: string;
  description: string;
  image: string;
  techstack: string[];
  demoLink?: string;
  repoLink?: string;
}

export const projects: Project[] = [
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
