import { InputPropsTypes } from '@/components/Input/Input';
import style from './TextArea.module.scss';

export default function TextArea({ label, name, placeholder, required = true, disabled = false, change, rows = 6 }: InputPropsTypes & { rows?: number }) {
    return (
        <label className={style.label} htmlFor={name}>
            {label && <p>{label}{required && <span className='star'>*</span>}</p>}
            <textarea rows={rows} placeholder={placeholder} name={name} id={name} className={style.input} autoComplete='off' required={required} disabled={disabled} onChange={change && ((e) => change(e))} />
        </label>
    );
}