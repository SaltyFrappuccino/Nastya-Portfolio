import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ContentRenderer from '../components/project/ContentRenderer';
import { getProjectById } from '../data/projects';
import AnimatedText from '../components/ui/AnimatedText';

export default function ProjectPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background-light pt-24 md:pt-32">
      {/* Back Button */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-black transition-colors font-suisse hoverable"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('common.backToProjects')}
        </Link>
      </motion.div>

      {/* Hero Section */}
      <motion.header
        className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div className="flex-1">
            <AnimatedText as="h1" className="font-suisse text-3xl md:text-5xl lg:text-6xl text-black leading-tight mb-4" delay={0.1}>
              {project.title}
            </AnimatedText>
            {project.fullDescription && (
              <AnimatedText as="p" className="font-suisse text-base md:text-lg text-text-secondary max-w-2xl" delay={0.2}>
                {project.fullDescription}
              </AnimatedText>
            )}
          </div>

          {/* Meta Info */}
          <div className="flex-shrink-0 text-right">
            {project.client && (
              <AnimatedText as="p" className="text-text-secondary text-sm font-suisse" delay={0.15}>
                {project.client}
              </AnimatedText>
            )}
            {project.year && (
              <AnimatedText as="p" className="text-text-secondary text-sm font-suisse mt-1" delay={0.2}>
                {project.year}
              </AnimatedText>
            )}
            {project.role && (
              <AnimatedText as="p" className="text-text-secondary text-sm font-suisse mt-1" delay={0.25}>
                {project.role}
              </AnimatedText>
            )}
          </div>
        </div>
      </motion.header>

      {/* Cover Image */}
      {project.coverImage && (
        <motion.div
          className="max-w-7xl mx-auto px-4 md:px-8 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="overflow-hidden bg-accent-blue">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      )}

      {/* Content Blocks */}
      <div className="max-w-7xl mx-auto">
        <ContentRenderer blocks={project.content} />
      </div>

      {/* Bottom Navigation */}
      <motion.div
        className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-12 py-4 bg-black text-white text-lg font-suisse hoverable transition-colors hover:bg-gray-800"
            style={{ borderRadius: '0' }}
          >
            <AnimatedText as="span" delay={0.1}>
              {t('common.viewAllProjects')}
            </AnimatedText>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

