import { useState, useCallback } from 'react';

export default function CinemaPoster({ poster, index, loaded }) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!isHovered) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((offsetY - centerY) / rect.height) * 20;
      const rotateY = ((offsetX - centerX) / rect.width) * 20;

      setRotate({
        x: -rotateX,
        y: rotateY,
      });
    },
    [isHovered]
  );

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  // Calculate base floating animation offset
  const floatOffset = Math.sin((Date.now() / 1000) * Math.PI) * 10;

  return (
    <div
      className={`border-white cursor-pointer mx-4 transition-all duration-700 ease-out opacity-0 ${
        loaded ? 'opacity-100' : ''
      }`}
      style={{
        transitionDelay: `${index * 150}ms`,
        zIndex: isHovered ? 50 : 10 + index,
        transformStyle: 'preserve-3d',
        perspective: '1000px',
        transform: `translateY(${floatOffset}px)`,
        animation: `float ${5 + (index % 3)}s ease-in-out infinite alternate`,
      }}
    >
      <div
        className='relative w-56 h-80 rounded-lg overflow-hidden border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300 ease-out'
        style={{
          transform: isHovered
            ? `
            perspective(1000px)
            rotateY(${rotate.y}deg)
            rotateX(${rotate.x}deg)
            scale3d(1.05, 1.05, 1.05)
            translateZ(20px)
          `
            : `
            perspective(1000px)
            rotateY(0deg)
            rotateX(0deg)
            translateZ(0px)
          `,
          transformOrigin: 'center center',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={poster}
          alt='Movie poster'
          className='w-full h-full object-cover transition-transform duration-300'
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          }}
        />
        <div
          className={`absolute inset-0 rounded-lg ring-2 transition-all duration-300
            ${
              isHovered
                ? 'ring-white/60 shadow-[inset_0_0_20px_rgba(255,255,255,0.3)]'
                : 'ring-white/40 shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]'
            }
          `}
        />

        <div
          className='absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-300'
          style={{
            opacity: isHovered ? 0.6 : 0,
            transform: `rotate(${rotate.y}deg)`,
          }}
        />
      </div>

      <div
        className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-white/20 rounded-full blur-md transition-all duration-300'
        style={{
          opacity: isHovered ? 0.3 : 0.2,
          transform: `translate(-50%, 0) scale(${isHovered ? 1.1 : 1})`,
        }}
      />
    </div>
  );
}
