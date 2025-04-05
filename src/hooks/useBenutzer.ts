import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getAllBenutzer } from "../services/benutzer.services";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}

export default function useBenutzer({ headers, endpunkt, username } : {
    headers: Record<string, string>,
    endpunkt: 'global' | 'feed' | 'followers',
    username?: string | undefined, 
}) {
    const [ benutzerDatei, setBenutzerDatei ] = useState<TBenutzerDatei>({ benutzerAnzahl: 0, benutzerArray: []});
    const [ loadingBenutzer, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetBenutzer ] = useState<number>(0);
    const limit = 3;
    const { benutzerAnzahl, benutzerArray } = benutzerDatei;

    useEffect(() => {
        getAllBenutzer({ headers, endpunkt, username, limit, offset})
        .then((benutzerDatei) => {
            setBenutzerDatei(benutzerDatei)
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [ endpunkt, username, limit, offset ])

    return { loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }
}