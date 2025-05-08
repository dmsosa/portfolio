import mainbg from "../assets/img/mainbg.jpg"
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArtikelArrayPhamton, KommentArrayPhamton, PhamtonBg, PhamtonInput, PhamtonToggler } from "../components/Widgets/Phamton/Phamton";
import Avatar from "../components/Widgets/Avatar";
import ArtikelKnopf from "../components/Widgets/Knopfen/ArtikelKnopf";
import KommentSection from "../components/Komment/KommentSection";
import { useEffect, useState } from "react";
import { TArtikel } from "../data/types";
import { artikelArray } from "../data/artikel.data";


export default function Artikel() {
    const { slug } = useParams();
    const { headers, loggedUser } = useAuth();

    const [ artikel, setArtikel ] = useState<TArtikel>(artikelArray[0]);
    const [ loading, setLoading ] = useState< boolean >(false);

    useEffect(() => {
        console.log("call", headers)
        if (!slug) return;
        setLoading(false);
        // getArtikel({ headers: headers || {}, slug })
        // .then((artikelData) => {
        //     setArtikel(artikelData);
        // })
        // .catch((error) => {
        //     console.error('Error fetching artikel data', error);
        // })
        // .finally(() => setLoading(false));
    }, [ slug ])
    return loading 
        ? <ArtikelPhampton />
        : 
        (
            <>
            <div className="content entity-content">
                <div className="main-bg index-1">
                    <img src={mainbg} alt={`artikeln Hintergrund`} />
                </div>
                <div className="d-flex justify-content-start align-items-center pb-2 px-3 index-2 align-self-md-end w-100 ms-6">
                    <Avatar expanded={true} username={'author.username'} bild={'author.image'}/>
                    <div className="d-flex justify-content-center align-items-center ms-3">
                        <ArtikelKnopf loggedUser={loggedUser} artikel={artikel} updateParentData={setArtikel}/>
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