import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Layout from './components/layout/layout.jsx';
import Home from './pages/home/home';
import Services from './pages/services/services';
import Rental from './pages/rental/rental';
import Portfolio from './pages/portfolio/portifolio.jsx';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          <Route path={ROUTES.RENTAL} element={<Rental />} />
          <Route path={ROUTES.PORTFOLIO} element={<Portfolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
