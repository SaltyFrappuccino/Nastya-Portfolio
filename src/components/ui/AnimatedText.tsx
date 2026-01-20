import { motion, useInView } from 'framer-motion';
import { useRef, ElementType } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  duration?: number;
  once?: boolean;
}

export default function AnimatedText({
  children,
  className = '',
  as: Component = 'div',
  delay = 0,
  duration = 0.8,
  once = true,
}: AnimatedTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '-10% 0px -10% 0px' });

  // Определяем, является ли элемент inline
  const isInline = ['span', 'a', 'em', 'strong', 'small', 'sub', 'sup'].includes(
    typeof Component === 'string' ? Component : 'div'
  );

  const variants = {
    hidden: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      opacity: 0,
      y: 20,
    },
    visible: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier для плавной анимации
      },
    },
  };

  return (
    <Component ref={ref} className={className}>
      <motion.span
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={variants}
        style={{ display: isInline ? 'inline-block' : 'block' }}
      >
        {children}
      </motion.span>
    </Component>
  );
}
