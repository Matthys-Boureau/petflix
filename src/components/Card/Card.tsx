import { PropsWithChildren } from "react";
import style from "./Card.module.scss";
import Link from "next/link";

export type cardPropsType = {
    title: string;
    href?: string;
}

export default function Card({ ...card }: cardPropsType & PropsWithChildren) {

    return (
        card.href ?
            <Link className={style.container} href={card.href}><Content {...card}>{card.children}</Content></Link> :
            <article className={style.container}><Content {...card}>{card.children}</Content></article>
    )
}

function Content({ title, children }: cardPropsType & PropsWithChildren) {
    return (
        <div className={style.content}>
            <h3>{title}</h3>
            {children}
        </div>
    )
}