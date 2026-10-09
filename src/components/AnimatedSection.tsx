import React, { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface AnimatedSectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

/**
 * Viewport reveal animation with graceful reduced-motion fallbacks.
 */
export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  id,
  className = '',
  delay = 0
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : {
              opacity: 0,
              y: 44,
              scale: 0.985
            }
      }
      whileInView={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              scale: 1
            }
      }
      viewport={{ once: true, amount: 0.14 }}
      transition={{
        duration: 0.85,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      style={{
        willChange: 'transform, opacity'
      }}
      className={className}
    >
      {children}
    </motion.section>
  );
};
