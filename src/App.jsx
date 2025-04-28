import './App.css';
import ResponsiveNavbar from './components/nav/nav.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Services from './pages/services/services.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ResponsiveNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dich-vu' element={<Services />} />
          <Route path='/dich-vu/:serviceSlug' element={<ServiceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
