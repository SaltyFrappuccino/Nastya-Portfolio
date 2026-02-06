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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        {/* Title row: empty left + title right */}
        <div className="grid grid-cols-2 gap-6 md:gap-10 mb-16 md:mb-24 lg:mb-32">
          <div />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-end"
          >
            <h2 className="font-suisse text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black leading-tight text-right">
              Пет&nbsp;-&nbsp;проекты,<br />хакатоны, челленджи
            </h2>
          </motion.div>
        </div>

        {/* Chaotic grid layout */}
        <div className="grid grid-cols-2 gap-x-8 md:gap-x-16 lg:gap-x-32 gap-y-16 md:gap-y-24">
          {petProjects.map((project, index) => {
            // Custom offsets for chaotic look matching reference
            let offsetClass = '';
            if (index === 0) offsetClass = 'mt-0'; // First project (Ecology) - top left
            if (index === 1) offsetClass = 'mt-32 md:mt-48 lg:mt-64'; // Second project (iOS) - pushed way down
            if (index === 2) offsetClass = '-mt-16 md:-mt-24'; // Third (Green app) - pulled up
            if (index === 3) offsetClass = 'mt-16 md:mt-32'; // Fourth (Web3) - pushed down again

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
                    className="overflow-hidden mb-4 md:mb-6"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={project.thumbnailUrl}
                      alt={project.title}
                      className="w-full h-auto object-contain"
                    />
                  </motion.div>
                  <p className="font-suisse text-base md:text-lg text-black/70 group-hover:text-black transition-colors">
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
