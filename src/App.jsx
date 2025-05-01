import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/routes';
import Layout from './components/layout/layout.jsx';
import Home from './pages/home/home';
import Services from './pages/services/services';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.SERVICES} element={<Services />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
