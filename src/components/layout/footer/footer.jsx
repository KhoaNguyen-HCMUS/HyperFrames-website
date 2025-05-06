import React from 'react';
import { FaFacebook, FaPhone, FaEnvelope, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  const socialLinks = [
    {
      id: 'facebook',
      icon: <FaFacebook className='w-6 h-6' />,
      href: 'https://www.facebook.com/hyperframesprod',
      label: 'Facebook',
    },
    {
      id: 'youtube',
      icon: <FaYoutube className='w-6 h-6' />,
      href: '#https://www.youtube.com/@HyperFrames_Prod',
      label: 'YouTube',
    },
    {
      id: 'instagram',
      icon: <FaInstagram className='w-6 h-6' />,
      href: '#https://www.instagram.com/hyperframes_prod/',
      label: 'Instagram',
    },
  ];

  return (
    <footer className='bg-black text-white pt-12 pb-8 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* Contact Info */}
        <div className='space-y-6'>
          <h3 className='text-2xl font-bold text-red-600 mb-6'>Contact Information</h3>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <FaPhone className='w-5 h-5 text-red-500' />
              <a href='tel:0338724974' className='hover:text-red-400 transition-colors'>
                033 872 4974
              </a>
            </div>
            <div className='flex items-center space-x-3'>
              <FaEnvelope className='w-5 h-5 text-red-500' />
              <a href='mailto:contact@hyperframes.media' className='hover:text-red-400 transition-colors'>
                contact@hyperframes.media
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className='space-y-6'>
          <h3 className='text-2xl font-bold text-red-600 mb-6'>Connect with us</h3>
          <div className='flex space-x-6'>
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-400 hover:text-red-500 transition-colors duration-300'
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} HyperFrames Production. All rights reserved.
      </div>
    </footer>
  );
}
