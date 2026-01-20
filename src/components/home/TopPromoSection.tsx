import { motion } from 'framer-motion';

const promoImage = new URL('../../assets/sorted/landing/Баннер перед пет проектами.png', import.meta.url).href;

export default function TopPromoSection() {
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
        alt="Promo Banner"
        className="w-full h-auto"
      />
    </motion.section>
  );
}
