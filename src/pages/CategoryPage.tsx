import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../components/project/ProjectCard';
import MarqueeStrip from '../components/home/MarqueeStrip';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types';
import AnimatedText from '../components/ui/AnimatedText';

interface CategoryInfo {
  id: string;
  titleKey: string;
  category: ProjectCategory;
  client?: string;
}

export default function CategoryPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  
  const categoryInfo: Record<string, CategoryInfo> = {
    fintech: {
      id: 'fintech',
      titleKey: 'categories.fintech',
      category: 'Fintech',
      client: '@creator_aa',
    },
    mobile: {
      id: 'mobile',
      titleKey: 'categories.mobile',
      category: 'Mobile',
      client: 'CreativePeople',
    },
    web: {
      id: 'web',
      titleKey: 'categories.web',
      category: 'Web',
      client: 'CreativePeople',
    },
    identity: {
      id: 'identity',
      titleKey: 'categories.identity',
      category: 'Identity',
      client: 'CreativePeople',
    },
    games: {
      id: 'games',
      titleKey: 'categories.games',
      category: 'Mobile',
      client: '@creator_aa',
    },
    ai: {
      id: 'ai',
      titleKey: 'categories.ai',
      category: 'Identity',
      client: '@creator_aa',
    },
  };

  const info = id ? categoryInfo[id] : undefined;

  if (!info) {
    return <Navigate to="/" replace />;
  }

  const categoryProjects = projects.filter((p) => p.category === info.category);

  return (
    <div className="min-h-screen bg-background-light pt-24 md:pt-32">
      {/* Hero */}
      <motion.header
        className="max-w-7xl mx-auto px-4 md:px-8 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-start justify-between">
          <AnimatedText as="h1" className="font-evolventa text-3xl md:text-5xl lg:text-6xl text-black" delay={0.1}>
            {t(info.titleKey)}
          </AnimatedText>
          {info.client && (
            <AnimatedText as="span" className="text-text-secondary text-sm font-suisse" delay={0.2}>
              {info.client}
            </AnimatedText>
          )}
        </div>
      </motion.header>

      {/* Marquee */}
      <MarqueeStrip />

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {categoryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

