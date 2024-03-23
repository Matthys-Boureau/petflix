"use client"

import { Form, FormButtons } from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import { Button } from "@/components/Button/Button";
import { TypeType } from "@/lib/db/types";
import { AnimalType, getAnimalById } from "@/lib/db/animals";
import { notFound } from "next/navigation";
import Badge from "@/components/Badge/Badge";

export default function AdoptForm({ types, animal }: { types: TypeType[], animal: AnimalType }) {
    // @ts-ignore
    const options = types.map(type => ({ key: type.id, value: type.id, label: type.label }));

    if (!animal) notFound();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
    }

    return (
        <>
            <h2>Adoption de {animal.name}</h2>
            <span>{animal.name}, {animal.age} ans <Badge>{animal.Type?.label}</Badge></span>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Input name="firstname" label="Prénom" />
                <Input name="lastname" label="Nom" />
                <FormButtons>
                    <Button type="submit" variant="main">Publier</Button>
                </FormButtons>
            </Form>
        </>
    );
}