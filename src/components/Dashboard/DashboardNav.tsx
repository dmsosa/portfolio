import BenutzerInfo from "../Widgets/BenutzerInfo";
import DashboardList from "./DashboardList";
import boy from "../../assets/img/boy.png";
import DashboardToggler from "./DashboardToggler";
import useDashboardContext, { TDashboardContext } from "../../context/DashboardContext";
import { useEffect } from "react";


function DashboardNav() {
    const { navWidth } = useDashboardContext() as TDashboardContext;

    useEffect(() => {
        const nav = document.getElementById("nav")  as HTMLDivElement;
        nav.style.setProperty('--nav-width', `${navWidth}px`);
    }, [navWidth])
    return (
        <nav id="nav" className="dashboard-nav">
            <div className="d-flex">
                <BenutzerInfo bild={boy} username={"dmsosa"}/>
                <DashboardToggler hideButton={true}/>
            </div>
            <DashboardList/>
            <div className="div">
                <h2>ert</h2>
            </div>           
        </nav>
    );
}
export default DashboardNav;