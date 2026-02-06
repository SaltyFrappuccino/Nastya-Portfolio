import { motion } from 'framer-motion';

const aiWorkImage = new URL('../../assets/sorted/landing/Работа с нейросетями.png', import.meta.url).href;

export default function AIWorkSection() {
  return (
    <motion.section
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={aiWorkImage}
        alt="Работа с нейросетями"
        className="w-full h-auto"
      />
    </motion.section>
  );
}
