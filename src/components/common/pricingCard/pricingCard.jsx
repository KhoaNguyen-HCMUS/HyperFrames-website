import PropTypes from 'prop-types';

const PricingCard = ({ name, price, duration, features }) => {
  return (
    <div className='flex flex-col bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105'>
      <div className='p-6 bg-red-600'>
        <h3 className='text-2xl font-bold text-white'>{name}</h3>
        <p className='mt-2 text-xl font-semibold text-white'>{price}</p>
        <p className='text-gray-200'>{duration}</p>
      </div>

      <div className='p-6 flex-grow'>
        <ul className='space-y-4'>
          {features.map((feature, index) => (
            <li key={index} className='flex items-center text-gray-300'>
              <svg className='w-5 h-5 text-red-500 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M5 13l4 4L19 7' />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className='p-6 bg-gray-900'>
        <button className='w-full py-3 px-6 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors'>
          Liên Hệ Ngay
        </button>
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
