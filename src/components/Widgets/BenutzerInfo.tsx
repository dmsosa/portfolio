import { ReactNode } from "react";

function BenutzerInfo({ bild, username, children } : { bild: string, username: string, children?: ReactNode }) {


    return (
        <div className="benutzer--bild">
        <img src={bild} alt={`${username}'s profile image`} />
        <span>dmsosa</span>
        {children}
    </div>
    )
}

export default BenutzerInfo;