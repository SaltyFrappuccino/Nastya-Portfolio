import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AnimatedText from '../ui/AnimatedText';

// Import images from sorted/landing folder - using encoded paths for special characters
const ecologyImage = new URL('../../assets/sorted/landing/Экология.png', import.meta.url).href;
const iosChallengeImage = new URL('../../assets/sorted/landing/iOS challenge.png', import.meta.url).href;
const web3Image = new URL('../../assets/sorted/landing/Web3.0.png', import.meta.url).href;

// Use AgroSpector.png - simple filename that works with Vite
const greenAppImage = new URL('../../assets/sorted/landing/GreenApp.png', import.meta.url).href;

interface PetProject {
  id: string;
  title: string;
  categoryKey: string;
  thumbnailUrl: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function PetProjectsSection() {
  const { t } = useTranslation();
  
  const petProjects: PetProject[] = [
    {
      id: 'agrospector',
      title: 'AgroSpector',
      categoryKey: 'petProjects.ecology',
      thumbnailUrl: ecologyImage,
    },
    {
      id: 'ios-challenge',
      title: 'iOS challenge',
      categoryKey: 'petProjects.iosChallenge',
      thumbnailUrl: iosChallengeImage,
    },
    {
      id: 'green-analysis',
      title: 'Программное обеспечение',
      categoryKey: 'petProjects.softwareDescription',
      thumbnailUrl: greenAppImage,
    },
    {
      id: 'web3',
      title: 'Web3.0',
      categoryKey: 'petProjects.web3',
      thumbnailUrl: web3Image,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Asymmetric Grid Layout */}
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          
          {/* First project - top left, small */}
          <motion.div
            className="col-span-6 md:col-span-4 lg:col-span-3"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              to={`/project/${petProjects[0].id}`}
              className="block group hoverable"
            >
              <motion.div
                className="rounded-xl overflow-hidden mb-3 bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={petProjects[0].thumbnailUrl}
                  alt={petProjects[0].title}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              <AnimatedText as="p" className="font-suisse text-xs md:text-sm text-text-secondary group-hover:text-black transition-colors" delay={0.1}>
                {t(petProjects[0].categoryKey)}
              </AnimatedText>
            </Link>
          </motion.div>

          {/* Title - top right */}
          <motion.div
            className="col-span-6 md:col-span-4 lg:col-span-5 flex items-start justify-end md:justify-center pt-4 md:pt-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatedText as="h2" className="font-suisse text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black text-right md:text-left leading-tight whitespace-pre-line" delay={0.1}>
              {t('petProjects.title')}
            </AnimatedText>
          </motion.div>

          {/* Second project - top right, offset down */}
          <motion.div
            className="col-span-6 md:col-span-4 lg:col-span-4 md:mt-16 lg:mt-24"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Link
              to={`/project/${petProjects[1].id}`}
              className="block group hoverable"
            >
              <motion.div
                className="overflow-hidden mb-3 bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={petProjects[1].thumbnailUrl}
                  alt={petProjects[1].title}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              <AnimatedText as="p" className="font-suisse text-xs md:text-sm text-text-secondary group-hover:text-black transition-colors" delay={0.15}>
                {t(petProjects[1].categoryKey)}
              </AnimatedText>
            </Link>
          </motion.div>

          {/* Third project - bottom left, wider */}
          <motion.div
            className="col-span-6 md:col-span-5 lg:col-span-4 md:-mt-8 lg:-mt-16"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to={`/project/${petProjects[2].id}`}
              className="block group hoverable"
            >
              <motion.div
                className="overflow-hidden mb-3 bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={petProjects[2].thumbnailUrl}
                  alt={petProjects[2].title}
                  className="w-full h-auto object-contain"
                  onError={() => {
                    console.error('Image failed to load:', petProjects[2].thumbnailUrl);
                  }}
                />
              </motion.div>
              <AnimatedText as="p" className="font-suisse text-xs md:text-sm text-text-secondary group-hover:text-black transition-colors line-clamp-3" delay={0.2}>
                {t(petProjects[2].categoryKey)}
              </AnimatedText>
            </Link>
          </motion.div>

          {/* Fourth project - bottom right */}
          <motion.div
            className="col-span-6 md:col-span-4 lg:col-span-4 md:col-start-8 lg:col-start-9"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <Link
              to={`/project/${petProjects[3].id}`}
              className="block group hoverable"
            >
              <motion.div
                className="overflow-hidden mb-3 bg-gray-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={petProjects[3].thumbnailUrl}
                  alt={petProjects[3].title}
                  className="w-full h-auto object-contain"
                />
              </motion.div>
              <AnimatedText as="p" className="font-suisse text-xs md:text-sm text-text-secondary group-hover:text-black transition-colors" delay={0.25}>
                {t(petProjects[3].categoryKey)}
              </AnimatedText>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
