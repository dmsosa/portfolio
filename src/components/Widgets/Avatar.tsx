import { Link } from "react-router-dom";
import { TBenutzer } from "../../data/types";

function Avatar({ bild, username, state, expanded=false, vertical=false, children  } : { bild: string, username: string, expanded?: boolean, vertical?: boolean, state?: Partial<TBenutzer>, children?: React.ReactNode }) {


    return (
        <Link className={vertical ? 'link avatar avatar--vertical':'link avatar'} to={`/dashboard/profile/${username}`} state={state}>
            <img src={bild} alt={`${username}'s profile image`} />
            {expanded && <span>{username}</span>}
            {children}
        </Link>
    )
}

export default Avatar;