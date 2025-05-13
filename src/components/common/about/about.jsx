import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';
import AnimatedBackground from '../animatedBackground/animatedBackground';

const AnimatedListItem = ({ item, index }) => {
  const [setCount] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setCount(100);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, index]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className='flex items-center space-x-2 hover:text-red-500 transition-colors duration-300'
    >
      <svg className='w-5 h-5 text-red-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
      </svg>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
      >
        {item}
      </motion.span>
    </motion.li>
  );
};

export default function About() {
  const features = [
    'Professional equipment',
    'Skilled and experienced technical crew',
    '24/7 technical support and assistance',
  ];

  return (
    <section className='relative min-h-screen bg-black text-white py-20 overflow-hidden'>
      <AnimatedBackground />

      <div className='relative max-w-6xl mx-auto px-4' style={{ zIndex: 20 }}>
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold mb-4'>
            About <span className='text-red-600'>HYPERFRAMES</span>
          </h2>
          <div className='w-24 h-1 bg-red-600 mx-auto'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='group'>
            <img
              src='https://dummyimage.com/1200x600/000000/ffffff&text=Hello+we+are+HYPERFRAMES'
              alt='Studio Setup'
              className='rounded-lg shadow-2xl border-2 border-red-600 transition-transform duration-300 transform hover:scale-105'
            />
          </div>

          <div className='space-y-6'>
            <h3 className='text-2xl font-semibold text-red-600 hover:text-red-500 transition-colors duration-300'>
              Production & Equipment Rental
            </h3>
            <p className='text-gray-300 text-justify'>
              We are a creative media team specializing in video production for commercials, events, music videos, short
              films, and offering modern filming equipment rental services. From concept to completion, we work closely
              with our clients to bring ideas to life through emotionally resonant visuals.
            </p>
            <p className='text-gray-300 text-justify'>
              With hands-on industry experience and a limitless creative mindset, we are committed to delivering
              high-quality, impactful visuals that align perfectly with each brand’s message.
            </p>

            <ul className='space-y-4'>
              {features.map((item, index) => (
                <AnimatedListItem key={index} item={item} index={index} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
