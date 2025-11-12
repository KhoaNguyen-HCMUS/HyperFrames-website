import { FaArrowRight } from 'react-icons/fa';

export default function ServiceCard({ title, services, url }) {
  return (
    <div className='rounded-xl overflow-hidden hover:shadow-2xl shadow-lg transition-all duration-300 transform hover:scale-[1.02] hover:-translate-y-1 bg-gradient-to-br from-black to-red-500 flex flex-col h-full'>
      <div className='relative flex flex-col h-full' style={{ minHeight: '420px' }}>
        <div className='p-8 pb-16 flex-grow'>
          <div className='w-20 h-20 mb-8 relative z-2 flex items-center'>
            <img src='/logo.png' alt='HyperFrames Logo' className='w-full h-full object-contain' />
          </div>
          <h3 className='text-2xl font-bold mb-6 tracking-wide relative z-10'>{title}</h3>
          <ul className='space-y-3 relative z-10'>
            {services.map((service, index) => (
              <li key={index} className='flex items-center group'>
                <p className='text-white/90'>{service.name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className='absolute bottom-4 right-6 z-10'>
          <a
            href={url.link}
            className='inline-flex items-center text-white/90 hover:text-white font-medium transition-colors group'
          >
            {url.title}
            <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-1' size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
