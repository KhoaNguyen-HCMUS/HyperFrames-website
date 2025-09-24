import LogoCard from '../../common/logoCard/logoCard';
import { useEffect, useState } from 'react';

const OurClients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const importLogos = async () => {
      // Get all files from logos directory
      const logoFiles = import.meta.glob('/public/clients/*.{png,jpg,jpeg,svg}');
      const logoEntries = [];

      for (const path in logoFiles) {
        const fileName = path.split('/').pop();
        const name = fileName.split('.')[0];

        logoEntries.push({
          name: name.charAt(0).toUpperCase() + name.slice(1), // Capitalize name
          logo: `/clients/${fileName}`, // Path relative to public
        });
      }

      setClients(logoEntries);
    };

    importLogos();
  }, []);

  return (
    <section className='py-16 px-8 bg-black'>
      <h2 className='text-4xl font-bold text-center text-red-500 mb-12'>Những khách hàng tiêu biểu</h2>
      <div className='max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center'>
        {clients.map((client, index) => (
          <LogoCard key={index} logo={client.logo} name={client.name} />
        ))}
      </div>
    </section>
  );
};

export default OurClients;
