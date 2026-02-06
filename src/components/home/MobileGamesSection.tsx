import { motion } from 'framer-motion';

const mobileGamesImage = new URL('../../assets/sorted/landing/Мобильные  игры и концепты.png', import.meta.url).href;

export default function MobileGamesSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.h2
          className="font-suisse text-2xl md:text-3xl lg:text-4xl text-black mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Мобильные игры<br />и концепты
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={mobileGamesImage}
            alt="Мобильные игры и концепты"
            className="w-full h-auto mb-6"
          />
        </motion.div>
        <motion.p
          className="font-suisse text-sm text-black/70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Скоро
        </motion.p>
      </div>
    </section>
  );
}
