import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type TSidebarContext = {
    expandedLeft: boolean,
    setExpandedLeft: React.Dispatch<React.SetStateAction<boolean>>, 
}
const SidebarContext = createContext<TSidebarContext | null >(null);

export function useSidebarContext() {
    const dashboardContext = useContext<TSidebarContext | null>(SidebarContext);
    if (!dashboardContext) {
        throw new Error('Kein SidebarContext, bittet nutzt ein Provider!');
    } else {
        return dashboardContext;
    }

}
export function SidebarContextProvider({ children } : { children: ReactNode | ReactNode[] }) {
    const [expandedLeft, setExpandedLeft] = useState( window.innerWidth >= 576 );

    useEffect(() => {
        const nav = document.getElementById("sidebar-nav");
        const header = document.querySelector("header")  as HTMLDivElement;
        const main = document.querySelector("main")  as HTMLDivElement;
        const mainContent = document.querySelector(".main-content") as HTMLDivElement;
        //setMain Width zu 100% - sidebar-left + sidebar-right
        if (!nav) return;
        if (!expandedLeft) {
            nav.style.setProperty('--nav-width', '0px');
            header.style.setProperty('--main-width', '100vw');
            main.style.setProperty('--main-width', '100vw');
            mainContent.style.setProperty('--margin-left', '255px');
            mainContent.style.setProperty('--margin-right', '15px');
            mainContent.style.setProperty('--main-content-width', 'calc(100% - var(--margin-left) - var(--margin-right))');
        } else {
            nav.style.setProperty('--nav-width', '250px');
            header.style.setProperty('--main-width', 'calc(100vw - var(--nav-width))');
            main.style.setProperty('--main-width', 'calc(100vw - var(--nav-width))');
            mainContent.style.setProperty('--margin-left', '15px');
            mainContent.style.setProperty('--margin-right', '15px');
            mainContent.style.setProperty('--main-content-width', 'calc(100% - var(--margin-left) - var(--margin-right))');
        }

    }, [expandedLeft]);
    return  (
    <SidebarContext.Provider value={{ expandedLeft, setExpandedLeft }}>
        {children}
    </SidebarContext.Provider>)
};