"use client"

import Link from 'next/link';
import style from './Header.module.scss';
import { useAuthContext } from '@/contexts/AuthContext';
import { useEffect, useMemo } from 'react';

type navigationItemType = {
    label: string;
    href: string;
};

const navigation: navigationItemType[] = [
    { label: "Accueil", href: "/" },
    { label: "Mettre en ligne", href: "/upload" }
]

export default function Header() {

    const { isSignedIn } = useAuthContext();
    return (
        <header className={style.container}>
            <ul>
                {navigation.map((item, index) => (
                    <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                    </li>
                ))}
                {isSignedIn && <li><Link href="/controls">Contrôles</Link></li>}
                {isSignedIn ? <li><Link href="/account">Mon compte</Link></li> : <li><Link href="/sign-in">Connexion</Link></li>}
            </ul>
        </header>
    );
}
