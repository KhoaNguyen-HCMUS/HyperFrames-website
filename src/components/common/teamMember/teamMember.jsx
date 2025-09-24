export default function TeamMember({ name, position, imgSrc }) {
  return (
    <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 min-w-[280px] flex flex-col items-center'>
      <div className='w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-red-500'>
        <img src={imgSrc || '/team-placeholder.jpg'} alt={name} className='w-full h-full object-cover' />
      </div>
      <h4 className='text-xl font-bold mb-2 text-center'>{name}</h4>
      <p className='text-gray-200 text-center mb-1'>{position}</p>
    </div>
  );
}
