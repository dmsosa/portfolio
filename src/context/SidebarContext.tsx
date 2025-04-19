import { createContext, ReactNode, useContext, useEffect, useState } from "react";

export type TSidebarContext = {
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    navWidth: number,
    setNavWidth: React.Dispatch<React.SetStateAction<number>>
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
    const viewportWidth = window.innerWidth;
    const [expanded, setExpanded] = useState(true);
    const [navWidth, setNavWidth] = useState(viewportWidth);

    useEffect(() => {
        const nav = document.getElementById("sidebar-nav");
        const header = document.querySelector("header")  as HTMLDivElement;
        const main = document.querySelector("main")  as HTMLDivElement;
        const mainContent = document.querySelector(".main-content") as HTMLDivElement;

        if (!nav) return;
        if (!expanded) {
            nav.style.setProperty('--nav-width', '0px');
            header.style.setProperty('--main-width', 'calc(100vw)');
            main.style.setProperty('--main-width', 'calc(100vw)');
            mainContent.style.setProperty('--margin-left', '255px');
            mainContent.style.setProperty('--margin-right', '55px');
            mainContent.style.setProperty('--main-content-width', '1fr');
        } else {
            nav.style.setProperty('--nav-width', '255px');
            header.style.setProperty('--main-width', 'calc(100vw - 255px)');
            main.style.setProperty('--main-width', 'calc(100vw - 255px)');
            mainContent.style.setProperty('--margin-left', '1fr');
            mainContent.style.setProperty('--margin-right', '1fr');
            mainContent.style.setProperty('--main-content-width', '1fr');
        }

    }, [ expanded ])
    return  (
    <SidebarContext.Provider value={{ expanded, setExpanded, navWidth, setNavWidth }}>
        {children}
    </SidebarContext.Provider>)
};