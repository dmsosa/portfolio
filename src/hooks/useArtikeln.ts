import { useEffect, useState } from "react";
import { TArtikel } from "../data/types";
import { getArtikeln } from "../services/article.services";

export type TArtikelnDatei = {
    artikelnAnzahl: number,
    artikeln: TArtikel[],
}
export default function useArtikeln({ endpoint, username, tags, limit=3, offset=0 } : {
    endpoint: 'global' | 'feed' | 'favoriter' | 'author',
    username?: string | undefined, 
    tags?: string | undefined,
    limit?: number | undefined,
    offset?: number | undefined,
    oldest?: boolean | undefined,
}) {

    const [ artikelnDatei, setArtikelnDatei ] = useState<TArtikelnDatei>({ artikelnAnzahl: 0, artikeln: []});
    const [ loading, setLoading ] = useState< boolean >(false);
    const { artikelnAnzahl, artikeln } = artikelnDatei;
    useEffect(() => {
        setLoading(true);
        //headers greifen
        getArtikeln({headers: {}, endpoint, username, tags, limit, offset })
        .then((artikelnDatei) => setArtikelnDatei(artikelnDatei))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));

    }, [endpoint, username, tags, limit, offset]);

    return  { loading, artikelnAnzahl, artikeln, setArtikelnDatei }
}