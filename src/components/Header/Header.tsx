import Link from 'next/link';
import style from './Header.module.scss';

type navigationItemType = {
    label: string;
    href: string;
};

const navigation: navigationItemType[] = [
    { label: "Home", href: "/" },
    { label: "Upload", href: "/upload" },
    { label: "Account", href: "/sign-in" }
];

export default function Header() {
    return (
        <header className={style.container}>
            <ul>
                {
                    navigation.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))
                }
            </ul>
        </header>
    );
}
