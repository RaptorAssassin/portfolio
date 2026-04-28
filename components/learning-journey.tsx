import type { RefObject } from 'react';
import { ScrollTimeline, TimelineEvent } from './lightswind/scroll-timeline';

export const LearningJourney = ({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLElement | null>;
}) => {
  const events: TimelineEvent[] = [
    {
      year: '2022',
      title: 'Started Learning Programming',
      description:
        'Started my programming journey with Scratch and Python, building small projects and games.',
    },
    {
      year: '2024',
      title: 'Started Web Development',
      description:
        'Got into Web Developmeent with HTML, CSS and JavaScript. Built several personal projects and learned about frontend development.',
    },
    {
      year: '2025 - 2026',
      title: 'Learned the Git and Github workflow',
      description:
        'Learned how to use Git and Github for version control and collaboration.',
    },
    {
      year: '2025',
      title: 'Advanced Web Development with React and Next.js',
      description:
        'Continued my web development journey, transitioning to modern frameworks like React and later Next.js for building more complex and performant web applications. ALso started learning about backend development and databases, expanding my skill set to full-stack development.',
    },
    {
      year: 'February - March 2026',
      title: 'CS50 Course',
      description:
        'Over the course of around two months, I completed the CS50 computer science course offered by Harvard University. This course taught me low-level programming in C as well as complex data structures and algorithms and basic knowledge about Machine Learning and SQL.',
      link: {
        href: 'https://certificates.cs50.io/84872e01-c845-4cf6-af73-d4dadaa734ce.pdf?size=a4',
        label: 'View Certificate',
      },
    },
    {
      year: '2026',
      title: 'Data Structures and Algorithms (DSA)',
      description:
        'Started getting into DSA, learning about various data structures and algorithms to improve my problem-solving skills and prepare for future technical interviews.',
    },
  ];

  return (
    <section id="learning-journey" className="min-h-dvh w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 h-full w-full"></div>
      {/* content */}
      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-center justify-center gap-4">
          <ScrollTimeline
            events={events}
            title="Learning Journey"
            subtitle="Scroll to explore my learning journey"
            progressIndicator
            cardAlignment="alternating"
            revealAnimation="fade"
            cardEffect="shadow"
            darkMode
            scrollContainerRef={scrollContainerRef}
          />
        </div>
      </div>
    </section>
  );
};
