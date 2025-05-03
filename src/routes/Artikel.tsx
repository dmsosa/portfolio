import BenutzerInfo from "../components/Benutzer/BenutzerInfo";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import ArtikelKnopfe from "../components/Artikel/ArtikelKnopfe";
import KommentArray from "../components/Artikel/KommentArray";
import useArtikel from "../hooks/useArtikel";
import { ArtikelArrayPhamton, KommentArrayPhamton, PhamtonBg, PhamtonInput, PhamtonToggler } from "../components/Widgets/Phampton/Phamptons";

export default function Artikel() {
    const { slug } = useParams();
    const { loading, artikel, setArtikel } = useArtikel({ slug });
    const { loggedUser } = useAuth();
    return loading 
        ? <ArtikelPhampton />
        : 
        (
            <div className="artikel--wrap">
                <div className="row row-cols-md-2">
                    <div className="col-12 col-md-8">
                        <div className="artikel--top d-flex justify-content-start align-items-center">
                            <h1>{artikel.title}</h1>
                        </div>
                        <hr></hr>
                        <div className="artikel--desc">
                            <BenutzerInfo benutzer={artikel.author}>
                                <ArtikelKnopfe author={artikel.author} loggedUser={loggedUser} updateParentData={setArtikel} />
                            </BenutzerInfo>
                            <p>{artikel.description}</p>
                            <div className="tags">
                                <ul>
                                    {artikel.tags.map((tag) => (<li key={tag}><a>{tag}</a></li>))}
                                </ul>
                            </div>
                        </div>
                        <div className="artikel--main">
                            <p>{artikel.body}</p>
                        </div>

                    </div>
                    <KommentArray slug={slug} />
                    <div className="col col-md-4">
                        <ul>
                            <li>more articles</li>
                            <li>my cv</li>
                            <li>email</li>
                        </ul>
                    </div>
                </div>
                
            </div>
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