import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import AnimatedText from '../ui/AnimatedText';

const contacts = [
  { label: 'lorentini10@gmail.com', href: 'mailto:lorentini10@gmail.com' },
  { label: 'Telegram', href: 'https://t.me/creator_aa' },
  { label: 'Vkontakte', href: 'https://vk.com/' },
  { label: 'Behance', href: 'https://behance.net/' },
];

const publications = [
  { label: 'Telegram', href: 'https://t.me/designanet' },
  { label: 'VC.RU', href: 'https://vc.ru/' },
  { label: 'Хабр', href: 'https://habr.com/ru/users/AnaDubrovina/articles/' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function HeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="pt-20 md:pt-28 pb-6 md:pb-8 px-4 md:px-8 bg-white">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Section - Title and Contacts */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 md:gap-8">
          {/* Left - Title */}
          <motion.div variants={itemVariants} className="lg:max-w-xl">
            <h1 className="font-evolventa text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight">
              <span className="relative inline-block px-1.5 md:px-2 py-0.5 md:py-1">
                <span 
                  className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-orange-500"
                  style={{ 
                    clipPath: 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)',
                    zIndex: 0,
                  }}
                />
                <AnimatedText as="span" className="relative z-10 text-white" delay={0.1}>
                  {t('hero.name')}
                </AnimatedText>
              </span>
              <br />
              <AnimatedText as="span" className="text-black" delay={0.2}>
                {t('hero.role')}
              </AnimatedText>
              <br />
              <AnimatedText as="span" className="text-black" delay={0.3}>
                {t('hero.experience')}
              </AnimatedText>
            </h1>
          </motion.div>

          {/* Right - Contacts Grid: stack on very small screens */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12"
          >
            {/* Contacts Column */}
            <div>
              <AnimatedText as="p" className="text-gray-400 text-xs mb-2 font-suisse" delay={0.1}>
                {t('hero.contacts')}
              </AnimatedText>
              <div className="space-y-0.5">
                {contacts.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black/70 hover:text-black transition-colors font-suisse text-xs sm:text-sm hoverable"
                  >
                    <AnimatedText as="span" delay={0.15 + index * 0.05}>
                      {contact.label}
                    </AnimatedText>
                  </a>
                ))}
              </div>
            </div>

            {/* Publications Column */}
            <div>
              <AnimatedText as="p" className="text-gray-400 text-xs mb-2 font-suisse" delay={0.2}>
                {t('hero.publications')}
              </AnimatedText>
              <div className="space-y-0.5">
                {publications.map((pub, index) => (
                  <a
                    key={pub.label}
                    href={pub.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-black/70 hover:text-black transition-colors font-suisse text-xs sm:text-sm hoverable"
                  >
                    <AnimatedText as="span" delay={0.25 + index * 0.05}>
                      {pub.label}
                    </AnimatedText>
                  </a>
                ))}
              </div>
            </div>

            {/* Creator Tag */}
            <div className="hidden lg:block">
              <AnimatedText as="span" className="text-gray-400 text-sm font-suisse" delay={0.3}>
                {t('header.logo')}
              </AnimatedText>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
