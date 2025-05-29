import { createContext, ReactNode, useContext, useState } from "react";

export type TAuthFormStatus = {
    visible: boolean,
    flipped: boolean,
    authFormMessage: string,
}
export type TAuthFormContext = {
    visible: boolean,
    flipped: boolean,
    authFormMessage: string,
    setAuthFormContext: React.Dispatch<React.SetStateAction<TAuthFormStatus>>,
}
const FormContext = createContext<TAuthFormContext | null>(null);

export default function useAuthFormContext() {
    const authFormContext = useContext(FormContext);
        if (!authFormContext) {
            throw new Error('Kein FORM-Context gefunden!');
        }
        return authFormContext;
}
export function AuthFormContextProvider({ children }: { children: ReactNode[] | ReactNode }) {
    const [{ visible, flipped, authFormMessage }, setAuthFormContext ] = useState<TAuthFormStatus>({visible: true, flipped: false, authFormMessage: 'Make sure you get started first!'});
    return (<FormContext.Provider value={{visible, flipped, authFormMessage, setAuthFormContext}}>
                {children}
            </FormContext.Provider>)
}
