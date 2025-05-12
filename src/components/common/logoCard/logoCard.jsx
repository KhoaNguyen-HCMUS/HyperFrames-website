import PropTypes from 'prop-types';

const LogoCard = ({ logo, name, variant = 'light' }) => {
  return (
    <div
      className={`
        w-36 h-36 rounded-full flex items-center justify-center 
        transition-all duration-300 ease-in-out cursor-pointer
        hover:scale-105 group
        ${variant === 'light' ? 'bg-red-900 shadow-lg shadow-red-900/50' : 'bg-gray-900 shadow-xl shadow-red-600/30'}
      `}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className={`
          max-w-[70%] max-h-[70%] object-contain
          transition-transform duration-300 group-hover:scale-110
          brightness-0 invert
        `}
      />
    </div>
  );
};

LogoCard.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['light', 'dark']),
};

export default LogoCard;
