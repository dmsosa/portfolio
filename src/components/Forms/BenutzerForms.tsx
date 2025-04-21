import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import FormWrapper from "./FormWrapper";

export default function BenutzerForms() {
    const [ showForm, setShowForm ] = useState<'login'|'sign-up'>('login');
    return (
        <div>
            <ul>
                <li><a onClick={() => setShowForm('login')}>Login</a></li>
                <li><a onClick={() => setShowForm('sign-up')}>Sign Up</a></li>
            </ul>

            {showForm === 'login' ?
                <FormWrapper
                titel="Welcome Back!"
                untertitel="pick up where you left off!"
                onClick={() => setShowForm('sign-up')}
                linkMessage="new user? create new account!"
                >
                    <LoginForm />
                </FormWrapper>
                :
                <FormWrapper
                titel="Get started"
                untertitel="it's fun and free"
                onClick={() => setShowForm('login')}
                linkMessage="have an account? log in!"
                >
                    <SignUpForm />
                </FormWrapper>
            }
        </div>

    )
}