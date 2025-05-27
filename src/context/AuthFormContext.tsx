import { createContext, ReactNode, useContext, useState } from "react";

export type TAuthFormStatus = {
    visible: boolean,
    flipped: boolean,
}
export type TAuthFormContext = {
    visible: boolean,
    flipped: boolean,
    setAuthFormContext: React.Dispatch<React.SetStateAction<TAuthFormStatus>>,
}
const FormContext = createContext<TAuthFormContext | null>(null);

export default function authFormContext() {
    const authFormContext = useContext(FormContext);
        if (!authFormContext) {
            throw new Error('Kein FORM-Context gefunden!');
        }
        return authFormContext;
}
export function FormContextProvider({ children }: { children: ReactNode[] | ReactNode }) {
    const [{ visible, flipped }, setAuthFormContext ] = useState<TAuthFormStatus>({visible: false, flipped: false});
    return (<FormContext.Provider value={{visible, flipped, setAuthFormContext}}>
                {children}
            </FormContext.Provider>)
}
