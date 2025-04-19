import DropdownBtn from "./DropdownBtn";
import SidebarToggler from "../Nav/SidebarToggler";
import Breadcrumbs from "./Breadcrumbs";

function Header() {

    return (
        <header id="header" className="header">
            <div className="d-flex">
                <SidebarToggler role='opener' />
                <Breadcrumbs />
            </div>
                <DropdownBtn />
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;