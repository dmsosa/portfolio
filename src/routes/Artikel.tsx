import mainbg from "../assets/img/mainbg.jpg"
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import useArtikel from "../hooks/useArtikel";
import { ArtikelArrayPhamton, KommentArrayPhamton, PhamtonBg, PhamtonInput, PhamtonToggler } from "../components/Widgets/Phamton/Phamton";
import Avatar from "../components/Widgets/Avatar";
import ArtikelKnopf from "../components/Widgets/Knopfen/ArtikelKnopf";

export default function Artikel() {
    const { slug } = useParams();
    const { loading, artikel, setArtikel } = useArtikel({ slug });
    const { loggedUser } = useAuth();


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
                    <Avatar expanded={true} username={artikel.author.username} bild={artikel.author.image}/>
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