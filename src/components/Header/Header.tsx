import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        <header id="site-header" className="header site-header">
            <Logo />
            <Navbar />
        </header>
        
    )
}

export default Header;