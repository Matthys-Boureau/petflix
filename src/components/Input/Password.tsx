'use client';

import style from '../Input/Input.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { InputPropsTypes } from '../Input/Input';

type PasswordPropsTypes = InputPropsTypes & {
    icon?: boolean;
}

export default function Password({ label, name, placeholder, icon, required = true }: PasswordPropsTypes) {
    const [showPassword, setShowPassword] = useState(false);
    const type: string = showPassword ? 'text' : 'password';

    return (
        <label className={style.label} htmlFor={name}>
            {label && <p>{label}{required && <span>*</span>}</p>}
            <div className={style.container}>
                <input placeholder={placeholder} name={name} id={name} className={style.input} autoComplete='off' type={type} required={required} />
                {icon && (
                    <div className={style.icon} onClick={() => setShowPassword(!showPassword)}>
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </div>
                )}
            </div>
        </label>
    );
}