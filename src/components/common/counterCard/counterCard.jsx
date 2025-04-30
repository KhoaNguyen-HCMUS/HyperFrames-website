import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CounterCard({ target, label }) {
  const [count, setCount] = useState(0);
  const [hasViewed, setHasViewed] = useState(false);
  const ref = useRef();

  // Detect scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasViewed) {
          setHasViewed(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasViewed]);

  // Count up animation
  useEffect(() => {
    if (!hasViewed) return;

    let start = 0;
    const duration = 1500; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, stepTime);
  }, [hasViewed, target]);

  return (
    <motion.div
      ref={ref}
      className='text-center text-red-500'
      initial={{ opacity: 0, y: 40 }}
      animate={hasViewed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className='text-4xl font-bold'>{count.toLocaleString()}+</p>
      <p className='text-sm'>{label}</p>
    </motion.div>
  );
}
