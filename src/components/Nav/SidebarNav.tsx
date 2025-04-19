import SidebarNavHeader from "./SidebarNavHeader";
import { FaGithub, FaHome, FaLinkedin, FaUserTie, FaVoicemail, FaYoutube } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";
import LinkList, { TLinkObject } from "../Widgets/LinkList";
import CreateKnopf from "../Widgets/Knopfen/CreateKnopf";
import SettingsKnopf from "../Widgets/Knopfen/SettingsKnopf";
import { useSidebarContext } from "../../context/SidebarContext";

const mainLinks: TLinkObject[] = [
    { title: 'Home', href: '/', icon: <FaHome />    },
    { title: 'Dashboard', href: '/dashboard', icon: <GiAbstract031/> },
    { title: 'Artikeln', href: '/dashboard/artikel', icon: <Gi3dGlasses /> },
    { title: 'CV', href: '/dashboard/cv', icon: <FaUserTie /> },
]; 

const footerLinks: TLinkObject[] = [
    { title: 'Email', href: 'mailto:dmsosa21@outlook.com', icon: <FaVoicemail />    },
    { title: 'GitHub', href: 'https://github.com/dmsosa/', icon: <FaGithub/> },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/durian-sosa-807147241/', icon: <FaLinkedin /> },
    { title: 'YouTube', href: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
]; 
function SidebarNav() {
    const { expanded } = useSidebarContext();

    const handleEnter = () => {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (!sidebarContent) return;
        if (!sidebarContent.classList.contains('show')) {
            sidebarContent.classList.add('show');
        }
    }
    const handleLeave = () => {
        const sidebarContent = document.querySelector('.sidebar-content');
        if (!sidebarContent) return;
        if (sidebarContent.classList.contains('show')) {
            sidebarContent.classList.remove('show');
        }
    }
    return (
        <nav id="sidebar-nav" className="sidebar-nav active d-none d-md-block">
            <div className="nav-listener" onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
            <div className="sidebar-content" aria-expanded={expanded} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <SidebarNavHeader/>
                <hr className="w-100"></hr>
                <div className="d-flex justify-content-start align-items-center flex-column mh-60">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                        <CreateKnopf/>
                        <SettingsKnopf />
                    </div>
                    <LinkList links={mainLinks} expanded column/>
                </div>
                <hr className="w-100"></hr>
                <div className="sidebar-footer">
                    <LinkList links={footerLinks}/>
                </div>
            </div>
        </nav>
    );
}
export default SidebarNav;