import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FieldsetForm from "./FieldsetForm";
import { useNavigate } from "react-router-dom";

type TLoginForm = {
    email: string,
    password: string,
}
export default function LoginForm() {

    const navigate = useNavigate();
    const [ { email, password}, setForm ] = useState<TLoginForm>({ email: "", password: ""});
    const [ errorMessage, setErrorMessage ] = useState<string>('');
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
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            console.log(loggedStatus);
            navigate('/');
        })
        .catch((error: Error) => {
            console.log(error);
            setErrorMessage(error.message);
        });

    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <p className={`form-error ${errorMessage.length > 1 && 'visible'}`}>{errorMessage}</p>
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