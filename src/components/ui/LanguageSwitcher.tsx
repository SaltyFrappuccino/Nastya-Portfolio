import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <motion.button
        onClick={() => changeLanguage('ru')}
        className={`font-suisse text-sm transition-colors hoverable ${
          i18n.language === 'ru' 
            ? 'text-accent-red font-medium' 
            : 'text-gray-400 hover:text-black'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        RU
      </motion.button>
      <span className="text-gray-300">|</span>
      <motion.button
        onClick={() => changeLanguage('en')}
        className={`font-suisse text-sm transition-colors hoverable ${
          i18n.language === 'en' 
            ? 'text-accent-red font-medium' 
            : 'text-gray-400 hover:text-black'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        EN
      </motion.button>
    </div>
  );
}
