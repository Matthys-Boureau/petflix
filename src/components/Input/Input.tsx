import style from './Input.module.scss';

export type InputPropsTypes = {
    label?: string;
    name: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    type?: 'text' | 'email' | 'number' | 'tel';
    change?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function Input({ label, name, placeholder, required = true, disabled = false, type = 'text', change }: InputPropsTypes) {
    return (
        <label className={style.label} htmlFor={name}>
            {label && <p>{label}{required && <span>*</span>}</p>}
            <input placeholder={placeholder} name={name} id={name} autoComplete='off' type={type} required={required} disabled={disabled} onChange={change && ((e) => change(e))} />
        </label>
    );
}