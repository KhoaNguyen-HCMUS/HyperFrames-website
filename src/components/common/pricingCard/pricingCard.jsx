import PropTypes from 'prop-types';

const PricingCard = ({ name, price, duration, features }) => {
  return (
    <div className='flex flex-col bg-black rounded-xl overflow-hidden border border-red-600 shadow-[0_0_12px_#dc2626] transition-all hover:scale-105 hover:shadow-[0_0_24px_#f87171]'>
      <div className='p-8 bg-black '>
        <h3 className='text-2xl font-bold text-white mb-4'>{name}</h3>
        <p className='text-3xl font-bold text-red-500'>{price}</p>
        <p className='text-gray-400 mt-2'>{duration}</p>
      </div>

      <div className='p-8 flex-grow border-t border-red-800'>
        <ul className='space-y-5'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center text-gray-300 hover:text-white transition-colors'>
              <svg
                className='w-5 h-5 text-red-600 mr-3 flex-shrink-0'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              <span className='text-sm'>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className='p-8 bg-black/50'>
        <a
          href='https://www.facebook.com/hyperframesprod'
          target='_blank'
          rel='noopener noreferrer'
          className='block w-full py-4 px-6 bg-gradient-to-r from-red-700 to-red-600 text-white font-semibold rounded-lg hover:from-red-600 hover:to-red-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center'
        >
          Liên Hệ Ngay
        </a>
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCard;
