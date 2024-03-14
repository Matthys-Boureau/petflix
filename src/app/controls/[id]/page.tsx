import { getControlById } from "@/lib/db/controls";
import { getVideoById } from "@/lib/db/videos";
import { notFound } from "next/navigation";

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const animal = await getControlById(parseInt(id));
    const adopter = animal?.Adoption[0].Adopter;
    if (!animal || !adopter) notFound();
    return (
        <>
            <h2>{adopter.firstname} {adopter.lastname}</h2>
            <address>
                <p>{adopter.email}</p>
                <p>{adopter.address} {adopter.street} {adopter.city}</p>
            </address>
            <p>Contrôle le : {animal.Adoption[0].controlDate.toLocaleDateString()}</p>
            <p>Adopté le : {animal.Adoption[0].adoptedAt.toLocaleDateString()}</p>
            <p>{animal.name}, {animal.age} ans ({animal.Type?.label})</p>
        </>
    )
}