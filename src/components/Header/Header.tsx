import Logo from "./Logo";
import DropdownBtn from "./DropdownBtn";
import SidebarToggler from "../Nav/SidebarToggler";

function Header() {

    return (
        <header id="header" className="header">
            <div className="d-flex">
                <SidebarToggler role='opener' />
                <Logo />
            </div>
                <DropdownBtn />
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;