import { useLocation } from "react-router-dom";
import SidebarToggler from "../Nav/SidebarToggler";
import EndpunktHeaderToggler from "./EndpunktHeaderToggler";
import useHeaderScroll from "../../hooks/useHeaderScroll";

import { useRef } from "react";
import BrandLogo from "../Widgets/BrandLogo";
import DropdownMenuMobile from "./DropdownMenuMobile";

function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLDivElement>(null);
    const isDashboard = location.pathname.split("/")[1] === 'dashboard';
    useHeaderScroll();


    return (
        <header id="header" className="header" ref={headerRef}>
            <a href="#header" className="hidden w-0 position-absolute top-0 left-0"></a>
            <div className="d-flex justify-content-center align-items-center h-100">
                <SidebarToggler role='opener' />
                {isDashboard ? <EndpunktHeaderToggler endpunkte={['artikel', 'benutzer']}/> : <BrandLogo />}
            </div>
            <DropdownMenuMobile/>
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;