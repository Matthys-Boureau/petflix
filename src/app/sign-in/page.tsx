"use client";

import { Button } from "@/components/Button/Button";
import { Form, FormButtons } from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import Password from "@/components/Input/Password";
import { useAuthContext } from "@/contexts/AuthContext";
import { redirect } from "next/navigation";

export default function SignIn() {
    const { isSignedIn, setIsSignedIn } = useAuthContext();

    if (isSignedIn) redirect("/account");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        if (email && password) {
            setIsSignedIn(true);
            redirect("/account");
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Input name="email" label="E-mail" />
            <Password name="password" label="Password" icon />
            <FormButtons>
                <Button type="submit" variant="main">Sign in</Button>
            </FormButtons>
        </Form>
    )
}