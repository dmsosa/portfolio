import { ReactNode } from "react";
import Avatar from "../Widgets/Avatar";
import { TBenutzer } from "../../data/types";

function BenutzerInfo({ benutzer, border=true, children } : { benutzer: TBenutzer, border?: boolean, children?: ReactNode  }) {

    const { bio, followersCount, followingCount, image } = benutzer;

    return (
        <div className={`${border ? 'border-container':''} p-2 mb-3 bg-second`}>
            <div className="d-flex justify-content-between align-items-center position-relative">
                <Avatar bild={benutzer.image} username={benutzer.username} expanded={true} state={{ bio, followersCount, image }}/>
                {children}
            </div>
            <p>{benutzer.bio}</p>
            <div className="d-flex justify-content-start align-items-center w-100 flex-wrap">
                <span>Follow: {followersCount}</span>
                <span className="ms-3">Following: {followingCount}</span>
            </div>

        </div>
    )
}

export default BenutzerInfo;