import { useLocation } from "react-router-dom";
import SidebarToggler from "../Nav/SidebarToggler";
import Breadcrumbs from "./Breadcrumbs";
import EndpunktHeaderToggler from "./EndpunktHeaderToggler";
import useHeaderScroll from "../../hooks/useHeaderScroll";

function Header() {
    const location = useLocation();
    const isDashboard = location.pathname.split("/")[1] === 'dashboard';
    useHeaderScroll();
    return (
        <header id="header" className="header">
            <SidebarToggler role='opener' />
            {isDashboard ? <EndpunktHeaderToggler endpunkte={['global', 'feed']}/> : <Breadcrumbs />}
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;