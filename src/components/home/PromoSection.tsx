import { motion } from 'framer-motion';

interface PromoSectionProps {
  imageUrl: string;
  alt: string;
  className?: string;
}

export default function PromoSection({ imageUrl, alt, className = '' }: PromoSectionProps) {
  return (
    <motion.section
      className={`w-full ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-auto"
      />
    </motion.section>
  );
}
