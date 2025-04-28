import { Link } from 'react-router-dom';

export default function ServiceCard({ img, title, slug, className }) {
  return (
    <Link to={`/dich-vu/${slug}`} className={`block ${className}`}>
      <div className='bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300'>
        <img src={img} alt={title} className='w-full h-48 object-cover' />
        <div className='p-6'>
          <h3 className='text-xl font-semibold mb-2 text-white'>{title}</h3>
        </div>
      </div>
    </Link>
  );
}
