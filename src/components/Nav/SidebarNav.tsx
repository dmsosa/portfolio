import SidebarNavHeader from "./SidebarNavHeader";
import { FaGithub, FaHome, FaLinkedin, FaUserAstronaut, FaUserTie, FaVoicemail, FaYoutube } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";
import LinksListe, { TLinkObject } from "../Widgets/LinksListe";
import { useSidebarContext } from "../../context/SidebarContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";


const footerLinks: TLinkObject[] = [
    { title: 'Email', to: 'mailto:dmsosa21@outlook.com', icon: <FaVoicemail />    },
    { title: 'GitHub', to: 'https://github.com/dmsosa/', icon: <FaGithub/> },
    { title: 'LinkedIn', to: 'https://www.linkedin.com/in/durian-sosa-807147241/', icon: <FaLinkedin /> },
    { title: 'YouTube', to: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
    { title: 'Home', to: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
]; 
function SidebarNav() {
    const { expandedLeft } = useSidebarContext();
    const { isAuth, loggedUser } = useAuth();
    const [ links, setLinks ] = useState<TLinkObject[]>([]);
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
    useEffect(() => {
        if (isAuth) {
            const loggedInLinks = [
                { title: 'Home', to: '/', icon: <FaHome />    },
                { title: 'Dashboard', to: '/dashboard/', icon: <GiAbstract031/> },
                { title: 'Artikeln', to: '/dashboard/editor', icon: <Gi3dGlasses /> },
                { title: 'CV', to: '/dashboard/cv', icon: <FaUserTie /> },
                { title: 'Profile', to: `/dashboard/profile/${loggedUser?.username}`, icon: <FaUserAstronaut /> },
            ]; 
            setLinks(loggedInLinks);
        }
        else {
            const notLoggedLinks: TLinkObject[] = [
                { title: 'Home', to: '/', icon: <FaHome />    },
                { title: 'Dashboard', to: '/dashboard/', icon: <GiAbstract031/> },
                { title: 'CV', to: '/dashboard/cv', icon: <FaUserTie /> },
            ]; 

            setLinks(notLoggedLinks);
        }
    }, [isAuth, loggedUser]);
    return (
        <nav id="sidebar-nav" className="sidebar-nav">
            <div className="nav-listener" onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
            <div className="sidebar-content align-self-start" aria-expanded={expandedLeft} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <div className="div">
                    <SidebarNavHeader/>
                    <LinksListe links={links} expanded column fullWidth>
                        <button className="btn btn-primary align-self-start">Sign In</button>
                    </LinksListe>
                </div>
                <div className="border-top pt-3">
                    <LinksListe links={footerLinks}/>
                </div>
            </div>
            
        </nav>
    );
}
export default SidebarNav;