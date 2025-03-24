import BenutzerInfo from "../Widgets/BenutzerInfo";
import boy from "../../assets/img/boy.png";
import DashboardToggler from "./SidebarNavToggler";
import { IoSettings } from "react-icons/io5";
import LinkList from "../Widgets/LinkList";
import { TSidebarContext, useSidebarContext } from "../../context/SidebarContext";


function SidebarNav() {
    const { expanded } = useSidebarContext() as TSidebarContext; 
    return (
        <nav id="nav" className="sidebar-nav active">
            <div className="sidebar-content">
                <div className="benutzer--wrapper">
                    <BenutzerInfo bild={boy} username={"dmsosa"} expanded={expanded}/>
                    <div className="d-flex justify-content-between align-items-center d-none d-md-block">
                        <a href='/settings'><IoSettings></IoSettings></a>
                        <DashboardToggler hideButton={true}/>
                    </div>
                </div>
                <LinkList expanded={expanded}/>
                <div className="sidebar-footer">
                    <h2>ert</h2>
                </div> 
            </div>
        </nav>
    );
}
export default SidebarNav;