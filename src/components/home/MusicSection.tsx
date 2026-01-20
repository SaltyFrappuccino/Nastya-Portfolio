import { motion } from 'framer-motion';

const musicImage = new URL('../../assets/sorted/landing/Моя волна ЯМузыка.png', import.meta.url).href;

export default function MusicSection() {
  return (
    <section className="bg-white flex items-center justify-center py-8">
      <motion.div
        className="inline-block bg-background-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={musicImage}
          alt="Моя волна ЯМузыка"
          className="w-auto h-auto max-w-full object-contain block"
        />
      </motion.div>
    </section>
  );
}

