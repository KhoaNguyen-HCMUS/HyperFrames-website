import { useState, useEffect } from 'react';
import CinemaPoster from '../cinemaPoster/cinemaPoster';

export default function Banner() {
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
      <div className='absolute inset-0 flex justify-center items-center'>
        <div
          className={`relative w-full max-w-6xl h-full transition-transform duration-1000 ${
            loaded ? 'scale-100' : 'scale-90'
          }`}
        >
          <div className='flex justify-center items-center h-full'>
            {posters.map((poster, index) => (
              <CinemaPoster key={index} poster={poster} index={index} loaded={loaded} />
            ))}
          </div>
        </div>
      </div>

      {/* Float keyframes */}
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
