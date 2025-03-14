import { createContext, ReactNode, useContext, useState } from "react";

export type TDashboardContext = {
    expanded: boolean,
    setExpanded: React.Dispatch<React.SetStateAction<boolean>>,
    navWidth: number,
    setNavWidth: React.Dispatch<React.SetStateAction<number>>
}
const DashboardContext = createContext<TDashboardContext | null >(null);

const useDashboardContext = () => {
    const dashboardContext = useContext<TDashboardContext | null>(DashboardContext);
    if (!dashboardContext) {
        throw new Error('Kein DashboardContext, bittet nutzt ein Provider!');
    } else {
        return dashboardContext;
    }
}
export function DashboardContextProvider({ children } : { children: ReactNode | ReactNode[] }) {
    const [expanded, setExpanded] = useState(false);
    const [navWidth, setNavWidth] = useState(200);
    return  (
    <DashboardContext.Provider value={{ expanded, setExpanded, navWidth, setNavWidth }}>
        {children}
    </DashboardContext.Provider>)
};

export default useDashboardContext; 
