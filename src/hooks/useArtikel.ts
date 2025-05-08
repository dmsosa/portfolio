import { useEffect, useState } from "react";
import { TArtikel } from "../data/types";
import { useAuth } from "../context/AuthContext";
import { artikelArray } from "../data/artikel.data";
import { getArtikel } from "../services/article.services";


export default function useArtikel({ slug } : {
    slug?: string, 
}) {
    const [ artikel, setArtikel ] = useState<TArtikel>(artikelArray[0]);
    const [ loading, setLoading ] = useState< boolean >(false);
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

    return { loading, artikel: artikel, setArtikel }
}