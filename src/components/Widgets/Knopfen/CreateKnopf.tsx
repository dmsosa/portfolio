import { Link } from "react-router-dom";
import { TArtikel } from "../../../data/types";

import { FaNewspaper } from "react-icons/fa";

function CreateKnopf({ state } : { state?: Partial<TArtikel> }) {
    
    return <Link role='button' className='btn btn-primary' to='/editor' state={state}><FaNewspaper/><span className="ms-3">Neue Artikel</span></Link>
}
export default CreateKnopf;