import { useState } from 'react';
import DeviceCard from '../../components/common/deviceCard/deviceCard.jsx';
import { devices } from '../../data/data.js';
import AnimatedBackground from '../../components/common/animatedBackground/animatedBackground.jsx';

export default function Rental() {
  const [activeTab, setActiveTab] = useState('camera');

  const categories = Object.keys(devices).map((key) => ({
    id: key,
    title: devices[key].title,
  }));

  const scrollToContact = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className=' bg-black '>
      <div className='relative h-[45vh] flex items-center justify-center overflow-hidden space-y-6 mb-10'>
        <AnimatedBackground />
        <div className='relative z-20 h-full flex flex-col items-center justify-center space-y-4 '>
          <h1 className='text-5xl font-bold tracking-wider animate-fade-in text-white'>RENTAL EQUIPMENTS</h1>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <a href='/' className='hover:text-red-500 transition-colors'>
              Home page
            </a>
            <span>|</span>
            <span className='text-red-500'>Rental Equipments</span>
          </div>
          <p className='text-center text-gray-300 max-w-2xl mx-auto mb-12 p-1'>
            We provide professional filming equipment for production, study and practice. Students can rent equipment at
            preferential prices.
          </p>
        </div>
      </div>

      <div className='max-w-7xl mx-auto space-y-4'>
        <div className='flex flex-wrap justify-center gap-8 mb-16'>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`
                cursor-pointer relative px-6 py-3 text-lg font-medium tracking-wide
                transition-all duration-300 ease-in-out
                ${
                  activeTab === category.id
                    ? 'text-red-500 border-b-2 border-red-500'
                    : 'text-gray-400 hover:text-white'
                }
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:w-0 before:h-0.5 before:bg-red-500
                before:transition-all before:duration-300
                hover:before:w-full
              `}
              onClick={() => setActiveTab(category.id)}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {devices[activeTab]?.devices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <button
            onClick={scrollToContact}
            className='bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full transition cursor-pointer'
          >
            Contact us now!!
          </button>
        </div>
      </div>
    </section>
  );
}
