import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav>
      {/* Left menu */}
      <ul>
        <li>
          <Link href={'#'}>Home</Link>
        </li>
        <li>
          <Link href={'#'}>Adopt</Link>
        </li>
        <li>
          <Link href={'#'}>Contact</Link>
        </li>
      </ul>
      {/* Logo */}
      <div>
        <Image
          src={'/assets/images/next.svg'}
          alt="Petflix logo"
          width={100}
          height={50}
          priority
        />
      </div>
      {/* Right menu */}
      <ul>
        <li>
          <Link href={'#'} rel="login">
            <Image
              src={'/assets/icons/not-logged.png'}
              alt="Login"
              width={25}
              height={25}
            />
          </Link>
        </li>
        <li>
          <Link href={'#'} rel="login">
            <Image
              src={'/assets/icons/not-logged.png'}
              alt="Login"
              width={25}
              height={25}
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
