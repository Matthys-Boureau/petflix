"use client"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from './Select.module.scss'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'

export type OptionPropsTypes = {
    key: number,
    value: string | number,
    label: string
}

export type SelectPropsTypes = {
    label?: string,
    required?: boolean,
    name: string,
    defaultValue?: string | number,
    options: OptionPropsTypes[],
    disabledResearch?: boolean,
    change?: (e: any) => void
}

export default function Select({ label, required = true, options, name, defaultValue, change }: SelectPropsTypes) {
    const [selected, setSelected] = useState<string | number | undefined>(defaultValue);

    useEffect(() => {
        setSelected(defaultValue);
    }, [defaultValue])

    return (
        <label className={style.label}>
            {label && <p>{label}{required && <span className='star'>*</span>}</p>}
            <div className={style.container}>
                <select name={name} className={style.input} required={required} value={selected} onChange={(e) => {
                    setSelected(e.target.value);
                    change && change(e);
                }}>
                    {options.map((option: OptionPropsTypes, index: number) => <option key={index} value={option.value}>{option.label}</option>)}
                </select>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </label >
    )
}