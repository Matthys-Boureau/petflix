import { PropsWithChildren } from "react";
import style from './Badge.module.scss'

export default function Badge({ children }: PropsWithChildren) {
    return (
        <span className={style.container}>{children}</span>
    )
}