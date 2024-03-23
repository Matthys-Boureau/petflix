import { AnimalType } from "@/lib/db/animals";
import Badge from "../Badge/Badge";
import style from './AnimalInline.module.scss'

export default function AnimalInline({ animal }: { animal: AnimalType }) {
    if (!animal) return null;
    return (
        <div className={style.container}>
            <p>{animal.name}, {animal.age} {animal.age <= 1 ? "an" : "ans"}</p>
            <Badge>{animal.Type?.label}</Badge>
            {animal.Adoption[0] && <Badge>Adopté</Badge>}
        </div>
    )
}