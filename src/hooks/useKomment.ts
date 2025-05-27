import { useEffect, useState } from "react";
import { TKomment } from "../data/types";
import { getArtikelKommentar } from "../services/article.services";
import { useAuth } from "../context/AuthContext";
import { kommentStaticArray } from "../data/artikel.data";

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
        const kommentArraySlice = Math.floor(Math.random() * (kommentArray.length - 6))
        getArtikelKommentar({ headers: headers || {}, slug, limit: 5, offset })
        .then((kommentDatei: TKommentDatei) => {
            setKommentDatei(kommentDatei);
        })
        .catch((error) => {
            console.log('Fehler bei Abrufen den Kommentar:', error);
            setKommentDatei({ kommentAnzahl: kommentStaticArray.length, kommentArray: kommentStaticArray.slice(kommentArraySlice, kommentArraySlice + 5) });
        }
        )
        .finally(() => setLoading(false));
    }, [slug, offset]);
    
    return { loading, kommentAnzahl, kommentArray, setKommentDatei, setOffset };
}

//fetch artikel bei slug
//wenn artikel, dann artikelSetzen
//wennn fehler, dann setze auf default