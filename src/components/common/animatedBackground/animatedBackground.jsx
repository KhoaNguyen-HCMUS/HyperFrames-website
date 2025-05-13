export default function AnimatedBackground() {
  return (
    <>
      <div className='absolute inset-0 z-0 bg-black/90'>
        <div
          className='absolute top-0 left-1/4 w-96 h-96 
			bg-gradient-to-r from-purple-900/30 to-purple-600/20 
			rounded-full blur-3xl'
          style={{
            animation: 'pulse 4s ease-in-out infinite',
            transform: 'translate3d(0, 0, 0)',
          }}
        ></div>
        <div
          className='absolute top-1/3 right-1/4 w-64 h-64 
			bg-gradient-to-r from-red-900/30 to-red-600/20 
			rounded-full blur-3xl'
          style={{
            animation: 'pulse 5s ease-in-out infinite',
            transform: 'translate3d(0, 0, 0)',
          }}
        ></div>
        <div
          className='absolute bottom-0 left-1/3 w-80 h-80 
			bg-gradient-to-r from-blue-900/30 to-blue-600/20 
			rounded-full blur-3xl'
          style={{
            animation: 'pulse 6s ease-in-out infinite',
            transform: 'translate3d(0, 0, 0)',
          }}
        ></div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.05) translate3d(10px, 10px, 0);
            opacity: 0.7;
          }
          100% {
            transform: scale(1) translate3d(0, 0, 0);
            opacity: 0.5;
          }
        }
      `}</style>
    </>
  );
}
