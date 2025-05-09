import { useState } from 'react';
import ProjectCard from '../../components/common/projectCard/projectCard.jsx';
import { projects } from '../../data/data.js';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Get unique tags from projects
  const tags = ['ALL', ...new Set(projects.map((project) => project.tag))];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === 'ALL' ? projects : projects.filter((project) => project.tag === activeFilter);

  return (
    <section className='bg-black py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-white text-3xl font-bold mb-8 text-center'>Our Projects</h2>

        <div className='flex items-center justify-center space-x-2 text-gray-300 mb-8'>
          <a href='/' className='hover:text-red-500 transition-colors'>
            Home page
          </a>
          <span>|</span>
          <span className='text-red-500'>Portfolio</span>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-12'>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`cursor-pointer
                px-4 py-2 rounded-full border
                transition-all duration-300
                ${
                  activeFilter === tag
                    ? 'bg-red-600 text-white border-red-600'
                    : 'text-gray-400 border-gray-700 hover:border-red-600 hover:text-red-600'
                }
              `}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className='text-center text-gray-400 mt-8'>No projects found for this category.</div>
        )}
      </div>
    </section>
  );
}
