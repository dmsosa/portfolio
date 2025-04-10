import { Link } from "react-router-dom";
import { TArtikel, TBenutzer } from "../../../data/types";
import { FaEdit } from "react-icons/fa";

function EditKnopf({ to, state } : { to: string, state?: Partial<TBenutzer> | Partial<TArtikel> }) {
    
    return <Link className='link' to={to} state={state}><FaEdit/></Link>
}
export default EditKnopf;