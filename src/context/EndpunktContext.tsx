import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

export type TEndpunktStatus = {
    entity: 'artikel' | 'benutzer';
    endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers';
} 
export type TEndpunktContext = {
    entity: 'artikel' | 'benutzer';
    endpunkt: 'global' | 'feed' | 'author' | 'favorite' | 'followers';
    setEndpunktStatus: React.Dispatch<SetStateAction<TEndpunktStatus>>;
} 

const EndpunktContext = createContext<TEndpunktContext | null>(null);

export function useEndpunkt() {
    const endpunktContext = useContext(EndpunktContext);
    if (!endpunktContext) {
        throw new Error('Kein Endpunkt-Context gefunden!');
    }
    return endpunktContext;
}
export function EndpunktContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [{ entity, endpunkt }, setEndpunktStatus ] = useState<TEndpunktStatus>({ entity: 'artikel', endpunkt: 'global'});
    useEffect(() => {
        console.log(entity, endpunkt)
    })
    return (
        <EndpunktContext.Provider value={{  entity, endpunkt, setEndpunktStatus }}>
                {children}
        </EndpunktContext.Provider>
    )
}