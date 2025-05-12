import LogoCard from '../../common/logoCard/logoCard';

const OurClients = () => {
  const clients = [
    { name: 'Client 1', logo: '/logo.png', style: 'dark' },
    { name: 'Client 2', logo: '/logo.png', style: 'light' },
    { name: 'Client 1', logo: '/logo.png', style: 'dark' },
    { name: 'Client 2', logo: '/logo.png', style: 'light' },
    { name: 'Client 1', logo: '/logo.png', style: 'dark' },
    { name: 'Client 2', logo: '/logo.png', style: 'light' },
  ];

  return (
    <section className='py-16 px-8 bg-black'>
      <h2 className='text-4xl font-bold text-center text-red-500 mb-12'>Our Trusted Clients</h2>
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center'>
        {clients.map((client, index) => (
          <LogoCard key={index} logo={client.logo} name={client.name} variant={client.style} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
