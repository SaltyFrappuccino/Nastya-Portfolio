import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedText from '../ui/AnimatedText';

const categories = [
  { id: 'fintech', label: 'Дизайн в Fintech', href: '/#fintech' },
  { id: 'mobile', label: 'Мобильные приложения', href: '/#mobile' },
  { id: 'web', label: 'Веб сайты и лендинги', href: '/#web' },
  { id: 'digital', label: 'Digital материалы - Посты - Айдентика', href: '/#identity' },
  { id: 'games', label: 'Мобильные игры и концепты', href: '/#games' },
  { id: 'ai', label: 'Работа с нейросетями', href: '/#ai' },
];

export default function CategoryNav() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={category.href}
                className="group flex items-center justify-between py-4 border-b border-gray-200 hoverable"
              >
                <AnimatedText as="span" className="font-suisse text-xl md:text-3xl text-black group-hover:text-accent-blue transition-colors" delay={index * 0.1}>
                  {category.label}
                </AnimatedText>
                <motion.div
                  className="w-16 h-16 md:w-24 md:h-24 overflow-hidden bg-gray-100"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Thumbnail placeholder */}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

