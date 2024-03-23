"use client"

import { Button } from "@/components/Button/Button";
import { useAuthContext } from "@/contexts/AuthContext";
import { notFound } from "next/navigation";

export default function Account() {
    const { isSignedIn, setIsSignedIn } = useAuthContext();
    if (!isSignedIn) notFound();
    return (
        <>
            <p>Mon compte</p>
            <Button click={() => setIsSignedIn(false)}>Déconnexion</Button>
        </>
    );
}