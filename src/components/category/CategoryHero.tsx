import { motion } from 'framer-motion';

const fintechBanner = new URL('../../assets/sorted/Дизайн в Fintech banner.png', import.meta.url).href;
const mobileBanner = new URL('../../assets/sorted/Мобильные приложения banner.png', import.meta.url).href;
const webBanner = new URL('../../assets/sorted/Веб сайты, лендинги и сервисы banner.png', import.meta.url).href;
const identityBanner = new URL('../../assets/sorted/Айдентика и digital - материалы banner.png', import.meta.url).href;

interface CategoryHeroProps {
  categoryId: string;
}

export default function CategoryHero({ categoryId }: CategoryHeroProps) {
  const bannerSrc =
    categoryId === 'fintech'
      ? fintechBanner
      : categoryId === 'mobile'
        ? mobileBanner
        : categoryId === 'web'
          ? webBanner
          : categoryId === 'identity'
            ? identityBanner
            : null;

  if (!bannerSrc) return null;

  return (
    <motion.section
      className="w-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative w-full aspect-[21/9] min-h-[200px] md:min-h-[320px]">
        <img
          src={bannerSrc}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.section>
  );
}
