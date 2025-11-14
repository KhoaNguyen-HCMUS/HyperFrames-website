import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CinematicIntro({ onComplete }) {
  const introRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const overlayRef = useRef(null);
  const barsRef = useRef(null);
  const particlesRef = useRef(null);
  const flashRef = useRef(null);
  const vignetteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 200);
        },
      });

      // Initial setup - logo không xoay, chỉ fade
      gsap.set(introRef.current, { visibility: 'visible' });
      gsap.set(logoRef.current, { scale: 0.8, opacity: 0 });
      gsap.set(textRef.current, { y: 20, opacity: 0 });
      gsap.set(flashRef.current, { opacity: 0 });

      // Intro ngắn gọn
      tl
        // Flash nhanh
        .to(flashRef.current, {
          opacity: 0.8,
          duration: 0.08,
          ease: 'power2.out',
        })
        .to(
          flashRef.current,
          {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.out',
          },
          0.08
        )

        // Background
        .to(
          introRef.current,
          {
            background: 'linear-gradient(135deg, #1a0000 0%, #330000 25%, #000000 50%, #1a0000 75%, #000000 100%)',
            duration: 0.6,
            ease: 'power2.out',
          },
          0.1
        )

        // Logo fade in đơn giản - không xoay
        .to(
          logoRef.current,
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          0.3
        )

        // Logo glow nhẹ
        .to(
          logoRef.current,
          {
            filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.6))',
            duration: 0.5,
            ease: 'power2.out',
          },
          0.8
        )

        // Text hiện lên
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          1
        )

        // Hold một chút
        .to({}, { duration: 0.8 }, 1.6)

        // Fade out nhanh
        .to(
          [logoRef.current, textRef.current],
          {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          },
          2.4
        )

        // Fade background
        .to(
          introRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
          },
          2.7
        );
    }, introRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={introRef}
      className='fixed top-0 left-0 w-screen h-screen bg-black z-[9999] flex items-center justify-center overflow-hidden invisible'
    >
      {/* Camera flash overlay */}
      <div ref={flashRef} className='absolute inset-0 bg-white z-[100] pointer-events-none' />

      {/* Vignette effect */}
      <div
        ref={vignetteRef}
        className='absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60 z-[90]'
      />

      {/* Cinematic bars - đơn giản */}
      <div ref={barsRef} className='absolute w-full h-full pointer-events-none z-[80]'>
        <div className='cinematic-bar-top absolute top-0 w-full h-16 md:h-20 bg-black shadow-2xl'></div>
        <div className='cinematic-bar-bottom absolute bottom-0 w-full h-16 md:h-20 bg-black shadow-2xl'></div>
      </div>

      {/* Subtle texture */}
      <div className='absolute inset-0 opacity-10 z-[60]'>
        <div
          className='w-full h-full'
          style={{
            backgroundImage: `
              linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className='text-center text-white relative z-[50]'>
        <div ref={logoRef} className='mb-8 flex justify-center'>
          <img
            src='/logo.png'
            alt='Logo'
            className='h-20 md:h-24 lg:h-28 w-auto object-contain filter drop-shadow-lg'
          />
        </div>

        <div ref={textRef} className='space-y-2'>
          <div className='text-xl md:text-2xl text-red-400 tracking-[0.2em] font-medium'>PRODUCTION HOUSE</div>
          <div className='text-sm md:text-base text-white/70 tracking-[0.1em]'>Creating Visual Stories</div>
        </div>
      </div>

      {/* Red sweep overlay */}
      <div
        ref={overlayRef}
        className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-30 origin-left transform scale-x-0 z-[40]'
      />

      {/* Simple particles */}
      <div ref={particlesRef} className='absolute w-full h-full overflow-hidden z-[30]'>
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 rounded-full opacity-40'
            style={{
              background: i % 2 === 0 ? 'rgba(220, 38, 38, 0.6)' : 'rgba(255, 255, 255, 0.4)',
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
              animation: `twinkle ${3 + Math.random() * 2}s ease-in-out infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Simple scanline */}
      <div className='absolute inset-0 pointer-events-none z-[20]'>
        <div
          className='w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-30'
          style={{
            marginTop: '50%',
            animation: 'scanline 4s ease-in-out infinite',
          }}
        ></div>
      </div>

      {/* Skip button */}
      <button
        onClick={onComplete}
        className='cursor-pointer absolute top-6 right-6 z-[110] text-red-400/60 hover:text-red-400 text-sm transition-all duration-300 font-medium tracking-wider hover:scale-110 transform'
      >
        SKIP →
      </button>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes scanline {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
