import Logo from '/logo.jpg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='flex flex-col items-center justify-center'>
        <header className='flex items-center justify-between w-full p-4 bg-zinc-900 text-white'>
          <div className='flex items-center'>
            <img
              src={Logo}
              className='h-12 w-auto object-contain cursor-pointer hover:opacity-90 transition-opacity duration-200 neon-white'
              alt='HyperFrames Logo'
            />
          </div>
          <h1 className='text-3xl font-bold neon-red'>HyperFrames</h1>
          <nav className='flex space-x-4'>
            {['Home', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href='#'
                className='text-white hover:text-red-500 hover:neon-red transition-all duration-300'
              >
                {item}
              </a>
            ))}
          </nav>
        </header>
      </div>
    </div>
  );
}

export default App;
