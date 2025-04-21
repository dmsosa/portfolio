import { Link } from "react-router-dom";
import { TBenutzer } from "../../../data/types";

import { FaGear } from "react-icons/fa6";

function SettingsKnopf({ username, state } : { username: string, state?: Partial<TBenutzer> }) {
    
    return <Link role='button' className='btn btn-secondary' to={`/dashboard/settings/${username}`} state={state}><FaGear/><span className="ms-3">Einst.</span></Link>
}
export default SettingsKnopf;