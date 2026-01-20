import { motion } from 'framer-motion';

const promoImage = new URL('../../assets/sorted/landing/Happy New Year 2026, последний блок.png', import.meta.url).href;

export default function BottomPromoSection() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={promoImage}
        alt="Happy New Year 2026"
        className="w-full h-auto"
      />
    </motion.section>
  );
}
