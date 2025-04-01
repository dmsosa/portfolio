import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type TLoginForm = {
    email: string,
    password: string,
}

export default function LoginForm() {

    const [ { email, password}, setForm ] = useState<TLoginForm>({ email: "", password: ""});
    const [ errorMessage, setErrorMessage ] = useState<string>('');
    const [ viewPassword, setViewPassword ] = useState<boolean>(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const name = e.target.name;
        const val = e.target.value;
        setForm((prev) => ({ ...prev, [name]:val }))
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
        e.preventDefault()
        loginBenutzer({ email, password })
        .then((loggedStatus) => {
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            // window.location.reload();
        })
        .catch((error: Error) => {
            console.log(error);
            setErrorMessage(error.message);
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <p className={`form-error ${errorMessage.length > 1 && 'visible'}`}>{errorMessage}</p>
            <fieldset className={`fielset ${email.length < 1 && 'error'}`}>
                <label htmlFor="email">Gib dein Email an</label>
                <input id="email" type="email" name="email" required value={email} onChange={handleChange}/>
            </fieldset>
            <fieldset className={`fielset ${email.length < 1 && 'error'}`}>
                <label htmlFor="password">Gib dein Passwort an</label>
                <input id="password" type={viewPassword ? 'text':'password'} name="password" required value={password} onChange={handleChange}/>
                <a onMouseDown={() => setViewPassword(true)} onMouseUp={() => setViewPassword(false)}>
                    {viewPassword ? <FaEye/>:<FaEyeSlash/>}
                </a>
            </fieldset>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
};