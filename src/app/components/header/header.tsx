import Link from 'next/link';
import Image from 'next/image';
import '@/css/_header.css';

export default function Header() {
  return (
    <nav className='c-header'>
      {/* Left menu */}
      <ul className='c-header__navigation'>
        <li className='c-header__navigation-link'>
          <Link href={'#'}>Home</Link>
        </li>
        <li className='c-header__navigation-link'>
          <Link href={'#'}>Adopt</Link>
        </li>
        <li className='c-header__navigation-link'>
          <Link href={'#'}>Contact</Link>
        </li>
      </ul>
      {/* Logo */}
      <div className='c-header__logo'>
      <Link href={'#'}>
        <Image
          src={'/assets/images/logo.png'}
          alt="Petflix logo"
          width={120}
          height={50}
          priority
        />
      </Link>
      </div>
      {/* Right menu */}
      <ul className='c-header__connexion'>
        <li>
          <Link href={'#'} rel="login">
            <Image
              src={'/assets/icons/not-logged.png'}
              alt="Login"
              width={20}
              height={20}
            />
          </Link>
        </li>
        <li>
          <Link href={'#'} rel="login">
            <Image
              src={'/assets/icons/not-logged.png'}
              alt="Login"
              width={20}
              height={20}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
