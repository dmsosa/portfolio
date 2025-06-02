import { ChangeEvent, MouseEvent, useEffect, useState } from "react"

import { useLocation, useNavigate, useParams } from "react-router-dom";
import FieldsetForm from "../Forms/FieldsetForm";
import { useAuth } from "../../context/AuthContext";
import { postArtikel, putArtikel } from "../../services/article.services";
import { TApiError } from "../../utils/react-helpers";
import { artikelValidators, validate } from "../../utils/form-helpers";
import useAuthFormContext from "../../context/AuthFormContext";
import TagsInput from "../Forms/TagsInput";

export type TArtikelForm = {
    id: string | null, 
    title: string, 
    description: string, 
    body: string, 
    tags: string[],
}

const emptyForm: TArtikelForm = {
    id: null, 
    title: "", 
    description: "", 
    body: "", 
    tags: ['react', 'typescript', 'github'],
}

const noErrors: {[key:string]: string[]} = { title: [], description: [], body: [] }

export default function ArtikelEditorForm() {
    const { state } = useLocation();
    const { slug } = useParams();
    const navigate = useNavigate();
    const [ { title, description, body, tags }, setForm ] = useState<TArtikelForm>(state || emptyForm );

    const [ errorMessageForm, setErrorMessageForm ] = useState<string>('');
    const [ fieldErrorMessages, setFieldErrorMessages ] = useState<{[key:string]: string[]}>(noErrors);
    const { headers, isAuth, loggedUser } = useAuth();
    const { setAuthFormContext } = useAuthFormContext();

    useEffect(() => {
        if (!slug) return;

    }, []);

    const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
        const name = e.currentTarget.name;
        const value = e.currentTarget.value;
        setFieldErrorMessages((prev) => ({...prev, [name]:[]}))
        setForm((prev) => ({...prev, [name]: value}))
    }
    const handleTagChange = (tagsArray: string[]) => {
        setForm((prev) => ({...prev, tags: tagsArray}));
    }
    const handleSubmit = (e: MouseEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if (!isAuth || !headers || !loggedUser) {
            setAuthFormContext((prev) => ({...prev, visible: true }));
            return;
        } 
        //checkErrors/

        let validForm = true;
        let newErrorMessages: {[key:string]: string[]} = { title: [], description: [], body: [], tags: [] };
        for (const [fieldName, fieldValue] of Object.entries({ title, description, body })) {
            const validator = artikelValidators[fieldName];
            const isValid = validate(validator, fieldValue);
            if (!isValid) {
                validForm = false;
                newErrorMessages[fieldName] = validator.errorMessages;
            }
        }
        if (!validForm) {
            setFieldErrorMessages(newErrorMessages);
            return;
        }
        //request
        if (!slug) {
            postArtikel({ headers: headers!, title, description, body, tags: tags.join(",")  })
            .then((artikel) => {
                navigate(`/artikel/${artikel.slug}`)
            })
            .catch((error: TApiError) => {
                console.log(error);
                setErrorMessageForm(error.message);
            });
            //handleError
            //go zum ArtikelSeite
        } else {
            putArtikel({ headers: headers!, slug, title, description, body, tags: tags.join(",") })
            .then((artikel) => {
                navigate(`/artikel/${artikel.slug}`)
            })
            .catch((error: TApiError) => {
                console.log(error);
                setErrorMessageForm(error.message);
            });
        }
    }
    return (
            <form className="form" onSubmit={handleSubmit}>
                { errorMessageForm.length > 0 && <p>{errorMessageForm}</p>}
                <FieldsetForm 
                name="title"
                type="text"
                labelText="Title"
                value={title}
                onChange={handleChange}
                errorMessages={fieldErrorMessages.title}
                />
                <FieldsetForm 
                name="description"
                type="text"
                labelText="Description"
                value={description}
                onChange={handleChange}
                errorMessages={fieldErrorMessages.description}
                />
                <FieldsetForm 
                name="body"
                type="text"
                labelText="Content"
                value={body}
                onChange={handleChange}
                errorMessages={fieldErrorMessages.body}
                />
                <TagsInput tagsArray={tags} parentHandler={handleTagChange} tagsLimit={10}/>
                <button type="submit" className="btn btn-primary">submit</button>
            </form>
        )
}