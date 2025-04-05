import { Link } from "react-router-dom";
import { TBenutzer } from "../../data/types";

function Avatar({ bild, username, state, expanded=false, vertical=false  } : { bild: string, username: string, expanded?: boolean, vertical?: boolean, state?: Partial<TBenutzer> }) {


    return (
        <Link className={vertical ? 'avatar':'avatar avatar--vertical'} to={`/profiles/${username}`} state={state}>
            <img src={bild} alt={`${username}'s profile image`} />
            <span className={expanded ? 'd-inline':'d-none'}>dmsosa</span>
        </Link>
    )
}

export default Avatar;