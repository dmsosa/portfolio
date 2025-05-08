import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { TKomment } from "../../data/types";
import { TKommentDatei } from "../../hooks/useKomment";
import Avatar from "../Widgets/Avatar";
import KommentInput from "./KommentInput";
import { useParams } from "react-router-dom";

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
        <div>
            <div className="d-flex justify-content-center align-items-center position-relative">
                <Avatar username={username} bild={bild} expanded={true}>
                    <span>verified {updatedAt.toISOString()}</span>
                </Avatar>
                <div className="d-flex justify-content-center align-items-center ">
                { loggedUser?.username === username ? 
                    <>
                        <button className="btn btn-info" onClick={() => setEdit(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
                        <button className="btn btn-danger" onClick={handleFollow}>Remove</button>

                    </>
                    :
                    <>
                        <button className="btn btn-info" onClick={() => setEdit(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={handleLike}>Remove</button>
                    </>
                }
                </div>
                <span className="position-absolute top-1 right-1">updated at</span>
            </div>
            { edit ? 
            <KommentInput kommentId={id} slug={slug} author={username} body={body} setParentData={handleEdit}/> 
            : 
            <div>
                <p>{body}</p>
            </div>
            }

        </div>
    )
}