import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Import images from sorted/landing folder
const ecologyImage = new URL('../../assets/sorted/landing/Экология.png', import.meta.url).href;
const iosChallengeImage = new URL('../../assets/sorted/landing/iOS challenge.png', import.meta.url).href;
const web3Image = new URL('../../assets/sorted/landing/Web3.0.png', import.meta.url).href;
const greenAppImage = new URL('../../assets/sorted/landing/GreenApp.png', import.meta.url).href;

interface PetProject {
  id: string;
  title: string;
  label: string;
  thumbnailUrl: string;
}

export default function PetProjectsSection() {
  const { t } = useTranslation();

  const petProjects: PetProject[] = [
    {
      id: 'agrospector',
      title: 'AgroSpector',
      label: t('petProjects.ecology'),
      thumbnailUrl: ecologyImage,
    },
    {
      id: 'ios-challenge',
      title: 'iOS challenge',
      label: t('petProjects.iosChallenge'),
      thumbnailUrl: iosChallengeImage,
    },
    {
      id: 'green-analysis',
      title: 'Программное обеспечение',
      label: t('petProjects.softwareDescription'),
      thumbnailUrl: greenAppImage,
    },
    {
      id: 'web3',
      title: 'Web3.0',
      label: t('petProjects.web3'),
      thumbnailUrl: web3Image,
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-4 md:px-8">
        {/* Title row: empty left + title right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-8 md:mb-12 lg:mb-16">
          <div className="hidden md:block" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-start md:justify-end"
          >
            <h2 className="font-suisse text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black leading-tight text-left md:text-right">
              Пет&nbsp;-&nbsp;проекты,<br />хакатоны, челленджи
            </h2>
          </motion.div>
        </div>

        {/* Chaotic grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-16 lg:gap-x-24 gap-y-12 md:gap-y-20 lg:gap-y-28">
          {petProjects.map((project, index) => {
            // Custom offsets for chaotic look matching reference - reduced for tighter layout
            let offsetClass = '';
            if (index === 0) offsetClass = 'mt-0'; // First project (Ecology) - top left
            if (index === 1) offsetClass = 'md:mt-16 lg:mt-24'; // Second project (iOS) - pushed down less
            if (index === 2) offsetClass = 'md:-mt-8 lg:-mt-12'; // Third (Green app) - pulled up less
            if (index === 3) offsetClass = 'md:mt-8 lg:mt-16'; // Fourth (Web3) - pushed down less

            return (
              <motion.div
                key={project.id}
                className={offsetClass}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={`/project/${project.id}`}
                  className="block group hoverable"
                >
                  <motion.div
                    className="overflow-hidden mb-3 md:mb-4 max-w-[400px] mx-auto"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <p className="font-suisse text-xs sm:text-sm md:text-base text-black/70 group-hover:text-black transition-colors max-w-[400px] mx-auto">
                    {project.label}
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
