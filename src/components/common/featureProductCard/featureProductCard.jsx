const FeatureProductCard = ({ project }) => {
  return (
    <a
      key={project.id}
      href={project.behanceUrl}
      target='_blank'
      rel='noopener noreferrer'
      className='group block relative rounded-lg overflow-hidden h-80 cursor-pointer'
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300'></div>

      {/* Content */}
      <div className='absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300'>
        <h3 className='text-white font-bold text-lg line-clamp-2 group-hover:text-red-400 transition-colors'>
          {project.title}
        </h3>
        <p className='text-gray-300 text-sm mt-1'>{project.creator}</p>
      </div>

      {/* Badge */}
      <div className='absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        BEHANCE
      </div>
    </a>
  );
};

export default FeatureProductCard;
