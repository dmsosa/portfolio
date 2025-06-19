import mainbg from "../assets/img/mainbg.jpg"
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArtikelPhamton } from "../components/Widgets/Phamton/Phamton";
import Avatar from "../components/Widgets/Avatar";
import ArtikelKnopf from "../components/Widgets/Knopfen/ArtikelKnopf";
import KommentSection from "../components/Komment/KommentSection";
import { useEffect, useState } from "react";
import { TArtikel, TBenutzer } from "../data/types";
import { artikelObject } from "../data/artikel.data";
import { getArtikel } from "../services/article.services";
import useArtikeln from "../hooks/useArtikeln";
import useBenutzer from "../hooks/useBenutzer";
import { useEndpunkt } from "../context/EndpunktContext";
import ArtikelArray from "../components/Artikel/ArtikelArray";
import BenutzerArray from "../components/Benutzer/BenutzerArray";

const defaultArtikel = artikelObject['arcu-et-pede-nunc-sed'];

export default function Artikel() {
    //Artikel Daten
    const { slug } = useParams();
    const [ artikel, setArtikel ] = useState<TArtikel>(defaultArtikel);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { entity, endpunkt } = useEndpunkt();
    const { headers } = useAuth();

    const limit = 3;

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        getArtikel({ headers: headers || {}, slug })
        .then((artikelData) => setArtikel(artikelData))
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [ slug, artikel])

    //Artikel Handling
    const handleFollow = (benutzer: TBenutzer) => {
        setArtikel((prev) => ({...prev, author: benutzer}));
    }
    const handleFav = (artikel: TArtikel) => {
        setArtikel(artikel);
    }
    //Artikeln und Benutzer Array
    const { loadingArtikeln, artikeln, artikelnAnzahl, setArtikelnDatei, setOffsetArtikeln } = useArtikeln({ endpunkt, limit});
    const { loadingBenutzer, benutzerArray, benutzerAnzahl, setBenutzerDatei, setOffsetBenutzer } = useBenutzer( { endpunkt, limit });

    return loading 
        ? <ArtikelPhamton />
        : 
        (
            <>
            {/* ArtikelHeroSection */}
            <div className="content position-relative d-flex flex-column align-items-center justify-content-end h-500 content-full-width px-5">
                <div className="main-bg index-1">
                    <img src={mainbg} alt={`artikeln Hintergrund`} />
                </div>
                <div className="d-flex justify-content-start align-items-center pb-2 px-3 index-2 align-self-md-end w-100">
                    <Avatar expanded={true} username={artikel.author.username} bild={artikel.author.image}/>
                    <div className="d-flex justify-content-center align-items-center ms-3">
                        <ArtikelKnopf artikel={artikel} handleFav={handleFav} handleFollow={handleFollow}/>
                    </div>
                </div>
            </div>
            {/* //////////////////////////////////////////// */}
            {/* ArtikelTitleBodyDescriptionSection */}
            <div className="content py-4">
                <div >
                    <h1 className="text-center">{artikel.title}</h1>
                    <p className="text-center">{artikel.description}</p>
                    <p className="text-center">{artikel.body}</p>
                </div>
            </div>
            {/* //////////////////////////////////////////// */}
            {/* ArtikelKommentSection */}
            <KommentSection />
            {/* //////////////////////////////////////////// */}
            <div className="content">
                <h3>Keep reading</h3>
                { entity === 'artikel' ?
                <ArtikelArray loading={loadingArtikeln} array={artikeln} artikelAnzahl={artikelnAnzahl} setArrayData={setArtikelnDatei} limit={limit} setOffset={setOffsetArtikeln} />
                    :
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} benutzerAnzahl={benutzerAnzahl} setArrayData={setBenutzerDatei} limit={limit} setOffset={setOffsetBenutzer}/>
                }
            </div>
            {/* //////////////////////////////////////////// */}
            </>
        )
        
}

