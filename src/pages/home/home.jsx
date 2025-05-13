import Banner from '../../components/common/banner/banner.jsx';
import About from '../../components/common/about/about.jsx';
import StatsSection from '../../components/common/statsSection/statsSection.jsx';
import OurClients from '../../components/common/ourClients/ourClients.jsx';
export default function Home() {
  return (
    <div>
      <Banner />
      <About />
      <StatsSection />
      <OurClients />
    </div>
  );
}
