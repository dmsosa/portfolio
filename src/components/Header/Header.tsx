import { useLocation } from "react-router-dom";
import SidebarToggler from "../Nav/SidebarToggler";
import EndpunktHeaderToggler from "./EndpunktHeaderToggler";
import useHeaderScroll from "../../hooks/useHeaderScroll";

import { useRef } from "react";
import BrandLogo from "../Widgets/BrandLogo";

function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);
    const isDashboard = location.pathname.split("/")[1] === 'dashboard';
    useHeaderScroll();


    return (
        <header id="header" className="header" ref={headerRef}>
            <SidebarToggler role='opener' />
            {isDashboard ? <EndpunktHeaderToggler endpunkte={['global', 'feed']}/> : <BrandLogo />}
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;