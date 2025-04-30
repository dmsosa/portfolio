import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getAllBenutzer } from "../services/benutzer.services";
import { useAuth } from "../context/AuthContext";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}

export default function useBenutzer({ endpunkt, username } : {
    endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers';
    username?: string | undefined, 
}) {
    const [ benutzerDatei, setBenutzerDatei ] = useState<TBenutzerDatei>({ benutzerAnzahl: 0, benutzerArray: []});
    const [ loadingBenutzer, setLoading ] = useState< boolean >(false);
    const [ offset, setOffsetBenutzer ] = useState<number>(0);
    const { headers } = useAuth();
    
    const limit = 3;
    const { benutzerAnzahl, benutzerArray } = benutzerDatei;

    useEffect(() => {
        getAllBenutzer({ headers, endpunkt, username, limit, offset})
        .then((benutzerDatei) => {
            setBenutzerDatei(benutzerDatei)
        })
        .finally(() => setLoading(false));
    }, [ endpunkt, username, limit, offset ])

    return { loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }
}