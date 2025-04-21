import { useEffect, useState } from "react";
import { TKomment } from "../data/types";
import { getArtikelKommentar } from "../services/article.services";
import { useAuth } from "../context/AuthContext";

export type TKommentDatei = {
    kommentAnzahl: number; 
    kommentArray: TKomment[];
}

export default function useKomment({ slug } : { slug?: string }) {
    const [ loading, setLoading ] = useState(true);
    const [ { kommentAnzahl, kommentArray }, setKommentDatei ] = useState<TKommentDatei>({ kommentAnzahl: 0, kommentArray: [] });
    const [ offset, setOffset ] = useState(0);
    const { headers } = useAuth();

    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        getArtikelKommentar({ headers, slug })
        .then((kommentDatei: TKommentDatei) => {
            setKommentDatei(kommentDatei);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [slug, offset]);
    
    return { loading, kommentAnzahl, kommentArray, setOffset };
}