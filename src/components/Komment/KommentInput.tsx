import React, { useState } from "react";
import { TKomment } from "../../data/types";
import { postKomment, putKomment } from "../../services/article.services";
import { useAuth } from "../../context/AuthContext";

export default function KommentInput({ setParentData, slug, author, kommentId, body }: { setParentData: (komment: TKomment) => void, slug: string | undefined, author: string, body?: string, kommentId?: string }) {
    const [ value, setValue ] = useState(body || "");
    const { headers, isAuth } = useAuth();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        if (!value) return;
        setValue(value);
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(isAuth, headers)
        if (!isAuth) {
            window.alert('Du musst Authentifisiert sein!');
            return;
        } else {
            if (!slug) return;
            if (!author) return;
            if (!kommentId) {
                //neues komment
                postKomment({ headers: headers || {}, slug, author: author, body: value })
                .then((komment) => {
                    setParentData(komment);
                })
                .catch((error) => {
                    console.error(error);
                });
            } else {
                //gegebenes komment
                putKomment({ headers: headers || {}, slug, author: author, body: value, kommentId})
                .then((komment) => {
                    setParentData(komment);
                })
                .catch((error) => {
                    console.error(error);
                });
            }
        }

    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset className="fieldset">
                <input id="kommentBody" type="text" value={value} placeholder="" onChange={handleChange} name="body"/>
                <label htmlFor="kommentBody"></label>
            </fieldset>
            <button className="btn btn-primary" type="submit"></button>
        </form>
    )
}