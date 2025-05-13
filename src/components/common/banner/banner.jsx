import { useState, useEffect } from 'react';

export default function CinemaBanner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const posters = ['/banner/poster1.png', '/banner/poster2.png', '/banner/poster3.png', '/banner/poster4.png'];

  return (
    <div
      className='w-full h-screen relative overflow-hidden perspective-1000'
      style={{
        backgroundImage: 'url(/banner/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Main container */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <div
          className={`relative w-full max-w-6xl h-full transition-transform duration-1000 ${
            loaded ? 'scale-100' : 'scale-90'
          }`}
        >
          {/* poster flex */}
          <div className='flex justify-center items-center h-full'>
            {posters.map((poster, index) => (
              <div
                key={index}
                className={`border-white transform hover:scale-110 transition-all duration-700 ease-out cursor-pointer mx-4 
                           opacity-0 ${loaded ? 'opacity-100' : ''}`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                  animation: `float ${5 + (index % 3)}s ease-in-out infinite alternate`,
                  zIndex: 10 + index,
                }}
              >
                {/* Poster */}
                <div
                  className='relative w-56 h-80 rounded-lg overflow-hidden shadow-2xl transform border-2 border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.3)]'
                  style={{
                    transform: `rotate(${index % 2 === 0 ? '2' : '-2'}deg) translateZ(${8 + index * 2}px)`,
                  }}
                >
                  {/* Img poster */}
                  <img src={poster} alt='Movie poster' className='w-full h-full object-cover' />

                  {/* updated glow effect */}
                  <div
                    className='absolute inset-0 rounded-lg ring-2 ring-white/40 
                  shadow-[inset_0_0_10px_rgba(255,255,255,0.2)]'
                  ></div>
                </div>

                {/* updated with white shadow */}
                <div
                  className='absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                w-4/5 h-4 bg-white/20 rounded-full blur-md'
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS for float effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-12px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
}
