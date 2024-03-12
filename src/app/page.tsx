import Image from 'next/image';
import '@/css/app.css';
import Header from '@/components/header';
import '@/css/reset.css';
import '@/css/variables.css';
import '@/css/font.css'

export default function Home() {
  return (
    <main className='main'>
      <Header />
    </main>
  );
}
