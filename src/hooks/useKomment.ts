import { useEffect, useState } from "react";
import { TKomment } from "../data/types";
import { getArtikelKommentar } from "../services/article.services";
import { useAuth } from "../context/AuthContext";
import { kommentStaticArray } from "../data/artikel.data";

export type TKommentDatei = {
    kommentAnzahl: number; 
    kommentArray: TKomment[];
}
export default function useKomment({ slug, limit=6 } : { slug?: string, limit?: number }) {
    const [ loadingKomment, setLoading ] = useState(true);
    const [ { kommentAnzahl, kommentArray }, setKommentDatei ] = useState<TKommentDatei>({ kommentAnzahl: kommentStaticArray.length, kommentArray:  kommentStaticArray.slice(0, limit)});
    const [ offset, setOffsetKomment ] = useState(0);
    const { headers } = useAuth();
    useEffect(() => {
        if (!slug) return;
        setLoading(true);
        
        getArtikelKommentar({ headers: headers || {}, slug, limit, offset })
        .then((kommentDatei: TKommentDatei) => {
            setKommentDatei(kommentDatei);
        })
        .catch((error) => {
            console.log('Fehler bei Abrufen den Kommentar:', error);
        }
        )
        .finally(() => setLoading(false));
    }, [slug, limit, offset ]);
    
    return { loadingKomment, kommentAnzahl, kommentArray, setKommentDatei, setOffsetKomment };
}