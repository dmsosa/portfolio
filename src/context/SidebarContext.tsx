import { createContext, ReactNode, useContext, useState } from "react";

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
    const [expanded, setExpanded] = useState(false);
    const [navWidth, setNavWidth] = useState(viewportWidth);

    // useEffect(() => {
    //     const nav = document.getElementById("sidebar-nav");
    //     if (!nav) return;
    //     nav.style.setProperty('width', `${navWidth}px`);
    //     const main = document.querySelector("main")  as HTMLDivElement;
    //     if (navWidth === 0 || navWidth === viewportWidth) {
    //         main.style.setProperty('width', '100vw');
    //     } else {
    //         main.style.setProperty('width', `calc( 100vw - ${navWidth}px)`);
    //     }
    // }, [ navWidth ])
    return  (
    <SidebarContext.Provider value={{ expanded, setExpanded, navWidth, setNavWidth }}>
        {children}
    </SidebarContext.Provider>)
};