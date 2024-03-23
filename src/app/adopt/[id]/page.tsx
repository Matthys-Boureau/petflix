import { getTypes } from "@/lib/db/types";
import AdoptForm from "./AdoptForm";
import { getAnimalById } from "@/lib/db/animals";

export default async function Upload({ params: { id } }: { params: { id: string } }) {
    const types = await getTypes();
    const animal = await getAnimalById(parseInt(id));
    return (
        <AdoptForm types={types} animal={animal} />
    );
}