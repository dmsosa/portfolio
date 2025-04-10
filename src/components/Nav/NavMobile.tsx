import LinkList, { TLinkObject } from "../Widgets/LinkList";
import { FaHome, FaUserTie } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";

const mainLinks: TLinkObject[] = [
    { title: 'Home', href: '/', icon: <FaHome />    },
    { title: 'Dashboard', href: '/dashboard', icon: <GiAbstract031/> },
    { title: 'Artikeln', href: '/dashboard/artikeln', icon: <Gi3dGlasses /> },
    { title: 'CV', href: '/dashboard/cv', icon: <FaUserTie /> },
]; 

function NavMobile() {
    return (
        <nav className="nav-mobile d-block d-md-none">
            <div className="sidebar-content">
                <LinkList links={mainLinks} expanded={false}/>
            </div>
        </nav>
    );
}
export default NavMobile;