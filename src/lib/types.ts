import { OptionPropsTypes } from "@/components/Select/Select";

export type speciesType = "dog" | "cat" | "bird";

export type animalType = {
    name: string;
    age: number;
    species: speciesType;
}

type AnimalOptionType = OptionPropsTypes & { value: speciesType | 'all' };

export const animalsOptions: AnimalOptionType[] = [
    {
        key: 1,
        value: "dog",
        label: "Chien"
    },
    {
        key: 2,
        value: "cat",
        label: "Chat"
    },
    {
        key: 3,
        value: "bird",
        label: "Oiseau"
    }
]