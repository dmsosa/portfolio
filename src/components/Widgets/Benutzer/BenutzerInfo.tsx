import { ReactNode } from "react";
import Avatar from "../Avatar";
import { TBenutzer } from "../../../data/types";

function BenutzerInfo({ benutzer, children } : { benutzer: TBenutzer, children?: ReactNode }) {

    const { bio, followersCount, image } = benutzer;

    return (
        <div>
            <Avatar bild={benutzer.image} username={benutzer.username} expanded={true} state={{ bio, followersCount, image }}/>
            <p>{benutzer.bio}</p>
            {children}
        </div>
    )
}

export default BenutzerInfo;