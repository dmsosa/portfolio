import { ChangeEvent, MouseEvent, useState } from "react";

function Kontakt() {
    const [ {name, email, subject, message } , setForm ] = useState({ name: "", email: "", subject: "", message: ""});

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const name = e.currentTarget.name;
        const val = e.currentTarget.value;
        setForm((prev) => ({...prev, [name]:val}));
    }

    const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return (
            <form className="kontakt-form" action="https://formsubmit.co/dmsosa21@outlook.com" method="POST" onSubmit={handleSubmit}>
                <fieldset>
                    <label htmlFor="name"><i className="bi bi-file-person"></i></label>
                    <input id="name" name="name" type="text" placeholder="Enter your name" onChange={handleChange}  value={name}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="name"><i className="bi bi-envelope-at"></i></label>
                    <input id="email" name="email" type="email"placeholder="Enter your email" onChange={handleChange} value={email}></input>
                </fieldset>
                <fieldset>
                    <label htmlFor="subject"><i className="bi bi-chat-dots"></i></label>
                    <input id="subject" name="subject" type="text" placeholder="Subject" onChange={handleChange} value={subject}></input>
                </fieldset>
                <textarea id="message" name="message" placeholder="...Message..." minLength={3} onChange={handleChange}  value={message}></textarea>
                <button type="submit" className="btn btn-success mx-auto d-block">Send</button>
            </form>
    )
}

export default Kontakt;