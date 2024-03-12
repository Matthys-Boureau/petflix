import { StaticImageData } from "next/image";
import style from "./Card.module.scss";
import Image from "next/image";
import Link from "next/link";
import kermit from "./assets/kermit.png"

export type cardPropsType = {
    title: string;
    description: string;
    thumbnail: string | StaticImageData;
    href?: string;
}

export default function Card({ ...card }: cardPropsType) {

    return (
        card.href ?
            <Link className={style.container} href={card.href}><Content {...card} /></Link> :
            <article className={style.container}><Content {...card} /></article>
    )
}

function Content({ thumbnail, title, description }: cardPropsType) {
    return (
        <>
            <Image src={kermit} alt={title} placeholder="blur" />
            <div className={style.content}>
                <h3>{title}</h3>
                {description && <p>{description}</p>}
            </div>
        </>
    )
}