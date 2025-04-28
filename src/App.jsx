import './App.css';
import ResponsiveNavbar from './components/nav/nav.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <ResponsiveNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
