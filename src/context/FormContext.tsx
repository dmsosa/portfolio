import { createContext, ReactNode, useContext, useState } from "react";

export type TFormStatus = {
    visible: boolean,
    flipped: boolean,
}
export type TFormContext = {
    visible: boolean,
    flipped: boolean,
    setFormContext: React.Dispatch<React.SetStateAction<TFormStatus>>,
}
const FormContext = createContext<TFormContext | null>(null);

export default function useFormContext() {
    const formContext = useContext(FormContext);
        if (!formContext) {
            throw new Error('Kein FORM-Context gefunden!');
        }
        return formContext;
}
export function FormContextProvider({ children }: { children: ReactNode[] | ReactNode }) {
    const [{ visible, flipped }, setFormContext ] = useState<TFormStatus>({visible: false, flipped: false});
    return (<FormContext.Provider value={{visible, flipped, setFormContext}}>
                {children}
            </FormContext.Provider>)
}
