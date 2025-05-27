import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getAllBenutzer } from "../services/benutzer.services";
import { useAuth } from "../context/AuthContext";
import { benutzerStaticArray } from "../data/artikel.data";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}

export default function useBenutzer({ endpunkt, username } : {
    endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers';
    username?: string | undefined, 
}) {
    const [ { benutzerAnzahl, benutzerArray }, setBenutzerDatei ] = useState<TBenutzerDatei>({ benutzerAnzahl: 0, benutzerArray: []});
    const [ loadingBenutzer, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetBenutzer ] = useState<number>(0);
    const { headers } = useAuth();
    const limit = 3;
    useEffect(() => {
        getAllBenutzer({ headers, endpunkt, username, limit, offset})
        .then((benutzerDatei) => {
            setBenutzerDatei(benutzerDatei)
        })
        .catch((error) => {
            console.log('Fehler bei Abrufen den Benutzer:', error);
            setBenutzerDatei({ benutzerAnzahl:  benutzerStaticArray.length, benutzerArray: benutzerStaticArray });
        })

        .finally(() => setLoading(false));
    }, [ endpunkt, username, limit, offset ])

    return { loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }
}