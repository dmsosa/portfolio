import Logo from "./Logo";
import DropdownBtn from "./DropdownBtn";
import DashboardToggler from "../Nav/SidebarNavToggler";

function Header() {

    return (
        <header id="header" className="header">
            <div className="d-flex">
                <DashboardToggler />
                <Logo />
            </div>
                <DropdownBtn />
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;