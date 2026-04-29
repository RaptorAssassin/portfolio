import type { RefObject } from 'react';
import { ScrollTimeline, TimelineEvent } from './lightswind/scroll-timeline';
import { learningJourneyEvents } from '@/data/learning-journey';

export const LearningJourney = ({
  scrollContainerRef,
}: {
  scrollContainerRef: RefObject<HTMLElement | null>;
}) => {
  return (
    <section id="learning-journey" className="min-h-dvh w-full overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 h-full w-full"></div>
      {/* content */}
      <div className="relative z-10 flex min-h-dvh w-full items-center justify-center px-6 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-center justify-center gap-4">
          <ScrollTimeline
            events={learningJourneyEvents}
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
