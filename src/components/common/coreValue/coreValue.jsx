export default function CoreValue({ letter, title, description }) {
  return (
    <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-8 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 group'>
      <div className='bg-gradient-to-br from-red-600 to-red-800 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto text-2xl font-bold group-hover:scale-110 transition-transform duration-300'>
        {letter}
      </div>
      <h3 className='text-xl font-bold mb-4 text-center'>{title}</h3>
      <p className='text-gray-400 text-center'>{description}</p>
    </div>
  );
}
