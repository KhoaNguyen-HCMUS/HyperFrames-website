import { useState } from 'react';
import { pricing } from '../../data/data.js';
import PricingCard from '../../components/common/pricingCard/pricingCard.jsx';
import AnimatedBackground from '../../components/common/animatedBackground/animatedBackground.jsx';

const tabs = [
  { id: 'livestream', label: 'LIVESTREAM' },
  { id: 'highlight', label: 'QUAY PHIM HIGHLIGHT' },
  { id: 'full-source', label: 'QUAY PHIM FULL SOURCE' },
  { id: 'photo', label: 'CHỤP HÌNH' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState('livestream');

  return (
    <div className='min-h-screen bg-black text-white'>
      <div className='relative h-[40vh] flex items-center justify-center overflow-hidden space-y-4 mb-10'>
        <AnimatedBackground />
        <div className='relative z-20 h-full flex flex-col items-center justify-center space-y-4 '>
          <h1 className='text-5xl font-bold tracking-wider animate-fade-in text-white'>DỊCH VỤ</h1>
          <div className='flex items-center justify-center space-x-2 text-gray-300'>
            <a href='/' className='hover:text-red-500 transition-colors'>
              Home page
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
                cursor-pointer relative px-6 py-3 text-lg font-medium tracking-wide
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

        <div
          className={`grid gap-10
          ${
            pricing[activeTab].packages.length === 1
              ? 'grid-cols-1 max-w-md'
              : pricing[activeTab].packages.length === 2
              ? 'md:grid-cols-2 max-w-3xl'
              : 'md:grid-cols-2 lg:grid-cols-3'
          }
          mx-auto
          `}
        >
          {pricing[activeTab].packages.map((pkg) => (
            <PricingCard
              key={pkg.id}
              name={pkg.name}
              price={pkg.price}
              duration={pkg.duration}
              features={pkg.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
