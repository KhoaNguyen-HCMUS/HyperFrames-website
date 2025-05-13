import PropTypes from 'prop-types';

const LogoCard = ({ logo, name }) => {
  return (
    <div className='relative group'>
      {/* Rotating border */}
      <div
        className={`
		  absolute inset-0 rounded-full
		`}
      />

      {/* Counter-rotating content */}
      <div
        className={`
		  relative w-36 h-36 
		  flex items-center justify-center 
		  transition-all duration-300 ease-in-out 
		  cursor-pointer

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
