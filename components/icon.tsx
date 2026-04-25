'use client';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip';
import { motion } from 'framer-motion';

interface IconProps {
  src: string;
  alt?: string;
  tooltip?: string;
  size?: number;
  hoverScale?: number;
  iconClassName?: string;
  tooltipClassName?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export default function Icon({
  src,
  alt = 'Icon',
  tooltip,
  size = 48,
  hoverScale = 1.08,
  iconClassName,
  tooltipClassName,
  side = 'top',
}: IconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={[
            'relative isolate inline-block shrink-0 overflow-hidden rounded-md',
            iconClassName,
          ]
            .filter(Boolean)
            .join(' ')}
          style={{ width: size, height: size }}
        >
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[inherit]"
            initial={{ scale: 1 }}
            whileHover={{ scale: hoverScale }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes={`${size}px`}
              className="object-contain p-0.5"
            />
          </motion.div>
        </span>
      </TooltipTrigger>
      {tooltip ? (
        <TooltipContent side={side} className={tooltipClassName}>
          <p>{tooltip}</p>
        </TooltipContent>
      ) : null}
    </Tooltip>
  );
}
