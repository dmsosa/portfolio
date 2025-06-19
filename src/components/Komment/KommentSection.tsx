import { useParams } from "react-router-dom";
import useKomment from "../../hooks/useKomment";
import KommentInput from "./KommentInput";
import { TKomment } from "../../data/types";
import { useAuth } from "../../context/AuthContext";
import KommentArray from "../Artikel/KommentArray";
import { FaUserSlash } from "react-icons/fa";

export default function KommentSection() {
    const { slug } = useParams(); //slug um Kommentar zu greifen
    const { isAuth, loggedUser } = useAuth(); //auth und loggedUser, um Neues Komment zu kontrollieren
    const limit = 4;
    const { loadingKomment, kommentArray, kommentAnzahl, setKommentDatei, setOffsetKomment } = useKomment( { slug,  limit });
    //Wenn neues KommentInput, dann handler (setKommentDatei(prev + neues komment))
    const handleNeuesKomment = (komment: TKomment) => {
        setKommentDatei({ kommentAnzahl: kommentAnzahl + 1, kommentArray: [...kommentArray, komment] });
    }

    return (
        <div className="content content-full-width">
            {isAuth ? 
                <div className="d-flex justify-content-center align-items-center flex-column w-80 mx-auto bg-2 border">
                    <label>Leave a comment</label>
                    <KommentInput slug={slug} author={loggedUser!.username} setParentData={handleNeuesKomment}/>
                </div>
                :
                <div className="d-flex justify-content-center align-items-center flex-column bg-1 border mb-2">
                    <h4 className="text-center">You're not logged in</h4>
                    <FaUserSlash className="fs-5 mb-1"/>
                    <p className="text-center w-80 mx-auto">Register to share comments!</p>
                </div>
                }
                <KommentArray loading={loadingKomment} array={kommentArray} kommentAnzahl={kommentAnzahl} setArrayData={setKommentDatei} limit={limit} setOffset={setOffsetKomment}/>
        </div>
    )
}