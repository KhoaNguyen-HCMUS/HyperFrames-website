export default function DeviceCard({ device }) {
  return (
    <div className='bg-gradient-to-br from-red-800 to-black p-[2px] rounded-2xl hover:shadow-red-500/50 hover:scale-[1.02] transition-all duration-300'>
      <div className='bg-black rounded-2xl overflow-hidden'>
        <div className='relative group'>
          <img
            src={device.image}
            alt={device.name}
            className='w-full h-48 object-cover group-hover:opacity-90 transition duration-300'
          />
        </div>
        <div className='p-4'>
          <h3 className='text-white text-xl font-bold mb-1 tracking-wide'>{device.name}</h3>
          <p className='text-red-500 font-semibold mb-3'>
            {device.price} / {device.duration}
          </p>
          <ul className='space-y-1 text-gray-300 text-sm'>
            {device.features.map((feature, index) => (
              <li key={index} className='flex items-start'>
                <span className='text-red-500 mr-2 mt-0.5'>•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
