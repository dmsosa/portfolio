import { ChangeEvent, HTMLInputTypeAttribute } from "react"

export default function FieldsetForm({ name, type, labelText, value, onChange, errorMessages } : { 
    name: string, 
    type: HTMLInputTypeAttribute,
    labelText: string,
    value: string | number | readonly string[] | undefined,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    errorMessages: string[]
 }) {
    return (
        <fieldset className={`fieldset ${errorMessages.length > 0 && 'fieldset-error'} ${value && errorMessages.length < 1 && 'fieldset-valid'}`}>
            <input id={'editor-' + name} name={name} type={type} placeholder="" value={value} onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const fieldsetParent = e.currentTarget.parentElement;
                if (fieldsetParent?.classList.contains('fieldset-error')) {
                    fieldsetParent.classList.remove('fieldset-error');
                };
                onChange(e);
            }}/>
            <label htmlFor={'editor-' + name}>{labelText}</label>
            {errorMessages.map((error) => <span className="error-message">{'| ' + error}</span>)}
        </fieldset>
    )
}