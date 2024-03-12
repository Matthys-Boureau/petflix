import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Button.module.scss';
import React, { PropsWithChildren } from 'react';
import { Url } from 'next/dist/shared/lib/router/router';
import Link from 'next/link';

type PropsTypes = {
    variant?: undefined | 'main';
    title?: string;
    full?: boolean;
    glass?: boolean;
    disabled?: boolean;
    loading?: boolean;
} & PropsWithChildren

export type buttonPropsTypes = PropsTypes & {
    type?: 'button' | 'submit' | 'reset';
    click?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export type linkPropsTypes = PropsTypes & {
    href: Url;
    target?: "_blank" | "_self" | "_parent" | "_top";
}

export function Button({ type = 'button', children, variant, disabled = false, title, full = false, click, glass }: buttonPropsTypes) {
    const variantClass = variant ? style[variant] : '';
    const fullClass = full ? style.full : '';
    const glassClass = glass ? style.glass : '';
    const childElements = React.Children.toArray(children);
    const iconOnly = childElements.every(child => React.isValidElement(child) && (child.type === FontAwesomeIcon));
    const buttonClass = `${style.button} ${variantClass} ${fullClass} ${glassClass} ${iconOnly ? style.icon : ''}`;

    return (
        <button className={buttonClass} disabled={disabled} title={title} onClick={click} type={type}>
            {children}
        </button>
    )
}

export function LinkButton({ children, variant, title, full = false, href, glass, disabled, target = "_self" }: linkPropsTypes) {
    const variantClass = variant ? style[variant] : '';
    const glassClass = glass ? style.glass : '';
    const fullClass = full ? style.full : '';
    const childElements = React.Children.toArray(children);
    const iconOnly = childElements.every(child => React.isValidElement(child) && (child.type === FontAwesomeIcon));
    const disabledClass = disabled ? style.disabled : '';
    const buttonClass = `${style.button} ${variantClass} ${fullClass} ${glassClass} ${iconOnly ? style.icon : ''} ${disabledClass}`;

    return (
        <Link href={href} className={buttonClass} title={title} target={target}>
            {children}
        </Link>
    )
}
