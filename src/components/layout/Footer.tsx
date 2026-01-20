import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Footer() {
  const { t } = useTranslation();
  
  const footerData = {
    about: [
      { label: t('header.cv'), href: '/cv' },
      { label: t('header.awards'), href: '/awards' },
    ],
    portfolio: [
      { label: t('menu.mobileApps'), href: '/#mobile' },
      { label: t('menu.digitalDesign'), href: '/#digital' },
      { label: t('menu.fintechProjects'), href: '/#fintech' },
      { label: t('menu.websitesLandings'), href: '/#web' },
    ],
    contacts: {
      email: 'order@cpeople.team',
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
    <footer className="bg-background-footer text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        {/* Language Switcher */}
        <div className="flex justify-end mb-8">
          <LanguageSwitcher />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          {/* About Column */}
          <div>
            <h3 className="text-gray-500 text-sm mb-4 font-suisse">{t('header.about')}</h3>
            <ul className="space-y-3">
              {footerData.about.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white text-xl md:text-2xl font-suisse hoverable hover:text-accent-red transition-colors"
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
              {footerData.portfolio.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="text-white text-xl md:text-2xl font-suisse hoverable hover:text-accent-red transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Column */}
          <div>
            <div className="space-y-2 mb-6">
              <a
                href={`mailto:${footerData.contacts.email}`}
                className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
              >
                {footerData.contacts.email}
              </a>
              <p className="text-gray-500 text-sm">{t('header.hrText')}</p>
              <a
                href={`mailto:${footerData.contacts.hrEmail}`}
                className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
              >
                {footerData.contacts.hrEmail}
              </a>
              <a
                href={`https://${footerData.contacts.hrSite}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white text-base font-suisse hoverable hover:text-accent-red transition-colors"
              >
                {footerData.contacts.hrSite}
              </a>
            </div>
            <ul className="space-y-2">
              {footerData.contacts.socials.map((social) => (
                <li key={social.label} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-suisse hoverable hover:text-accent-red transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Big Contact Button */}
        <div className="flex justify-center">
          <motion.a
            href="/contact"
            className="inline-flex items-center justify-center px-20 py-4 border border-white text-white text-xl font-suisse hoverable transition-all hover:bg-white hover:text-black"
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

