import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getAllBenutzer } from "../services/benutzer.services";
import { useAuth } from "../context/AuthContext";
import { benutzerStaticArray } from "../data/artikel.data";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}

export default function useBenutzer({ endpunkt, username, limit=6 } : {
    endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers';
    username?: string | undefined, 
    limit?: number,
}) {
    const [ { benutzerAnzahl, benutzerArray }, setBenutzerDatei ] = useState<TBenutzerDatei>({ benutzerAnzahl: benutzerStaticArray.length, benutzerArray: benutzerStaticArray.slice(0, limit)});
    const [ loadingBenutzer, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetBenutzer ] = useState<number>(0);
    const { headers } = useAuth();
    useEffect(() => {
        getAllBenutzer({ headers, endpunkt, username, limit, offset})
        .then((benutzerDatei) => {
            setBenutzerDatei(benutzerDatei)
        })
        .catch((error) => {
            console.log('Fehler bei Abrufen den Benutzer:', error);
        })

        .finally(() => setLoading(false));
    }, [ endpunkt, username, limit, offset ])

    return { loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }
}