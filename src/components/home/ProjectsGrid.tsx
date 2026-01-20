import { motion } from 'framer-motion';
import ProjectCard from '../project/ProjectCard';
import type { Project, ProjectCategory } from '../../types';
import AnimatedText from '../ui/AnimatedText';

interface ProjectsGridProps {
  projects: Project[];
}

interface CategorySection {
  category: ProjectCategory;
  title: string;
  client?: string;
}

const categories: CategorySection[] = [
  { category: 'Fintech', title: 'Дизайн в Fintech', client: '@creator_aa' },
  { category: 'Mobile', title: 'Мобильные приложения', client: 'CreativePeople' },
  { category: 'Web', title: 'Веб сайты, лендинги и сервисы', client: 'CreativePeople' },
  { category: 'Identity', title: 'Digital материалы, айдентика', client: 'CreativePeople' },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="py-12 md:py-20">
      {categories.map((section) => {
        const categoryProjects = projects.filter(
          (p) => p.category === section.category
        );

        if (categoryProjects.length === 0) return null;

        return (
          <motion.section
            key={section.category}
            id={section.category.toLowerCase()}
            className="mb-16 md:mb-24"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Section Header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8 md:mb-12">
              <div className="flex items-start justify-between">
                <AnimatedText as="h2" className="font-suisse text-2xl md:text-4xl text-black" delay={0.1}>
                  {section.title}
                </AnimatedText>
                {section.client && (
                  <AnimatedText as="span" className="text-text-secondary text-sm font-suisse" delay={0.2}>
                    {section.client}
                  </AnimatedText>
                )}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {categoryProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.section>
        );
      })}
    </div>
  );
}

