import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FieldsetForm from "./FieldsetForm";
import { TFormMessage } from "../../data/types";


const noErrors: {[key:string]: string[]} = { username: [], email: [], password: [], }

export default function SignUpForm() {

    const [ { username, email, password}, setForm ] = useState({ username: "", email: "", password: ""});
    const [ viewPassword, setViewPassword ] = useState<boolean>(false);
    const  navigate  = useNavigate();
    //Errors
    const [ formMessage, setFormMessage ] = useState<TFormMessage>({ isError: true, message: ''});
    const [ fieldErrorMessages, setFieldErrorMessages ] = useState<{[key:string]: string[]}>(noErrors);

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const name = e.target.name;
        const val = e.target.value;
        setForm((prev) => ({ ...prev, [name]:val }))
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
        e.preventDefault();
        loginBenutzer({ email, password })
        .then((loggedStatus) => {
            setFormMessage({ isError: false, message: 'You created an account!'})
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            navigate('/');
            window.location.reload();
        })
        .catch((error: Error) => {
            console.log(error);
            setFormMessage({ isError: true, message: error.message});
        });

    }
    return (
        <form onSubmit={handleSubmit} className="form modal-form-front">
            <p className={`${formMessage.isError ? 'form-error':'form-message'} ${formMessage.message.length > 1 && 'visible'}`}>{formMessage.message}</p>
            <FieldsetForm
            type="text"
            name="username"
            labelText="Username"
            required
            value={username}
            onChange={handleChange}
            errorMessages={fieldErrorMessages['username']}
            ></FieldsetForm>
            <FieldsetForm
            type="email"
            name="email"
            labelText="Email Addresse"
            required
            value={email}
            onChange={handleChange}
            errorMessages={fieldErrorMessages['email']}
            ></FieldsetForm>
            <FieldsetForm
            type="password"
            name="password"
            labelText="Passwort"
            required
            value={password}
            onChange={handleChange}
            errorMessages={fieldErrorMessages['password']}
            >
                    <a className="input--eye" onMouseDown={() => setViewPassword(true)} onMouseUp={() => setViewPassword(false)}>
                    {viewPassword ? <FaEye/>:<FaEyeSlash/>}
                </a>
            </FieldsetForm>
            <button type="submit" className="btn btn-primary d-block align-self-start">Sign In</button>
        </form>
    )
};