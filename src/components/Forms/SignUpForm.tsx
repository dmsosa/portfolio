import { ChangeEvent, MouseEvent, useState } from "react";
import { loginBenutzer } from "../../services/benutzer.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { emailValidator, passwordValidator, usernameValidator } from "../../utils/form-helpers";



export default function SignUpForm() {

    const [ { username, email, password}, setForm ] = useState({ username: "", email: "", password: ""});
    const [ viewPassword, setViewPassword ] = useState<boolean>(false);

    //Errors
    const [ apiError, setApiError ] = useState<string>('');
    const [ usernameErrors, setUsernameErrors ] = useState<string[]>([]);
    const [ emailErrors, setEmailErrors ] = useState<string[]>([]);
    const [ passwordErrors, setPasswordErrors ] = useState<string[]>([]);

    const validateFields = () => {
        usernameValidator.isValid(username);
        emailValidator.isValid(email);
        passwordValidator.isValid(password);
        if (usernameValidator.errors.length > 0) {
            setUsernameErrors(usernameValidator.errors);
        }
        if (emailValidator.errors.length > 0) {
            setEmailErrors(emailValidator.errors);
        }
        if (passwordValidator.errors.length > 0) {
            setPasswordErrors(passwordValidator.errors);
        }
        if (usernameValidator.errors.length > 0 || emailValidator.errors.length > 0 || passwordValidator.errors.length > 0) {
            return false;
        } else return true;
    }

    const cleanErrors = (field: string) => {
        switch (field) {
            case "username": {
                setUsernameErrors([]);
                break;
            }
            case "email": {
                setEmailErrors([]);
                break;
            }
            case "password": {
                setPasswordErrors([]);
                break;
            }
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const name = e.target.name;
        cleanErrors(name);
        const val = e.target.value;
        setForm((prev) => ({ ...prev, [name]:val }))
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if (!validateFields()) return;
        loginBenutzer({ email, password })
        .then((loggedStatus) => {
            localStorage.setItem('loggedStatus', JSON.stringify(loggedStatus));
            // window.location.reload();
        })
        .catch((error: Error) => {
            console.log(error);
            setApiError(error.message);
        });

    }
    return (
        <form onSubmit={handleSubmit}>
            <p className={`form-error ${apiError.length > 1 && 'visible'}`}>{apiError}</p>
            <fieldset className={`fielset ${email.length < 1 && 'error'}`}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" name="username" value={username} onChange={handleChange}/>
                {usernameErrors.map((error) => <p className="fieldset-error">{error}</p>)}
            </fieldset>
            <fieldset className={`fielset ${email.length < 1 && 'error'}`}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={email} onChange={handleChange}/>
                {emailErrors.map((error) => <p className="fieldset-error">{error}</p>)}
            </fieldset>
            <fieldset className={`fielset ${email.length < 1 && 'error'}`}>
                <label htmlFor="password">Password</label>
                <div className="position-relative">
                    <input id="password" type={viewPassword ? 'text':'password'} name="password" value={password} onChange={handleChange}/>
                    <a className="eye" onMouseDown={() => setViewPassword(true)} onMouseUp={() => setViewPassword(false)}>
                        {viewPassword ? <FaEye/>:<FaEyeSlash/>}
                    </a>
                </div>
                {passwordErrors.map((error) => <p className="fieldset-error">{error}</p>)}
            </fieldset>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
    )
};