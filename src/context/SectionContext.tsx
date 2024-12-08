import { createContext, ReactNode, useContext, useEffect, useState } from "react"

export type TSectionContext = {
    section: number,
    setSection: React.Dispatch<React.SetStateAction<number>>,
    sectionObjekt: { [n: number] : string }
}

const SectionContext = createContext<TSectionContext | null >(null);

export function useScroll() {
    const context = useContext(SectionContext);
    if (context === null || context === undefined) {
        throw new Error("Context hast kein Provider");
    }
    return context;
}



export function ScrollProvider({ children }: { children: ReactNode | ReactNode[] }) {

    const [ section , setSection ] = useState<number>(0);
    let scrolling = false;
    let size = window.innerHeight;
    let sectionObjekt: { [name:number]: string } = {};

    const handleScroll = () => {
        // window.removeEventListener("scroll", handleScroll);  
        // const scrollY = window.scrollY;
        // const currentScroll = Math.round((section) * size);
        // let nextScroll;
        // if (scrollY > currentScroll) {
        //     if (section >= 4) return;
        //     nextScroll = Math.round((section + 1) * size);
        // } else {
        //     if (section === 0) return;
        //     nextScroll = Math.round((section - 1) * size);
        // }
        
        // scrolling = true;
        // console.log(scrollY, nextScroll, currentScroll, section)
        // window.scroll(0, nextScroll);
        

    }

    useEffect(() => {
        // if (Object.keys(sectionObjekt).length < 1) {
        //     const sections = document.querySelectorAll(".bereich");
        //     for (let i = 0 ; i < sections.length ; i++ ){
        //         let section = sections[i] as HTMLDivElement;
        //         let name = section.dataset.section;
        //         if (!name) continue;
        //         sectionObjekt[i] = name;
        //     }
        // } 

        // let scrollY = window.scrollY;
        // let currentScroll = Math.round((section) * size);

        // if (scrollY === currentScroll) { 
        //     scrolling = false; 
        //     console.log("scrolled");
        // }
        // if (scrolling) return;

        // window.addEventListener("scroll", handleScroll);
    }, [ section ])

    return (
        <SectionContext.Provider value={{section, setSection, sectionObjekt}}>
            {children}
        </SectionContext.Provider>
    )
}
