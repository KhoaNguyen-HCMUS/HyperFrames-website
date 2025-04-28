import Nav from './nav/nav.jsx';
import Footer from './footer/footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Nav />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
