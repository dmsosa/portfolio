import { ChangeEvent, MouseEvent, useState } from "react";
import FieldsetForm from "./FieldsetForm";
import { settingsValidators, validate } from "../../utils/form-helpers";
import { putBenutzer } from "../../services/benutzer.services";
import { useAuth } from "../../context/AuthContext";

export type TSettingsForm = {
    username: string, 
    email: string, 
    bio: string,
    image: string,   
}
const noErrors: {[key:string]: string[]} = { username: [], email: [], bio: [], password: [], image: [] }

export default function SettingsForm() {
    const { isAuth, loggedUser, headers } = useAuth();
    const [ form, setForm ] = useState<TSettingsForm>({
        username: loggedUser.username,
        email: loggedUser.email,
        bio: loggedUser.bio || "",
        image: loggedUser.image
    });
    const { username, email, bio, image } = form;

    const [ fieldsetErrors, setFieldsetErrors ] = useState<{[key:string]: string[]}>(noErrors);
    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>  ) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setForm((prev) => ({...prev, [name]: value}))
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
            e.preventDefault();
            let validForm = true;
            const newErrorMessages = noErrors;
            for ( const [ name, value] of Object.entries(form) ) {
                const validator = settingsValidators[name];
                validate(validator, value);
                if (!validator.isValid) {
                    validForm = false;
                    newErrorMessages[name] = validator.errorMessages;
                }
            }
            if (!validForm) {
                setFieldsetErrors(newErrorMessages);
                return;
            } else {
                // putBenutzer()
            }
        }
    return <form className="form" onSubmit={handleSubmit}>
           <FieldsetForm
           id="settings-username"
           type="text"
           labelText="Username"
           name="username"
           value={username}
           onChange={handleChange}
           required
           errorMessages={fieldsetErrors['username']}
           ></FieldsetForm>  
            <FieldsetForm
           id="settings-email"
           type="text"
           labelText="Email address"
           name="email"
           value={email}
           onChange={handleChange}
           required
           errorMessages={fieldsetErrors['email']}
           ></FieldsetForm>  
            <FieldsetForm
           id="settings-bio"
           type="textarea"
           labelText="Biography"
           name="bio"
           value={bio}
           onChange={handleChange}
           required
           errorMessages={fieldsetErrors['bio']}
           ></FieldsetForm>  
            <FieldsetForm
           id="settings-image"
           type="text"
           labelText="Profile image"
           name="image"
           value={image}
           onChange={handleChange}
           required
           errorMessages={fieldsetErrors['image']}
           ></FieldsetForm>  
           <div className="d-flex justify-content-start align-items-center gap-2 w-100 mt-3">
                <button type="submit" className="btn btn-primary">confirm changes</button>   
                <button type="submit" className="btn btn-danger">cancel</button>   
           </div>
    </form>
}