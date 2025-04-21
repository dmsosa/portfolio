import { createContext, useContext } from "react";

//Context
export interface CreateContextOptions {
    strict?: boolean,
    errorMessage?: string,
    name?: string
}

type CreateContextReturn<T> = [React.Provider<T>, () => T]

export function createStrictContext<ContextType>(options: CreateContextOptions = {}) {
    const {
        errorMessage = "nutztKontext muss in ein kontextAnbieter sein!",
        name,
      } = options;
    const Context = createContext<ContextType | undefined>(undefined);
    Context.displayName = name;

    function useCreatedContext() {
        const context = useContext(Context);
        if (!context) {
            throw new Error(errorMessage);
        }
        return context;
    }
    return [Context.Provider, useCreatedContext] as CreateContextReturn<ContextType>;
}


//Cookies
export function setCookie(cname: string, cvalue: unknown, exdays: number ){ 
    const d = new Date();
    d.setDate(d.getTime() + (exdays*24*60*60*1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = `${cname}=${cvalue}; ${expires}; path=/`
} 
export function getCookie(cname: string){ 
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return ""; 
}

export function dateToString(date: Date) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' } as const;
    return new Intl.DateTimeFormat('de-DE', options).format(new Date(date));
}