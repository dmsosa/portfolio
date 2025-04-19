import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getProfile } from "../services/benutzer.services";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}

export default function useProfile({ headers,
    username } : {
    headers?: Record<string, string>,
    username?: string, 
}) {
    const [ profile, setProfile ] = useState<TBenutzer | undefined>(undefined);
    const [ loading, setLoading ] = useState< boolean >(false);

    useEffect(() => {
        if (!username) return;
        getProfile({ headers, username })
        .then((profileData) => {
            setProfile(profileData);
            console.log(profileData)
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }, [ username ])

    return { loading, profile, setProfile }
}