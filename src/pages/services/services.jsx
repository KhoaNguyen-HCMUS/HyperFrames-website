import AnimatedBackground from '../../components/common/animatedBackground/animatedBackground.jsx';
import { FaArrowRight } from 'react-icons/fa';
import { services } from '../../data/data.js';
// Service Card Component
const ServiceCard = ({ title, services }) => {
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

        {/* "Tham khảo báo giá" link always fixed at bottom right corner */}
        <div className='absolute bottom-4 right-6 z-10'>
          <a
            href='#'
            className='inline-flex items-center text-white/90 hover:text-white font-medium transition-colors group'
          >
            Tham khảo báo giá
            <FaArrowRight className='ml-2 transition-transform duration-300 group-hover:translate-x-1' size={12} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default function Services() {
  // Service data
  const servicesData = services;

  return (
    <div className='bg-black text-white min-h-screen'>
      <div className='relative h-[40vh] flex items-center justify-center overflow-hidden space-y-4 mb-10'>
        <AnimatedBackground />
        <div className='relative z-20 h-full flex flex-col items-center justify-center space-y-4 '>
          <h1 className='text-5xl font-bold tracking-wider animate-fade-in text-white'>DỊCH VỤ</h1>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <a href='/' className='hover:text-red-500 transition-colors'>
              Trang chủ
            </a>
            <span>|</span>
            <span className='text-red-500'>Dịch vụ</span>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {servicesData.map((service, index) => (
            <ServiceCard key={index} title={service.title} services={service.services} />
          ))}
        </div>
      </div>
    </div>
  );
}
