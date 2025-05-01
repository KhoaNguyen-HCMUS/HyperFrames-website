import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/common/serviceCard/serviceCard.jsx';
import { services } from '../../data/data.js';

const tabs = [
  { id: 'livestream', label: 'DỊCH VỤ LIVESTREAM' },
  { id: 'quayphim', label: 'DỊCH VỤ QUAY PHIM' },
  { id: 'chuphinh', label: 'DỊCH VỤ CHỤP HÌNH' },
  { id: 'chothue', label: 'CHO THUÊ THIẾT BỊ' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('livestream');

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white'>
      <div className='relative h-[40vh] flex items-center justify-center overflow-hidden'>
        <img
          src='https://dummyimage.com/1920x400/000/fff'
          alt='Dịch Vụ'
          className='absolute w-full h-full object-cover object-center'
        />
        <div className='absolute inset-0 bg-black bg-opacity-50' />
        <div className='relative z-10 text-center space-y-4'>
          <h1 className='text-5xl font-bold tracking-wider animate-fade-in'>DỊCH VỤ</h1>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <a href='/' className='hover:text-red-500 transition-colors'>
              Trang chủ
            </a>
            <span>|</span>
            <span className='text-red-500'>Dịch vụ</span>
          </div>
        </div>
      </div>

      {/* Service Tabs */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='flex flex-wrap justify-center gap-8 mb-16'>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`
                relative px-6 py-3 text-lg font-medium tracking-wide
                transition-all duration-300 ease-in-out
                ${activeTab === tab.id ? 'text-red-500 border-b-2 border-red-500' : 'text-gray-400 hover:text-white'}
                before:content-[''] before:absolute before:bottom-0 before:left-0
                before:w-0 before:h-0.5 before:bg-red-500
                before:transition-all before:duration-300
                hover:before:w-full
              `}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'livestream' && (
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
            {services.livestream.items.map((service) => (
              <ServiceCard
                key={service.id}
                img={service.image}
                title={service.title}
                description={service.description}
                slug={service.id}
                className='transform hover:scale-105 transition-transform duration-300'
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
