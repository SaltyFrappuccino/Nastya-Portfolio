import { motion } from 'framer-motion';
import AnimatedText from '../ui/AnimatedText';

interface SpecialSectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SpecialSection({ title, description, children }: SpecialSectionProps) {
  return (
    <section className="py-12 md:py-20 bg-background-light">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <AnimatedText as="h2" className="font-suisse text-2xl md:text-4xl text-black" delay={0.1}>
            {title}
          </AnimatedText>
          <AnimatedText as="p" className="font-suisse text-base md:text-lg text-text-secondary" delay={0.2}>
            {description}
          </AnimatedText>
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

