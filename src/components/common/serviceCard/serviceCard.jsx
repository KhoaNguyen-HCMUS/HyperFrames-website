import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function ServiceCard({ img, title, description, slug, className }) {
  return (
    <Link to={`/dich-vu/${slug}`} className={`block ${className}`}>
      <div className='bg-[#1A1A1A] rounded-lg overflow-hidden shadow hover:shadow-lg transition-all duration-300 flex flex-col h-full'>
        {/* Image */}
        <div className='relative w-full aspect-[4/3]'>
          <img src={img} alt={title} className='absolute top-0 left-0 w-full h-full object-cover' />
        </div>

        {/* Text */}
        <div className='p-4 flex flex-col'>
          <h3 className='text-lg font-bold text-white mb-2 line-clamp-2'>{title}</h3>
          {description && <p className='text-sm text-gray-100 line-clamp-3'>{description}</p>}
        </div>
      </div>
    </Link>
  );
}

ServiceCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
};
