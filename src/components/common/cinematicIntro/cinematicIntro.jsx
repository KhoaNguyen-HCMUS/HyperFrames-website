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
          setTimeout(onComplete, 300);
        },
      });

      // Initial setup
      gsap.set(introRef.current, { visibility: 'visible' });
      gsap.set(logoRef.current, { scale: 0, opacity: 0, rotation: -45, y: 100 });
      gsap.set(textRef.current, { y: 80, opacity: 0, scale: 0.8 });
      gsap.set(overlayRef.current, { scaleX: 0 });
      gsap.set(flashRef.current, { opacity: 0 });

      // Cinema intro sequence với tone đỏ đen
      tl
        // Camera flash effect mở đầu
        .to(flashRef.current, {
          opacity: 1,
          duration: 0.1,
          ease: 'power2.out',
        })
        .to(
          flashRef.current,
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          0.1
        )

        // Background transition to dark red gradient
        .to(
          introRef.current,
          {
            background: 'linear-gradient(135deg, #1a0000 0%, #330000 25%, #000000 50%, #1a0000 75%, #000000 100%)',
            duration: 1,
            ease: 'power2.out',
          },
          0.2
        )

        // Logo dramatic entrance với red glow
        .to(
          logoRef.current,
          {
            scale: 1.3,
            opacity: 1,
            rotation: 0,
            y: 0,
            duration: 2,
            ease: 'back.out(1.5)',
            transformOrigin: 'center',
          },
          0.8
        )

        // Logo settle với subtle pulse
        .to(
          logoRef.current,
          {
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          },
          2.8
        )

        // Logo red glow effect - nhẹ hơn
        .to(
          logoRef.current,
          {
            filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.6))',
            duration: 0.8,
            ease: 'power2.out',
          },
          4
        )

        // Text reveal với dramatic entrance
        .to(
          textRef.current,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
          },
          4.2
        )

        // Logo breathing nhẹ
        .to(
          logoRef.current,
          {
            scale: 1.05,
            duration: 1.2,
            repeat: 1,
            yoyo: true,
            ease: 'power2.inOut',
          },
          4.5
        )

        // Red overlay sweep
        .to(
          overlayRef.current,
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power3.inOut',
          },
          5.5
        )

        // ========== DRAMATIC ENDING SEQUENCE ==========

        // Camera flash finale
        .to(
          flashRef.current,
          {
            opacity: 0.8,
            duration: 0.15,
            ease: 'power2.out',
          },
          6.2
        )
        .to(
          flashRef.current,
          {
            opacity: 0,
            duration: 0.4,
            ease: 'power2.out',
          },
          6.35
        )

        // Logo dramatic exit
        .to(
          logoRef.current,
          {
            scale: 0.2,
            opacity: 0.6,
            rotation: 45,
            y: -80,
            filter: 'drop-shadow(0 0 20px rgba(220, 38, 38, 0.8)) blur(2px)',
            duration: 1.8,
            ease: 'power4.in',
          },
          6.5
        )

        // Text cinematic exit
        .to(
          textRef.current,
          {
            y: 100,
            opacity: 0,
            scale: 0.7,
            duration: 1.2,
            ease: 'power3.in',
          },
          6.8
        )

        // Particles fade out
        .to(
          particlesRef.current,
          {
            opacity: 0,
            duration: 1,
            ease: 'power2.in',
          },
          7
        )

        // Cinematic bars dramatic close
        .to(
          '.cinematic-bar-top',
          {
            height: '50vh',
            duration: 1.5,
            ease: 'power4.inOut',
          },
          7.2
        )
        .to(
          '.cinematic-bar-bottom',
          {
            height: '50vh',
            duration: 1.5,
            ease: 'power4.inOut',
          },
          7.2
        )

        // Final logo disappear
        .to(
          logoRef.current,
          {
            scale: 0,
            opacity: 0,
            rotation: -90,
            filter: 'blur(15px)',
            duration: 1,
            ease: 'power4.in',
          },
          7.5
        )

        // Circle wipe transition
        .to(
          introRef.current,
          {
            clipPath: 'circle(0% at 50% 50%)',
            duration: 1.8,
            ease: 'power4.inOut',
          },
          8
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
          <div className='text-xl md:text-2xl text-red-400 tracking-[0.2em] font-medium'>PHOTOGRAPHY STUDIO</div>
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
