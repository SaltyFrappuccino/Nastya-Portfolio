import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Import category preview images using new URL() syntax for Cyrillic filenames
const fintechPreview = new URL('../../assets/sorted/landing/Дизайн в Fintech.png', import.meta.url).href;
const mobilePreview = new URL('../../assets/sorted/landing/Мобильные приложения.png', import.meta.url).href;
const webPreview = new URL('../../assets/sorted/landing/Веб сайты и лендинги.png', import.meta.url).href;
const identityPreview = new URL('../../assets/sorted/landing/Digital материалы - Посты - Айдентика.png', import.meta.url).href;

interface Category {
  id: string;
  titleKey: string;
  previewImage: string;
  href: string;
}

function CategoryItem({ category, index }: { category: Category; index: number }) {
  const { t } = useTranslation();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const title = t(category.titleKey);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div className="relative w-full flex flex-col md:flex-row md:items-center gap-3 md:gap-4 py-3 md:py-4 px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          className="flex-1 flex items-center group relative w-full md:w-auto"
          whileHover={{ 
            x: 15, 
            scale: 1.05,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 15 
            }
          }}
        >
          <Link
            to={category.href}
            className="hoverable min-h-[44px] flex items-center"
          >
            <h2 
              className="font-suisse text-lg sm:text-[4vw] md:text-[3.5vw] lg:text-[3rem] xl:text-[3.5rem] 2xl:text-[4rem] font-normal leading-tight relative"
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Black text - always visible */}
              <span className="text-black">{title}</span>
              {/* Gradient overlay - follows cursor */}
              {isHovered && (
                <span
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle 160px at ${mousePos.x}% ${mousePos.y}%, #ec4899 0%, #a855f7 30%, transparent 70%)`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  {title}
                </span>
              )}
            </h2>
          </Link>
        </motion.div>
        
        <motion.div 
          className="flex-1 w-full md:w-auto"
          whileHover={{ 
            scale: 1.08, 
            rotate: 2,
            transition: { 
              type: "spring", 
              stiffness: 400, 
              damping: 15 
            }
          }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={category.previewImage}
            alt={title}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CategoriesList() {
  const categories: Category[] = [
    {
      id: 'fintech',
      titleKey: 'categories.fintech',
      previewImage: fintechPreview,
      href: '/category/fintech',
    },
    {
      id: 'mobile',
      titleKey: 'categories.mobile',
      previewImage: mobilePreview,
      href: '/category/mobile',
    },
    {
      id: 'web',
      titleKey: 'categories.web',
      previewImage: webPreview,
      href: '/category/web',
    },
    {
      id: 'identity',
      titleKey: 'categories.identity',
      previewImage: identityPreview,
      href: '/category/identity',
    },
  ];

  return (
    <section className="bg-white overflow-x-hidden">
      <div className="flex flex-col">
        {categories.map((category, index) => (
          <CategoryItem key={category.id} category={category} index={index} />
        ))}
      </div>
    </section>
  );
}
