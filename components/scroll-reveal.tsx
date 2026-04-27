'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  strength?: number;
  duration?: number;
  delay?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  strength = 50,
  duration = 0.5,
  delay = 0,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: strength, filter: 'blur(5px)' },
        visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration, delay, ease: 'easeOut' }}
      style={{ willChange: 'transform, opacity, filter' }}
    >
      {children}
    </motion.div>
  );
};
