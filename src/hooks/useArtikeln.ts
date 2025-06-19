import { useEffect, useState } from "react";
import { TArtikel } from "../data/types";
import { getArtikeln } from "../services/article.services";
import { useAuth } from "../context/AuthContext";
import { artikelArray } from "../data/artikel.data";

export type TArtikelnDatei = {
    artikelnAnzahl: number,
    artikeln: TArtikel[],
}
export default function useArtikeln({ endpunkt, username, tags, limit, oldest=false } : {
    endpunkt: 'global' | 'feed' | 'favorite' | 'author' | 'followers',
    username?: string | undefined, 
    tags?: string | undefined,
    limit?: number,
    oldest?: boolean,
}) {

    const [  { artikelnAnzahl, artikeln } , setArtikelnDatei ] = useState<TArtikelnDatei>({ artikelnAnzahl: artikelArray.length, artikeln: artikelArray.slice(0, limit)});
    const [ loadingArtikeln, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetArtikeln ] = useState<number>(0); 
    const { headers } = useAuth();
    const ARRAYLIMIT = limit;
    useEffect(() => {
        setLoading(true);
        console.log(oldest);
        //headers greifen
        getArtikeln({headers: headers || {}, endpunkt, username, tags, limit: ARRAYLIMIT, offset })
        .then((artikelnDatei) => setArtikelnDatei(artikelnDatei))
        .catch((error) => {
            console.log('Fehler bei Abrufen den Artikeln:', error);
        })
        .finally(() => setLoading(false));

    }, [endpunkt, username, tags, limit, offset]);

    return  { loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }
}