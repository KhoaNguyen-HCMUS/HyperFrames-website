import AnimatedBackground from '../../components/common/animatedBackground/animatedBackground.jsx';
import { services } from '../../data/data.js';
import ServiceCard from '../../components/common/serviceCard/serviceCard.jsx';

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
            <ServiceCard key={index} title={service.title} services={service.services} url={service.url} />
          ))}
        </div>
      </div>
    </div>
  );
}
