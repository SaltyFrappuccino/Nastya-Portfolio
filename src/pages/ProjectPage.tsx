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
    <main className="min-h-screen bg-white text-black pt-20 md:pt-28 pb-12 md:pb-24">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Hero: title, client, description */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="font-suisse font-medium text-3xl md:text-4xl lg:text-5xl text-black leading-tight tracking-tight">
                {project.title}
              </h1>
              {project.client && (
                <p className="font-suisse text-sm text-black/70 mt-2">
                  {project.client}
                </p>
              )}
            </div>
          </div>
          {project.fullDescription && (
            <p className="font-suisse text-lg md:text-xl text-black mt-6 max-w-3xl leading-[1.6]">
              {project.fullDescription}
            </p>
          )}
          <div className="flex flex-wrap gap-x-6 gap-y-1 mt-6 text-black/70 font-suisse text-sm">
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
            className="w-full mb-8 md:mb-12"
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
