import mainbg from "../assets/img/mainbg.jpg"
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArtikelArrayPhamton, KommentArrayPhamton, PhamtonBg, PhamtonInput, PhamtonToggler } from "../components/Widgets/Phamton/Phamton";
import Avatar from "../components/Widgets/Avatar";
import ArtikelKnopf from "../components/Widgets/Knopfen/ArtikelKnopf";
import KommentSection from "../components/Komment/KommentSection";
import { useEffect, useState } from "react";
import { TArtikel, TBenutzer } from "../data/types";
import { artikelObject } from "../data/artikel.data";
import { getArtikel } from "../services/article.services";


export default function Artikel() {
    //Artikel Daten
    const { slug } = useParams();
    const [ artikel, setArtikel ] = useState<TArtikel>(artikelObject['arcu-et-pede-nunc-sed']);
    const [ loading, setLoading ] = useState<boolean>(false);
    const { headers } = useAuth();
    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        getArtikel({ headers: headers || {}, slug })
        .then((artikelData) => {
            setArtikel(artikelData);
        })
        .catch((error) => {
            console.error('Error fetching artikel data', error);
        })
        .finally(() => setLoading(false));
    }, [ slug, artikel])

    //Artikel Handling
    const handleFollow = (benutzer: TBenutzer) => {
        setArtikel((prev) => ({...prev, author: benutzer}));
    }
    const handleFav = (artikel: TArtikel) => {
        setArtikel(artikel);
    }
    // Artikeln und Benutzer Array

    return loading 
        ? <ArtikelPhampton />
        : 
        (
            <>
            <div className="content entity-content content-full-width">
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
            <div className="content py-6">
                <div >
                    <h1 className="text-center">{artikel.title}</h1>
                    <p className="text-center">{artikel.description}</p>
                    <p className="text-center">{artikel.body}</p>
                </div>
                <KommentSection />
                <div>
                    <h1>Read more</h1>
                    <KommentArrayPhamton/>
                </div>
            </div>
            </>
        )
        
}

function ArtikelPhampton() {
    return (
        <>
            <PhamtonBg/>
            <div className="content py-6 px-2 p-md-0">
                <div className="phamton phamton-square w-75 h-6 ms-1"></div>
                <div className="phamton phamton-square w-80 mx-auto h-500 mt-3"></div>
                <div className="d-flex justify-content-start align-items-center mt-1">
                    <div className="phamton phamton-square w-6"></div>
                    <div className="phamton phamton-square w-6 ms-3"></div>
                    <div className="phamton phamton-square w-6 ms-3"></div>
                    <div className="phamton phamton-square w-6 ms-3"></div>
                    <div className="phamton phamton-square w-6 ms-3"></div>
                </div>
                <PhamtonToggler/>
                <ArtikelArrayPhamton/>
                <PhamtonInput/>
                <KommentArrayPhamton/>
            </div>
        </>
        

    )
}