import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-black text-white pt-12 pb-8 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-bold text-red-500 mb-4'>Thông tin liên hệ</h3>
          <p className='mb-2'>HyperFrames Production</p>
          <p className='mb-2'>Địa chỉ: 8 đường 43 Hiệp Bình Chánh, Tp. Thủ Đức, TP.HCM, Việt Nam</p>
          <p className='mb-2'>
            Điện thoại:{' '}
            <a href='tel:0338724974' className='text-red-400 hover:underline'>
              033 872 4974
            </a>
          </p>
          <p>
            Email:{' '}
            <a href='mailto:contact@hyperframes.media' className='text-red-400 hover:underline'>
              contact@hyperframes.media
            </a>
          </p>
        </div>

        <div>
          <h3 className='text-xl font-bold text-red-500 mb-4'>Dịch vụ</h3>
          <ul className='space-y-2'>
            <li>
              <Link to='/dich-vu/livestream' className='hover:text-red-400 transition'>
                Livestream
              </Link>
            </li>
            <li>
              <Link to='/dich-vu/quay-phim' className='hover:text-red-400 transition'>
                Quay phim
              </Link>
            </li>
            <li>
              <Link to='/dich-vu/chup-hinh' className='hover:text-red-400 transition'>
                Chụp hình
              </Link>
            </li>
            <li>
              <Link to='/dich-vu/cho-thue-thiet-bi' className='hover:text-red-400 transition'>
                Cho thuê thiết bị
              </Link>
            </li>
          </ul>
        </div>

        {/* Mạng xã hội */}
        <div>
          <h3 className='text-xl font-bold text-red-500 mb-4'>Kết nối với chúng tôi</h3>
          <ul className='space-y-2'>
            <li>
              <a href='https://www.facebook.com/hyperframesprod' className='hover:text-red-400 transition'>
                Facebook
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400 transition'>
                YouTube
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400 transition'>
                Instagram
              </a>
            </li>
            <li>
              <a href='#' className='hover:text-red-400 transition'>
                Zalo
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-gray-500 text-sm mt-12'>
        © {new Date().getFullYear()} HyperFrames Production. All rights reserved.
      </div>
    </footer>
  );
}
