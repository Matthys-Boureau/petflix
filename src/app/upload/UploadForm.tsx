"use client"

import { Form, FormButtons } from "@/components/Form/Form";
import Input from "@/components/Input/Input";
import TextArea from "@/components/TextArea/TextArea";
import { animalType } from "@/lib/types";
import { useState } from "react";
import style from './layout.module.scss';
import Select from "@/components/Select/Select";
import { Button } from "@/components/Button/Button";
import { TypeType } from "@/lib/db/types";

export default function UploadForm({ types }: { types: TypeType[] }) {
    // @ts-ignore
    const options = types.map(type => ({ key: type.id, value: type.id, label: type.label }));
    const [numberOfAnimals, setNumberOfAnimals] = useState(0);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const animals = separateAllAnimals(data);
        console.log(animals);
    }

    function separateAllAnimals(data: any): animalType[] {
        const sortedAnimals = [] as animalType[];
        for (let i = 0; i < numberOfAnimals; i++) {
            sortedAnimals.push({
                name: data.get(`name-${i}`),
                age: data.get(`age-${i}`),
                species: data.get(`species-${i}`)
            });
        }
        return sortedAnimals;
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Input name="title" label="Titre" />
            <TextArea name="description" label="Description" />
            <Input name="url" label="URL" />
            <Input type="number" name="number" label="Nombre d'animaux" change={(e) => setNumberOfAnimals(parseInt(e.target.value))} />
            {/* {Array.from({ length: numberOfAnimals }).map((_, index) => (
                <div key={index} className={style.group}>
                    <h2>Animal {index + 1}</h2>
                    <Input name={`name-${index}`} label="Nom" />
                    <Input type="number" name={`age-${index}`} label="Age" />
                    <Select name={`species-${index}`} label="Espèce" options={options} />
                </div>
            ))} */}
            <FormButtons>
                <Button type="submit" variant="main">Publier</Button>
            </FormButtons>
        </Form>
    );
}