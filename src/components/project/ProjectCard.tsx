import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../../types';
import AnimatedText from '../ui/AnimatedText';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        to={`/project/${project.id}`}
        className="group block hoverable"
      >
        <motion.div
          className="relative bg-background-light overflow-hidden"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Thumbnail */}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.thumbnailUrl}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Title */}
        <div className="mt-4">
          <AnimatedText as="h3" className="font-suisse text-base md:text-lg text-black group-hover:text-accent-blue transition-colors" delay={0.1}>
            {project.title}
          </AnimatedText>
          {project.shortDescription && (
            <AnimatedText as="p" className="text-text-secondary text-sm mt-1 line-clamp-2" delay={0.15}>
              {project.shortDescription}
            </AnimatedText>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

