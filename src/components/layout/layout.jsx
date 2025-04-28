import Nav from './nav/nav.jsx';
import Footer from './footer/footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='flex-grow bg-gradient-to-b from-gray-900 to-black text-white'>{children}</main>
      <Footer />
    </div>
  );
}
