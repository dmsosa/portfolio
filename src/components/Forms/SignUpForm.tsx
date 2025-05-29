import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import FieldsetForm from "./FieldsetForm";


const noErrors: {[key:string]: string[]} = { username: [], email: [], password: [], }

export default function SignUpForm() {

    const [ { username, email, password}, setForm ] = useState({ username: "", email: "", password: ""});
    const [ viewPassword, setViewPassword ] = useState<boolean>(false);
    const  navigate  = useNavigate();
    //Errors
    const [ errorMessageForm, setErrorMessageForm ] = useState<string>('');
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
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            navigate('/dashboard');
        })
        .catch((error: Error) => {
            console.log(error);
            setErrorMessageForm(error.message);
        });

    }
    return (
        <form onSubmit={handleSubmit} className="form modal-form-front">
            <p className={`form-error ${errorMessageForm.length > 1 && 'visible'}`}>{errorMessageForm}</p>
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