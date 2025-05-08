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
    const { loading, kommentArray, kommentAnzahl, setKommentDatei, setOffset } = useKomment({ slug }); //kommentArray und Anzahl

    //Wenn neues KommentInput, dann handler (setKommentDatei(prev + neues komment))

    const handleNeuesKomment = (komment: TKomment) => {
        setKommentDatei({ kommentAnzahl: kommentAnzahl + 1, kommentArray: [...kommentArray, komment] });
    }

    return (
        <>
            <KommentArray loading={loading} array={kommentArray} kommentAnzahl={kommentAnzahl} setArrayData={setKommentDatei} setOffset={setOffset}/>
            <div className="content-full-width">
                {isAuth ? 
                <>
                    <h1>Lass ein Komm</h1>
                    <KommentInput slug={slug} author={loggedUser!.username} setParentData={handleNeuesKomment}/>
                </>
                :
                <>
                    <div className="d-flex justify-content-center align-items-center flex-column w-80 mx-auto">
                        <h1 className="text-center">Du bist nicht gelogt</h1>
                        <FaUserSlash className="fs-1 mb-1"/>
                        <div className="d-flex justify-content-center align-items-center flex-column">
                            <p className="text-center w-80 mx-auto">Melden sich an, um kommentar zu teilen!</p>
                        </div>

                    </div>
                </>
                } 
            </div>
        </>
    )
}