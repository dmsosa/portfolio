import { useEffect, useState } from "react";
import { TArtikel } from "../data/types";
import { getArtikeln } from "../services/article.services";
import { useAuth } from "../context/AuthContext";
import { artikelArray } from "../data/artikel.data";

export type TArtikelnDatei = {
    artikelnAnzahl: number,
    artikeln: TArtikel[],
}
export default function useArtikeln({ endpunkt, username, tags } : {
    endpunkt: 'global' | 'feed' | 'favorite' | 'author' | 'followers',
    username?: string | undefined, 
    tags?: string | undefined,
    oldest?: boolean | undefined,
}) {

    const [  { artikelnAnzahl, artikeln } , setArtikelnDatei ] = useState<TArtikelnDatei>({ artikelnAnzahl: 0, artikeln: []});
    const [ loadingArtikeln, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetArtikeln ] = useState<number>(0); 
    const { headers } = useAuth();
    const limit = 3;
    useEffect(() => {
        setLoading(true);
        //headers greifen
        getArtikeln({headers: headers || {}, endpunkt, username, tags, limit, offset })
        .then((artikelnDatei) => setArtikelnDatei(artikelnDatei))
        .catch((error) => {
            console.log('Fehler bei Abrufen den Artikeln:', error);
            setArtikelnDatei({ artikelnAnzahl: artikelArray.length, artikeln: artikelArray });
        })
        .finally(() => setLoading(false));

    }, [endpunkt, username, tags, limit, offset]);

    return  { loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }
}