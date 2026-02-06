import { Link, useLocation, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { getProjectById } from '../../data/projects';

const fintechFooter = new URL('../../assets/sorted/Дизайн в Fintech footer.png', import.meta.url).href;
const mobileFooter = new URL('../../assets/sorted/Мобильные приложения footer.png', import.meta.url).href;
const webFooter = new URL('../../assets/sorted/Веб сайты, лендинги и сервисы footer.png', import.meta.url).href;
const identityFooter = new URL('../../assets/sorted/Айдентика и digital - материалы footer.png', import.meta.url).href;
const homeFooter = new URL('../../assets/sorted/landing/Футер главной страницы.png', import.meta.url).href;

function getCategoryFooterSrc(pathname: string, projectCategory?: string): string | null {
  if (pathname === '/') return homeFooter;
  if (pathname.startsWith('/category/')) {
    const id = pathname.replace('/category/', '');
    if (id === 'fintech') return fintechFooter;
    if (id === 'mobile') return mobileFooter;
    if (id === 'web') return webFooter;
    if (id === 'identity') return identityFooter;
    return null;
  }
  if (pathname.startsWith('/project/') && projectCategory) {
    if (projectCategory === 'Fintech') return fintechFooter;
    if (projectCategory === 'Mobile') return mobileFooter;
    if (projectCategory === 'Web') return webFooter;
    if (projectCategory === 'Identity') return identityFooter;
  }
  return null;
}

export default function Footer() {
  const { t } = useTranslation();
  const location = useLocation();
  const { id: projectId } = useParams<{ id: string }>();
  const project = projectId ? getProjectById(projectId) : undefined;
  
  // Hide category footer image on project pages, but show on home and category pages
  const isProjectPage = location.pathname.startsWith('/project/');
  const categoryFooterSrc = !isProjectPage ? getCategoryFooterSrc(location.pathname, project?.category) : null;

  const footerData = {
    about: [
      { label: t('header.cv'), href: 'https://hh.ru/resume/644da8e8ff071fb0550039ed1f367035354334', external: true },
    ],
    portfolio: [
      { label: t('menu.mobileApps'), href: '/#mobile' },
      { label: t('menu.digitalDesign'), href: '/#digital' },
      { label: t('menu.fintechProjects'), href: '/#fintech' },
      { label: t('menu.websitesLandings'), href: '/#web' },
    ],
    contacts: {
      socials: [
        { label: 'Telegram', href: 'https://t.me/creator_aa' },
        { label: 'Vkontakte', href: 'https://vk.com/' },
        { label: 'Behance', href: 'https://behance.net/' },
        { label: 'VC.RU', href: 'https://vc.ru/' },
        { label: 'Хабр', href: 'https://habr.com/ru/users/AnaDubrovina/articles/' },
      ],
    },
  };

  return (
    <footer className="bg-background-footer text-white">
      {categoryFooterSrc && (
        <div className="w-full">
          <img
            src={categoryFooterSrc}
            alt=""
            className="w-full h-auto object-cover object-center block"
          />
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 lg:pt-20 pb-[calc(2rem+env(safe-area-inset-bottom))] md:pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-[calc(5rem+env(safe-area-inset-bottom))]">
        {/* Language Switcher */}
        <div className="flex justify-end mb-6 md:mb-8">
          <LanguageSwitcher />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-gray-500 text-xs sm:text-sm mb-3 md:mb-4 font-suisse">{t('header.about')}</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerData.about.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-lg sm:text-xl md:text-2xl font-suisse hoverable hover:text-accent-red transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-white text-lg sm:text-xl md:text-2xl font-suisse hoverable hover:text-accent-red transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Portfolio Column */}
          <div>
            <h3 className="text-gray-500 text-xs sm:text-sm mb-3 md:mb-4 font-suisse">{t('header.portfolio')}</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerData.portfolio.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white text-lg sm:text-xl md:text-2xl font-suisse hoverable hover:text-accent-red transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <ul className="space-y-2">
              {footerData.contacts.socials.map((social) => (
                <li key={social.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-suisse text-sm sm:text-base hoverable hover:text-accent-red transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Contact Button - adaptive on mobile */}
        <div className="flex justify-center px-2 md:px-0">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center w-full max-w-[280px] px-6 sm:px-10 md:px-16 lg:px-20 py-3 md:py-4 border border-white text-white text-base md:text-lg lg:text-xl font-suisse hoverable transition-all hover:bg-white hover:text-black"
            style={{ borderRadius: '0' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {t('common.contact')}
          </motion.a>
        </div>
      </div>
    </footer>
  );
}

