import Link from 'next/link';
import style from './Header.module.scss';

type navigationItemType = {
    label: string;
    href: string;
};

const navigation: navigationItemType[] = [
    { label: "Accueil", href: "/" },
    { label: "Contrôles", href: "/controls" },
    { label: "Mettre en ligne", href: "/upload" },
    // { label: "Mon compte", href: "/sign-in" }
];

export default function Header() {
    return (
        <header className={style.container}>
            <ul>
                {navigation.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </header>
    );
}
