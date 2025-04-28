import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

export default function Banner() {
  const banners = [
    {
      id: 1,
      url: 'https://dummyimage.com/1200x600/00aaff/ffffff&text=Welcome+to+HyperFrames',
      alt: 'Welcome Banner',
    },
    {
      id: 2,
      url: 'https://dummyimage.com/1200x600/ff00aa/ffffff&text=Professional+Photography',
      alt: 'Services Banner',
    },
    {
      id: 3,
      url: 'https://dummyimage.com/1200x600/aa00ff/ffffff&text=High+Quality+Prints',
      alt: 'Products Banner',
    },
  ];

  return (
    <Swiper
      modules={[Autoplay]}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className='w-7xl justify-items-center h-[600px] object-cover'
    >
      {banners.map((banner) => (
        <SwiperSlide key={banner.id}>
          <img src={banner.url} alt={banner.alt} className='w-full h-[600px] object-cover' />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
