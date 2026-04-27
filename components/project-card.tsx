import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  name: string;
  description: string;
  image: string;
  techstack: string[];
  demoLink?: string;
  repoLink?: string;
}

export const ProjectCard = ({
  name,
  description,
  image,
  techstack,
  demoLink,
  repoLink,
}: ProjectCardProps) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm transition sm:p-5 md:p-6">
      {/* Image */}
      <div
        className="relative mb-4 w-full overflow-hidden rounded-md"
        style={{ aspectRatio: '16 / 9' }}
      >
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
          {name}
        </h3>
        <p className="line-clamp-2 text-sm text-white/70 sm:line-clamp-3 md:text-base">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techstack.map((tech) => (
            <span
              key={tech}
              className="from-accent rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white sm:text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-3 pt-4">
          {demoLink && (
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/60 hover:bg-accent/70 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white transition"
            >
              <ExternalLink size={16} />
              Demo
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent/60 hover:bg-accent/70 inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-white transition"
            >
              <Github size={16} />
              Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
