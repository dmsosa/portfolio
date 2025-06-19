import { ChangeEvent, HTMLInputTypeAttribute, ReactNode } from "react"

export default function FieldsetForm({ id, name, type, labelText, value, onChange, errorMessages, children, required=false, rows, cols } : { 
    id: string, 
    name: string, 
    type: HTMLInputTypeAttribute,
    labelText: string,
    value: string | number | readonly string[] | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void,
    errorMessages: string[],
    children?: ReactNode,
    required?: boolean,
    rows?: number,
    cols?: number
 }) {
    return (
        <fieldset className={`fieldset bg-1 ${errorMessages.length > 0 && 'fieldset-error'} ${value && errorMessages.length < 1 && 'fieldset-valid'}`}>
            { type === 'textarea' ? 
            <textarea className="bg-transparent" id={id} name={name} placeholder="" value={value} required={required} onChange={onChange} rows={rows} cols={cols}></textarea>
            :
            <input className="bg-transparent" id={id} name={name} type={type} placeholder="" value={value} required={required} onChange={onChange}/>
            }
            
            <label htmlFor={'editor-' + name}>{labelText}</label>
            {errorMessages.map((error) => <span className="error-message">{error}</span>)}
            { children }
        </fieldset>
    )
}