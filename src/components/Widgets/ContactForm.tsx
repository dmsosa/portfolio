import { ChangeEvent, FormEvent, useState } from "react";
import FieldsetForm from "../Forms/FieldsetForm";

export default function ContactForm() {
    const [{ email, message }, setForm ] = useState({ email: '', message: '' });
    const [ fieldErrorMessages, setFieldErrorMessages ] = useState<{[key:string]: string[]}>({ email: [], message: [] });

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement> ) => {
            const name = e.currentTarget.name;
            const value = e.currentTarget.value;
            setFieldErrorMessages((prev) => ({...prev, [name]:[]}))
            setForm((prev) => ({...prev, [name]: value}))
        }
    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, message)
    }
    return (
            <form className="form mb-4 w-100 w-md-80 mx-auto">
                <FieldsetForm 
                id="contact-email"
                name="email"
                labelText="Your email"
                type="email"
                value={email}
                required
                onChange={handleChange}
                errorMessages={fieldErrorMessages['email']}
                />
                <FieldsetForm 
                id="contact-message"
                name="message"
                labelText="I would love to receive your message, try it out!"
                type="textarea"
                rows={4}
                cols={50}
                value={message}
                required
                onChange={handleChange}
                errorMessages={fieldErrorMessages['message']}
                />
                <button type="submit" className="btn btn-primary w-50 mx-auto">Send</button>
            </form>        
    )
}