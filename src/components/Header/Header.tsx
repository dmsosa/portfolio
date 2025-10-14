import SidebarToggler from "../Nav/SidebarToggler";
import useHeaderScroll from "../../hooks/useHeaderScroll";

import { useRef } from "react";
import BrandLogo from "../Widgets/BrandLogo";
import DropdownMenuMobile from "./DropdownMenuMobile";

function Header() {
    const headerRef = useRef<HTMLDivElement>(null);
    useHeaderScroll();


    return (
        <header id="header" className="header" ref={headerRef}>
            <a href="#header" className="hidden w-0 position-absolute top-0 left-0"></a>
            <div className="d-flex justify-content-start align-items-center h-100">
            </div>
            <DropdownMenuMobile/>
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;