import { createContext, ReactNode, SetStateAction, useContext, useState } from "react";

type TTagsContext = {
    tags: string[];
    setTags: React.Dispatch<SetStateAction<string[]>>;
}

const TagsContext = createContext<TTagsContext | null>(null);

export function useTags() {
    const context = useContext(TagsContext);
    if (!context) {
        throw new Error('Kein Tag-Context gefunden!');
    }
    return context;
}

export function TagsContextProvider({ children }: { children: ReactNode | ReactNode[] }) {
    const [ tags, setTags ] = useState<string[]>([]);

    return <TagsContext.Provider value={{  tags, setTags }}>
                {children}
            </TagsContext.Provider>
}