import BenutzerInfo from "../components/Benutzer/BenutzerInfo";
import { TArtikel } from "../data/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArtikel } from "../services/article.services";
import { useAuth } from "../context/AuthContext";
import ArtikelKnopfe from "../components/Artikel/ArtikelKnopfe";
import KommentArray from "../components/Artikel/KommentArray";

export default function Artikel() {
    const { slug } = useParams();
    const [ artikel, setArtikel ] = useState<TArtikel | undefined>(undefined);
    const [ loading, setLoading ] = useState<boolean>(true);
    const { headers, loggedUser } = useAuth();
    useEffect(() => {
        if (!slug) return;
        getArtikel({ headers, slug })
        .then((artikelDatei) => {
            setArtikel(artikelDatei);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [slug]);
    return loading || !artikel ?
        <div>Loading</div>
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