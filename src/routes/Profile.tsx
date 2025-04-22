import { useParams } from "react-router-dom";
// import { TBenutzer } from "../data/types";
// import boy from "../assets/img/boy.png";
import BenutzerInfo from "../components/Benutzer/BenutzerInfo";
import ArtikelListe from "../components/Artikel/ArtikelArray";
import useArtikeln from "../hooks/useArtikeln";
import { useAuth } from "../context/AuthContext";
import useProfile from "../hooks/useProfile";
import EndpunktToggler from "../components/Widgets/EndpunktToggler";
import { useEndpunkt } from "../context/EndpunktContext";
import BenutzerArray from "../components/Benutzer/BenutzerArray";
import useBenutzer from "../hooks/useBenutzer";

export default function Profile() {
    const { username } = useParams();
    const { headers } = useAuth();
    const { entity, endpunkt } = useEndpunkt();

    const { loadingArtikeln, artikeln, artikelnAnzahl, setArtikelnDatei, setOffsetArtikeln } = useArtikeln({ headers, endpunkt });
    const { loadingBenutzer, benutzerArray, benutzerAnzahl, setBenutzerDatei, setOffsetBenutzer } = useBenutzer( { headers, endpunkt });
    const { loading, profile } = useProfile({ headers, username });
    return loading ?
        <div>Loading</div> 
        :
        profile ?
        <>
            <div className="main-bg">
                <div className="align-self-end w-100 px-5 py-3">
                    <div className="row d-flex justify-content-between w-100">
                        <BenutzerInfo benutzer={profile}>
                            <div className="d-flex justify-content-center align-items-center">
                                <button className="btn btn-primary me-3">Follow</button>
                            </div>
                        </BenutzerInfo>
                    </div>
                </div>
            </div>
            <EndpunktToggler endpunkte={entity === 'artikel' ? ['author', 'favorite'] : ['feed', 'followers']}/>
            <div>
                { entity === 'artikel' ?
                <ArtikelListe loading={loadingArtikeln} array={artikeln} artikelAnzahl={artikelnAnzahl} setArrayData={setArtikelnDatei} setOffset={setOffsetArtikeln} />
                    :
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} benutzerAnzahl={benutzerAnzahl} setArrayData={setBenutzerDatei} setOffset={setOffsetBenutzer}/>
            }
            </div>
        </>
        :
        <div>kein nutzer</div>
    
}