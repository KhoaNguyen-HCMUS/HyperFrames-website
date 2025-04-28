import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Layout from './components/layout/Layout';
import Home from './pages/home/home';
import Services from './pages/services/services';
// import ServiceDetail from './pages/Services/ServiceDetail';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
          {/* <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetail />} /> */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
