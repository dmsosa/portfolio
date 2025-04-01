import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import {  TLoggedBenutzer } from "../data/types";
import { getCurrentBenutzer } from "../services/benutzer.services";

export type TAuthStatus = {
    headers: Record<string, string> | null,
    loggedUser: TLoggedBenutzer | null,
    isAuth: boolean,
}
export type TAuthContext = {
    headers: Record<string, string> | null,
    loggedUser: TLoggedBenutzer | null,
    isAuth: boolean,
    setAuthStatus: React.Dispatch<SetStateAction<TAuthStatus>>
}
const AuthContext = createContext<TAuthContext | null>(null);

const loggedStatus = localStorage.getItem('loggedStatus');
const initStatus = loggedStatus ? JSON.parse(loggedStatus) : { headers: null, loggedUser: null, isAuth: false};


export function useAuth() {
    const authContext = useContext(AuthContext);
    if (!authContext) {
        throw new Error('Kein Auth-Context gefunden!');
    }
    return authContext;
}

export function AuthContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [ { headers, loggedUser, isAuth }, setAuthStatus ] = useState<TAuthStatus>(initStatus);

    useEffect(() => {
        if (!headers) return;
        getCurrentBenutzer(headers)
        .then((loggedBenutzer) => setAuthStatus((prev) => ({ ...prev, loggedBenutzer })))
        .catch(console.error);
    }, [ headers, setAuthStatus ])

    return <AuthContext.Provider value={{  headers, loggedUser, isAuth, setAuthStatus }}>
                {children}
            </AuthContext.Provider>
}