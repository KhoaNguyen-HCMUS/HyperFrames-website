import { useState } from 'react';
import Banner from '../../components/common/banner/banner.jsx';
import About from '../../components/common/about/about.jsx';
import StatsSection from '../../components/common/statsSection/statsSection.jsx';
import OurClients from '../../components/common/ourClients/ourClients.jsx';
import CinematicIntro from '../../components/common/cinematicIntro/cinematicIntro';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      <div className='home-container'>
        <Banner />
        <About />
        <StatsSection />
        <OurClients />
      </div>

      {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
    </>
  );
}
