import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '/logo.png';
import { Link } from 'react-router-dom';

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'Trang chủ', href: '/' },
    { name: 'Dịch vụ', href: '/services' },
    { name: 'Dự án', href: '/portfolio' },
    { name: 'Cho thuê', href: '/rental' },
  ];

  return (
    <div className='w-full'>
      <nav className='bg-black text-white shadow-md'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <a
                href='https://www.facebook.com/hyperframesprod'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center'
              >
                <img
                  src={Logo}
                  alt='HYPERFRAMES Logo'
                  className='cursor-pointer h-10 mr-2 transition-all duration-300 hover:scale-105'
                />
              </a>
            </div>

            <div className='hidden md:flex md:items-center md:space-x-6'>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='px-3 py-2 rounded-md hover:bg-red-600 transition-colors uppercase text-sm font-medium tracking-wider'
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className='md:hidden flex items-center'>
              <button onClick={toggleMenu} className='p-2 rounded-md hover:bg-red-600 focus:outline-none'>
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-black border-t border-gray-800'>
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className='block px-3 py-2 rounded-md hover:bg-red-600 transition-colors uppercase text-sm font-medium tracking-wider'
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
