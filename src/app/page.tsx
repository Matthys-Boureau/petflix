import Image from 'next/image';
// CSS
import '@/css/app.css';
import '@/css/reset.css';
import '@/css/variables.css';
import '@/css/font.css'
// Composant
import Header from '@/app/components/header/header';
import Footer from './components/footer/footer';

export default function Home() {
  return (
    <main className='main'>
      <Header />
      <Footer />
    </main>
  );
}
