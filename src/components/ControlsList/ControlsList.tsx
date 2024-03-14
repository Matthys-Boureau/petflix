"use client"

import Card from "@/components/Card/Card";
import style from './ControlsList.module.scss'
import { ControlsType } from "@/lib/db/controls";
import { useAuthContext } from "@/contexts/AuthContext";
import { notFound } from "next/navigation";

export default function ControlsList({ controls }: { controls: ControlsType }) {
    const { isSignedIn } = useAuthContext();
    if (!isSignedIn) notFound();
    return (
        <section className={style.container}>
            {controls.length > 0 ?
                <div className={style.list}>
                    {controls.map((animal, index) => (
                        animal && (
                            <Card
                                href={`/controls/${animal.id}`}
                                key={index}
                                title={animal.Adoption[0].Adopter.firstname + " " + animal.Adoption[0].Adopter.lastname}
                            >
                                <p>{animal.name} - {animal.Adoption[0].controlDate.toLocaleDateString()}</p>
                            </Card>
                        )
                    ))}
                </div> :
                <p>Auncun contrôle trouvé</p>
            }
        </section>
    )
}