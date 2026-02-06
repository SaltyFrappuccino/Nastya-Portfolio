import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import ContentRenderer from '../components/project/ContentRenderer';
import { getProjectById } from '../data/projects';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }
  if (project.linkToProjectId) {
    return <Navigate to={`/project/${project.linkToProjectId}`} replace />;
  }

  return (
    <main className="min-h-screen bg-white text-black pt-16 md:pt-24 lg:pt-28 pb-8 md:pb-16 lg:pb-24">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Hero: title, client, description */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 md:mb-10 lg:mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4">
            <div>
              <h1 className="font-suisse font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black leading-tight tracking-tight">
                {project.title}
              </h1>
              {project.client && (
                <p className="font-suisse text-xs sm:text-sm text-black/70 mt-1 md:mt-2">
                  {project.client}
                </p>
              )}
            </div>
          </div>
          {project.fullDescription && (
            <p className="font-suisse text-sm sm:text-base md:text-lg lg:text-xl text-black mt-4 md:mt-5 lg:mt-6 leading-[1.6]">
              {project.fullDescription}
            </p>
          )}
          <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-1 mt-4 md:mt-6 text-black/70 font-suisse text-xs sm:text-sm">
            {project.year && (
              <span>{project.year}</span>
            )}
            {project.role && (
              <span>{project.role}</span>
            )}
          </div>
        </motion.header>

        {/* Cover image */}
        {project.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full mb-6 md:mb-10 lg:mb-12"
          >
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-auto"
            />
          </motion.div>
        )}

        {/* Content blocks */}
        <ContentRenderer blocks={project.content} />
      </div>
    </main>
  );
}
