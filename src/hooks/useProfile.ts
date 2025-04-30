import { useEffect, useState } from "react";
import { TBenutzer } from "../data/types";
import { getProfile } from "../services/benutzer.services";
import { useAuth } from "../context/AuthContext";

export type TBenutzerDatei = {
    benutzerAnzahl: number,
    benutzerArray: TBenutzer[],
}


const defaultBenutzer: TBenutzer = {
    username: 'benutzername',
    bio: 'bio',          
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s',
    isFollowing: false,
    followersCount: 21,
    followingCount: 32,
    createdAt: new Date(),
    updatedAt: new Date(),
}

export default function useProfile({ username } : {
    username?: string, 
}) {
    const [ profile, setProfile ] = useState<TBenutzer | undefined>(defaultBenutzer);
    const [ loading, setLoading ] = useState< boolean >(false);
    const { headers } = useAuth();
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