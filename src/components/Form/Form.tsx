import { PropsWithChildren } from 'react';
import style from './Form.module.scss'

type FormButtonPropsTypes = PropsWithChildren & {
    orientation?: "column" | "row";
}

type FormPropsTypes = PropsWithChildren & {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    onChange?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export function Form({ children, onSubmit, onChange }: FormPropsTypes) {
    return (
        <form className={style.form} onSubmit={onSubmit} onChange={onChange} noValidate>
            {children}
        </form>
    )
}

export function FormButtons({ children, orientation = 'row' }: FormButtonPropsTypes) {
    return (
        <div className={style.buttons} style={{ flexDirection: orientation }}>
            {children}
        </div>
    )
}