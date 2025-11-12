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
      <div className='max-w-7xl mx-auto flex flex-wrap justify-center gap-8'>
        {clients.map((client, index) => (
          <div key={index} className='w-1/2 md:w-1/4 lg:w-1/6 flex justify-center'>
            <LogoCard logo={client.logo} name={client.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurClients;
