import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FieldsetForm from "./FieldsetForm";
import { useNavigate } from "react-router-dom";
import { TFormMessage } from "../../data/types";

type TLoginForm = {
    email: string,
    password: string,
}

export default function LoginForm() {

    const navigate = useNavigate();
    const [ { email, password}, setForm ] = useState<TLoginForm>({ email: "", password: ""});
    const [ formMessage, setFormMessage ] = useState<TFormMessage>({ isError: true, message: ''});
    const [ viewPassword, setViewPassword ] = useState<boolean>(false);



    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const name = e.target.name;
        const val = e.target.value;
        setForm((prev) => ({ ...prev, [name]:val }))
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
        e.preventDefault();
        loginBenutzer({ email, password })
        .then((loggedStatus) => {
            setFormMessage({ isError: false, message: 'Welcome back!'})
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            console.log(loggedStatus);
            navigate('/');
            window.location.reload();
        })
        .catch((error: Error) => {
            console.log(error);
            setFormMessage({ isError: true, message: error.message});
        });

    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <p className={`${formMessage.isError ? 'form-error':'form-message'} ${formMessage.message.length > 1 && 'visible'}`}>{formMessage.message}</p>
            <FieldsetForm
                name="email"
                labelText="Email-Addresse"
                type="email"
                required
                onChange={handleChange}
                value={email}
                errorMessages={[]}
            ></FieldsetForm>
            <FieldsetForm
                name="password"
                labelText="Passwort"
                required
                type={viewPassword ? 'text':'password'}
                onChange={handleChange}
                value={password}
                errorMessages={[]}
            >
                <a className="input--eye" onMouseDown={() => setViewPassword(true)} onMouseUp={() => setViewPassword(false)}>
                    {viewPassword ? <FaEye/>:<FaEyeSlash/>}
                </a>
            </FieldsetForm>
            <button type="submit" className="btn btn-primary align-self-start">Login</button>
        </form>
    )
};