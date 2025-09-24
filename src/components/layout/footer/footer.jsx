import React, { useState } from 'react';
import { FaFacebook, FaPhone, FaEnvelope, FaYoutube, FaInstagram, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';

export default function EnhancedFooter() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Show the scroll button when scrolling down
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      id: 'facebook',
      icon: <FaFacebook className='w-6 h-6' />,
      href: 'https://www.facebook.com/hyperframesprod',
      label: 'Facebook',
      color: 'bg-blue-600',
    },
    {
      id: 'youtube',
      icon: <FaYoutube className='w-6 h-6' />,
      href: 'https://www.youtube.com/@HyperFrames_Prod',
      label: 'YouTube',
      color: 'bg-red-600',
    },
    {
      id: 'instagram',
      icon: <FaInstagram className='w-6 h-6' />,
      href: 'https://www.instagram.com/hyperframes_prod/',
      label: 'Instagram',
      color: 'bg-pink-600',
    },
  ];

  const quickLinks = [
    { title: 'Trang chủ', href: '/' },
    { title: 'Dịch vụ', href: '/services' },
    { title: 'Dự án', href: '/portfolio' },
    { title: 'Cho thuê', href: '/rental' },
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 to-black text-white relative'>
      {/* Animated wave separator */}
      <div className='bg-black absolute top-0 left-0 w-full overflow-hidden leading-0 transform rotate-180'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-full h-12 text-red-600 fill-current'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'></path>
        </svg>
      </div>

      {/* Main content */}
      <div className='max-w-7xl mx-auto px-6 pt-24 pb-12'>
        {/* Middle section with links and info - 3 columns on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-gray-800'>
          {/* Quick Links */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-red-500'>Đường dẫn nhanh</h3>
            <ul className='space-y-3'>
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-red-400 transition-colors duration-300 flex items-center'
                  >
                    <span className='w-1.5 h-1.5 bg-red-500 rounded-full mr-2'></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-red-500'>Thông tin liên hệ</h3>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <FaPhone className='w-5 h-5 text-red-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-gray-300 font-medium'>Điện thoại:</p>
                  <a href='tel:0338724974' className='text-gray-400 hover:text-red-400 transition-colors'>
                    033 872 4974
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <FaEnvelope className='w-5 h-5 text-red-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-gray-300 font-medium'>Email:</p>
                  <a
                    href='mailto:contact@hyperframes.media'
                    className='text-gray-400 hover:text-red-400 transition-colors'
                  >
                    contact@hyperframes.media
                  </a>
                </div>
              </div>
              <div className='flex items-start space-x-3'>
                <FaMapMarkerAlt className='w-5 h-5 text-red-500 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-gray-300 font-medium'>Địa chỉ:</p>
                  <p className='text-gray-400'>Thành phố Hồ Chí Minh, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className='space-y-6'>
            <h3 className='text-xl font-bold text-red-500'>Kết nối với chúng tôi</h3>
            <p className='text-gray-400'>Theo dõi chúng tôi trên các mạng xã hội để cập nhật tin tức mới nhất</p>
            <div className='flex flex-wrap gap-4'>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${link.color} p-3 rounded-full hover:opacity-80 transform hover:scale-110 transition-all duration-300`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-8 text-center text-gray-400 text-sm flex flex-col md:flex-row md:justify-between items-center'>
          <p>© {new Date().getFullYear()} HyperFrames Production. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>

      {/* Scroll to top button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className='cursor-pointer fixed bottom-8 right-8 bg-red-600 hover:bg-red-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300'
          aria-label='Scroll to top'
        >
          <FaChevronUp className='w-5 h-5' />
        </button>
      )}
    </footer>
  );
}
