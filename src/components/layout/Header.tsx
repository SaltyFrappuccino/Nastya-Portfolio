import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';
import { getProjectById } from '../../data/projects';

export default function Header() {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const params = useParams();
  const isDarkPage = location.pathname.startsWith('/project');
  
  // Определяем категорию проекта, если мы на странице проекта
  const projectCategoryPath = (() => {
    if (location.pathname.startsWith('/project/') && params.id) {
      const project = getProjectById(params.id);
      if (project) {
        // Маппинг категорий проектов к путям меню
        const categoryMap: Record<string, string> = {
          'Web': '/category/web',
          'Mobile': '/category/mobile',
          'Fintech': '/category/fintech',
          'Identity': '/category/identity',
        };
        return categoryMap[project.category];
      }
    }
    return null;
  })();

  const menuItems = {
    about: [
      { label: t('header.cv'), href: '/cv' },
      { label: t('header.awards'), href: '/awards' },
    ],
    portfolio: [
      { label: t('menu.mobileApps'), href: '/category/mobile' },
      { label: t('menu.digitalDesign'), href: '/category/identity' },
      { label: t('menu.fintechProjects'), href: '/category/fintech' },
      { label: t('menu.websitesLandings'), href: '/category/web' },
    ],
    contacts: {
      email: 'order@cpeople.team',
      hrText: t('header.hrText'),
      hrEmail: 'superhero@cpeople.ru',
      hrSite: 'hr.cpeople.ru',
      socials: [
        { label: 'Telegram', href: 'https://t.me/' },
        { label: 'Vkontakte', href: 'https://vk.com/' },
        { label: 'Behance', href: 'https://behance.net/' },
        { label: 'VC.RU', href: 'https://vc.ru/' },
        { label: 'Хабр', href: 'https://habr.com/' },
      ],
    },
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 ${isDarkPage ? 'bg-black border-b border-white/10' : 'bg-white border-b border-black/5'}`}>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className={`inline-flex items-center justify-center px-5 py-2.5 text-sm font-suisse hoverable ${isDarkPage && !isMenuOpen ? 'text-white' : 'text-black'}`}
          >
            {t('header.logo')}
          </Link>

          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center justify-center gap-1.5 p-3 hoverable"
            aria-label="Toggle menu"
          >
            <span className={`w-7 h-0.5 transition-all ${isDarkPage && !isMenuOpen ? 'bg-white' : 'bg-black'}`} />
            <span className={`w-7 h-0.5 transition-all ${isDarkPage && !isMenuOpen ? 'bg-white' : 'bg-black'}`} />
            <span className={`w-7 h-0.5 transition-all ${isDarkPage && !isMenuOpen ? 'bg-white' : 'bg-black'}`} />
          </button>

          {/* Right side - Language + Phone + Contact button */}
          <div className="hidden md:flex items-center gap-4">
            <div className={isDarkPage && !isMenuOpen ? 'text-white' : 'text-black'}>
              <LanguageSwitcher />
            </div>
            <a
              href="tel:+79009994545"
              className={`font-suisse text-sm hoverable ${isDarkPage && !isMenuOpen ? 'text-white' : 'text-black'}`}
            >
              +7 900 999 45 45
            </a>
            <Link
              to="/contact"
              className={`inline-flex items-center justify-center px-6 py-2.5 text-sm font-suisse hoverable transition-colors min-w-[120px] ${isDarkPage && !isMenuOpen ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}`}
              style={{ borderRadius: '0' }}
            >
              {t('common.contact')}
            </Link>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-background-dark"
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between px-4 md:px-8 py-4">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 text-white text-sm font-suisse hoverable"
                style={{ mixBlendMode: 'difference' }}
              >
                {t('header.logo')}
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 hoverable"
                aria-label="Close menu"
              >
                <X className="w-8 h-8 text-white" strokeWidth={1.5} />
              </button>

              <div className="hidden md:flex items-center gap-4">
                <div className="text-white">
                  <LanguageSwitcher />
                </div>
                <a
                  href="tel:+79009994545"
                  className="font-suisse text-sm text-white hoverable"
                >
                  +7 900 999 45 45
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-black text-sm font-suisse hoverable min-w-[120px]"
                  style={{ borderRadius: '0' }}
                >
                  {t('common.contact')}
                </Link>
              </div>
            </div>

            {/* Menu Content */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="px-6 md:px-16 py-8 md:py-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
                {/* About Column */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4 font-suisse">{t('header.about')}</h3>
                  <ul className="space-y-3">
                    {menuItems.about.map((item) => (
                      <li key={item.href}>
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="text-white text-2xl md:text-3xl font-suisse hoverable hover:text-accent-red transition-colors"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Portfolio Column */}
                <div>
                  <h3 className="text-gray-500 text-sm mb-4 font-suisse">{t('header.portfolio')}</h3>
                  <ul className="space-y-3">
                    {menuItems.portfolio.map((item) => {
                      const isActive = 
                        location.pathname === item.href || 
                        location.pathname.startsWith(item.href + '/') ||
                        (projectCategoryPath && projectCategoryPath === item.href);
                      return (
                        <li key={item.href}>
                          <Link
                            to={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-2xl md:text-3xl font-suisse hoverable transition-colors ${
                              isActive 
                                ? 'text-accent-red hover:text-red-400' 
                                : 'text-white hover:text-accent-red'
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Contacts Column */}
                <div>
                  <div className="space-y-1 mb-6">
                    <a
                      href={`mailto:${menuItems.contacts.email}`}
                      className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
                    >
                      {menuItems.contacts.email}
                    </a>
                    <p className="text-gray-500 text-sm mt-3">{menuItems.contacts.hrText}</p>
                    <a
                      href={`mailto:${menuItems.contacts.hrEmail}`}
                      className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
                    >
                      {menuItems.contacts.hrEmail}
                    </a>
                    <a
                      href={`https://${menuItems.contacts.hrSite}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
                    >
                      {menuItems.contacts.hrSite}
                    </a>
                  </div>
                  <ul className="space-y-2 mt-6">
                    {menuItems.contacts.socials.map((social) => (
                      <li key={social.label} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full" />
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white font-suisse text-base hoverable hover:text-accent-red transition-colors"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Big Contact Button */}
              <div className="mt-16 md:mt-24 flex justify-center">
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center justify-center px-20 py-4 border border-white text-white text-xl font-suisse hoverable hover:bg-white hover:text-black transition-all min-w-[280px]"
                  style={{ borderRadius: '0' }}
                >
                  {t('common.contact')}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
