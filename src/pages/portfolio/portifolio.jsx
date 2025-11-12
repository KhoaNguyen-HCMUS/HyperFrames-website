import { useState } from 'react';
import ProjectCard from '../../components/common/projectCard/projectCard.jsx';
import { projects } from '../../data/data.js';
import AnimatedBackground from '../../components/common/animatedBackground/animatedBackground.jsx';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  // Get unique tags from projects
  const tags = ['ALL', ...new Set(projects.map((project) => project.tag))];

  // Filter projects based on active filter
  const filteredProjects =
    activeFilter === 'ALL' ? projects : projects.filter((project) => project.tag === activeFilter);

  return (
    <section className=' bg-black '>
      <div className='relative h-[40vh] flex items-center justify-center overflow-hidden space-y-4 mb-10'>
        <AnimatedBackground />
        <div className='relative z-20 h-full flex flex-col items-center justify-center space-y-4 '>
          <h1 className='text-5xl font-bold tracking-wider animate-fade-in text-white'>Dự án của chúng tôi</h1>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <a href='/' className='hover:text-red-500 transition-colors'>
              Trang chủ
            </a>
            <span>|</span>
            <span className='text-red-500'>Dự án của chúng tôi</span>
          </div>
        </div>
      </div>

      <div className='relative z-20 max-w-7xl mx-auto space-y-4'>
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
          <div className='text-center text-gray-400 mt-8'>Không tìm thấy dự án nào cho danh mục này.</div>
        )}
      </div>
    </section>
  );
}
