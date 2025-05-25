import { Link } from "react-router-dom";
import { TBenutzer } from "../../../data/types";

import { FaGear } from "react-icons/fa6";

function SettingsKnopf({ state } : { state?: Partial<TBenutzer> }) {
    
    return <Link role='button' className='link' to={`/dashboard/settings/`} state={state}><FaGear/></Link>
}
export default SettingsKnopf;