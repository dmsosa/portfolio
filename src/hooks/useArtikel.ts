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
        getArtikel({ headers, slug })
        .then((artikelData) => {
            setArtikel(artikelData);
        })
        .catch(() => {
            console.error('Error fetching profile data');
            setArtikel(artikelArray[0]);
        })
        .finally(() => setLoading(true));
    }, [ slug ])

    return { loading, artikel, setArtikel }
}