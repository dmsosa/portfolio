import SidebarNavHeader from "./SidebarNavHeader";
import { FaGithub, FaHome, FaLinkedin, FaStar, FaUserAstronaut, FaUserTie, FaVoicemail, FaYoutube } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";
import LinkList, { TLinkObject } from "../Widgets/LinkList";
import CreateKnopf from "../Widgets/Knopfen/CreateKnopf";
import SettingsKnopf from "../Widgets/Knopfen/SettingsKnopf";
import { useSidebarContext } from "../../context/SidebarContext";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const footerLinks: TLinkObject[] = [
    { title: 'Email', href: 'mailto:dmsosa21@outlook.com', icon: <FaVoicemail />    },
    { title: 'GitHub', href: 'https://github.com/dmsosa/', icon: <FaGithub/> },
    { title: 'LinkedIn', href: 'https://www.linkedin.com/in/durian-sosa-807147241/', icon: <FaLinkedin /> },
    { title: 'YouTube', href: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
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
                { title: 'Home', href: '/', icon: <FaHome />    },
                { title: 'Dashboard', href: '/dashboard/', icon: <GiAbstract031/> },
                { title: 'Artikeln', href: '/dashboard/editor', icon: <Gi3dGlasses /> },
                { title: 'Profile', href: `/dashboard/profile/${loggedUser?.username}`, icon: <FaUserAstronaut /> },
                { title: 'CV', href: '/dashboard/cv', icon: <FaUserTie /> },
            ]; 
            setLinks(loggedInLinks);
        }
        else {
            const notLoggedLinks: TLinkObject[] = [
                { title: 'Home', href: '/', icon: <FaHome />    },
                { title: 'Dashboard', href: '/dashboard/', icon: <GiAbstract031/> },
                { title: 'CV', href: '/dashboard/cv', icon: <FaUserTie /> },
            ]; 

            setLinks(notLoggedLinks);
        }
    }, [isAuth, loggedUser]);
    return (
        <nav id="sidebar-nav" className="sidebar-nav">
            <div className="nav-listener" onMouseEnter={handleEnter} onMouseLeave={handleLeave}></div>
            <div className="sidebar-content" aria-expanded={expandedLeft} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <SidebarNavHeader/>
                <hr className="w-100"></hr>
                <div className="d-flex justify-content-start align-items-center flex-column mh-60">
                    <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
                        { isAuth  && loggedUser ?
                            <>
                            <CreateKnopf/>
                            <SettingsKnopf username={loggedUser.username} state={{...loggedUser}}/>
                            </>
                            :
                            <Link role="button" to="/dashboard/sign-up" className="btn btn-primary"><FaStar/><span className="ms-3">Get Started</span></Link> 
                        }

                    </div>
                    <LinkList links={links} expanded column/>
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