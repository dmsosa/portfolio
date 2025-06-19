import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TKomment } from "../../data/types";
import { TKommentDatei } from "../../hooks/useKomment";
import Avatar from "../Widgets/Avatar";
import KommentInput from "./KommentInput";
import { useParams } from "react-router-dom";
import { dateToString } from "../../utils/react-helpers";

export default function KommentInfo({ id, username, bild, updatedAt, body, kommentArray, setParentData } :  { id: string, username: string ,  bild:string, updatedAt: Date, body:string, kommentArray: TKomment[], setParentData:  React.Dispatch<React.SetStateAction<TKommentDatei>>}) {
    
    const { slug } = useParams();
    const { loggedUser } = useAuth();
    const [ edit, setEdit ] = useState(false);


    const handleEdit = (komment: TKomment) => {
        console.log(komment)
        const neuesArray = kommentArray.map((komm) => {
            if (komm.id === komment.id) {
                return {...komm, body: komment.body, updatedAt: komment.updatedAt }
            } else return komm;
        })
        setParentData((prev) =>({ ...prev, kommentArray: neuesArray }));
        setEdit(false);
    }
    const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }
    const handleFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }
    const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(e)
    }

    return ( 
        <div className="border p-2 px-3 mb-3 bg-2">
            <div className="d-flex justify-content-between align-items-center position-relative">
                <Avatar username={username} bild={bild} expanded={true}>
                    <span className="position-absolute bottom-0 left-25">verified</span>
                </Avatar>
                <span className="position-absolute top-0 right-0 fs-7">{`updated at: ${dateToString(updatedAt)}`}</span>
            </div>
            <div>
                { edit ? 
                    <KommentInput kommentId={id} slug={slug} author={username} body={body} setParentData={handleEdit}/> 
                : 
                    <textarea className="bg-1 p-2 my-2 w-100 border color-inherit textarea-fixed" rows={5} value={body} readOnly></textarea>
                }
            </div>
            <div className="d-flex justify-content-end align-items-center gap-3">
                { loggedUser?.username === username ? 
                    <>
                        <button className="btn btn-info" onClick={() => setEdit(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={handleRemove}>Remove</button>

                    </>
                    :
                    <>
                        <button className="btn btn-info" onClick={handleLike}>Like</button>
                        <button className="btn btn-danger" onClick={handleFollow}>Follow</button>
                    </>
                }
            </div>
        </div>
    )
}