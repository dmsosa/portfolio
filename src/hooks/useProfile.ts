import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getProfile } from "../services/benutzer.services";
import { useAuth } from "../context/AuthContext";
import { benutzerArray } from "../data/artikel.data";


export default function useProfile({ username } : {
    username?: string, 
}) {
    const [ profile, setProfile ] = useState<TBenutzer | undefined>(benutzerArray[0]);
    const [ loading, setLoading ] = useState< boolean >(false);
    const { headers } = useAuth();
    useEffect(() => {
        if (!username) return;
        getProfile({ headers, username })
        .then((profileData) => {
            setProfile(profileData);
        })
        .catch(() => {
            console.error('Error fetching profile data');
            setProfile(benutzerArray[0]);
        })
        .finally(() => setLoading(false));
    }, [ username ])

    return { loading, profile, setProfile }
}