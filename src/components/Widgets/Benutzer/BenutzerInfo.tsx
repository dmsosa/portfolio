import { ReactNode } from "react";

function BenutzerInfo({ bild, username, expanded, children } : { bild: string, username: string, expanded: boolean, children?: ReactNode }) {


    return (
        <div className="benutzer--info">
            <a href={`/profiles/${username}`}>
                <img src={bild} alt={`${username}'s profile image`} />
                <span className={expanded ? 'd-inline':'d-none'}>dmsosa</span>
            </a>
            {children}
        </div>

    )
}

export default BenutzerInfo;