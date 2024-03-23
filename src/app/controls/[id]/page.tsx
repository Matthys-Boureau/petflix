import AnimalInline from "@/components/AnimalInline/AnimalInline";
import Badge from "@/components/Badge/Badge";
import { getControlById } from "@/lib/db/controls";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const animal = await getControlById(parseInt(id));
    const adopter = animal?.Adoption[0].Adopter;
    if (!animal || !adopter) notFound();
    return (
        <>
            <h2>Contrôle du {animal.Adoption[0].controlDate.toLocaleDateString()}</h2>
            <address>
                <p>Adoptant :</p>
                <p>{adopter.firstname} {adopter.lastname}</p>
                <p>{adopter.email}</p>
                <p>{adopter.address} {adopter.street} {adopter.city}</p>
            </address>
            <AnimalInline animal={animal} />
            <p>Adopté le : {animal.Adoption[0].adoptedAt.toLocaleDateString()}</p>
        </>
    )
}