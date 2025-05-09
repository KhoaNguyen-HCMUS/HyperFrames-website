import ProjectCard from '../../components/common/projectCard/projectCard.jsx';

import { projects } from '../../data/data.js';

export default function Portfolio() {
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
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
