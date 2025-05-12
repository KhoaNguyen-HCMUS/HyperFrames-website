import PropTypes from 'prop-types';

const LogoCard = ({ logo, name, variant = 'light' }) => {
  return (
    <div className='relative group'>
      {/* Rotating border */}
      <div
        className={`
		  absolute inset-0 rounded-full
		  bg-gradient-to-r from-red-500 via-red-600 to-red-500
		  animate-spin-slow group-hover:pause
		`}
      />

      {/* Counter-rotating content */}
      <div
        className={`
		  relative w-36 h-36 rounded-full 
		  flex items-center justify-center 
		  transition-all duration-300 ease-in-out 
		  cursor-pointer
		  animate-reverse-spin group-hover:pause
		  ${variant === 'light' ? 'bg-gray-200' : 'bg-black'} 
		  ${variant === 'light' ? 'shadow-lg shadow-red-900/50' : 'shadow-xl shadow-red-600/30'}
		  m-[3px]
		`}
      >
        <img
          src={logo}
          alt={`${name} logo`}
          className={`
			  max-w-[70%] max-h-[70%] object-contain
			  transition-transform duration-300 
			  group-hover:scale-110
			`}
        />
      </div>
    </div>
  );
};

LogoCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']),
};

export default LogoCard;
