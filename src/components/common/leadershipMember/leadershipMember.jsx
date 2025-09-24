export default function LeadershipMember({ name, role, imgSrc }) {
  return (
    <div className='bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20 flex flex-col items-center'>
      <div className='w-32 h-32 rounded-full overflow-hidden mb-4 border-2 border-red-500'>
        <img src={imgSrc || '/team-placeholder.jpg'} alt={name} className='w-full h-full object-cover' />
      </div>
      <h4 className='text-xl font-bold mb-2 text-center'>{name}</h4>
      <p className='text-red-500 text-center italic'>{role}</p>
    </div>
  );
}
