import { useParams } from "react-router-dom";
// import { TBenutzer } from "../data/types";
// import boy from "../assets/img/boy.png";
import BenutzerInfo from "../components/Benutzer/BenutzerInfo";
import ArtikelListe from "../components/Artikel/ArtikelArray";
import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/Toggler/EndpunktToggler";
import { useEndpunkt } from "../context/EndpunktContext";
import BenutzerArray from "../components/Benutzer/BenutzerArray";
import useBenutzer from "../hooks/useBenutzer";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getProfile } from "../services/benutzer.services";
import { benutzerStaticArray, defaultBenutzer } from "../data/artikel.data";
import BenutzerKnopf from "../components/Widgets/Knopfen/BenutzerKnopf";


export default function Profile() {
    const { username } = useParams();
    const { entity, endpunkt } = useEndpunkt();

    //Profile Daten

    const [ profile, setProfile ] = useState<TBenutzer>(defaultBenutzer);
    const [ loading, setLoading ] = useState< boolean >(false);
    const { headers } = useAuth();
    
    
    useEffect(() => {
        if (!username) return;
        getProfile({ headers, username })
        .then((profileData) => {
            setProfile(profileData);
        })
        .catch(() => {
            console.error('Error fetching profile data');
            setProfile(benutzerStaticArray[0]);
        })
        .finally(() => setLoading(false));
    }, [ username ])

    //ProfilHandling
    const handleFollow = (benutzer: TBenutzer) => {
        setProfile(benutzer);
    }


    //Artikeln und Benutzer Array
    const { loadingArtikeln, artikeln, artikelnAnzahl, setArtikelnDatei, setOffsetArtikeln } = useArtikeln({ endpunkt });
    const { loadingBenutzer, benutzerArray, benutzerAnzahl, setBenutzerDatei, setOffsetBenutzer } = useBenutzer( { endpunkt });
    

    return loading ?
        <div>Loading</div> 
        :
        <>
            <div className="content content-full-width position-relative h-70vw bg-dark2">
                <div className="main-bg"></div>
                <div className="h-100 px-3 pb-5 d-flex justify-content-start align-items-end w-100">
                    <BenutzerInfo benutzer={profile} border={false}>
                        <BenutzerKnopf benutzer={profile} handleFollow={handleFollow}/>
                    </BenutzerInfo>
                </div>
            </div>
            <div className="content pt-4 pb-6">
                <EndpunktToggler endpunkte={entity === 'artikel' ? ['author', 'favorite'] : ['feed', 'followers']} text={entity === 'artikel' ? [`${profile.username}'s articles`, `favorites`] : ['feed', 'followers']}/>
                <div>
                    <h2 className="h2">
                        <span className="line">Keep reading!</span>
                    </h2>
                    { entity === 'artikel' ?
                    <ArtikelListe loading={loadingArtikeln} array={artikeln} artikelAnzahl={artikelnAnzahl} setArrayData={setArtikelnDatei} setOffset={setOffsetArtikeln} />
                        :
                    <BenutzerArray loading={loadingBenutzer} array={benutzerArray} benutzerAnzahl={benutzerAnzahl} setArrayData={setBenutzerDatei} setOffset={setOffsetBenutzer}/>
                }
                </div>
            </div>
        </>
    
}