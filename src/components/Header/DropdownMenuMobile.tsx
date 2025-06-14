import { MouseEvent, useEffect, useState } from "react";
import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaUserAstronaut, FaUserTie, FaYoutube } from "react-icons/fa";
import LinksListe, { TLinkObject } from "../Widgets/LinksListe";
import { useAuth } from "../../context/AuthContext";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";
import ThemeToggler from "../Widgets/Toggler/ThemeToggler";


function DropdownBtn({ show, setShow } : { show:boolean, setShow: React.Dispatch<React.SetStateAction<boolean>> }) {
    //Dropdown Logik
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const body = document.body;
        if (window.innerWidth < 768) {
            body.classList.toggle("no-scroll");
        }
        
        setShow(!show);

        const header = document.getElementById("site-header");
        header?.classList.toggle("active");
        e.currentTarget.classList.toggle("x");
    }
    
    return (
            <button className="header-dropdown-toggler" type="button" 
            aria-expanded={show}
            aria-label="header dropdown toggler" aria-controls="header-dropdown" onClick={handleClick}>
                <svg className="svg-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="50px" height="50px">
                    <path id="dropdown-path-1"></path>
                    <path id="dropdown-path-2"></path>
                    <path id="dropdown-path-3"></path>
                </svg>
            </button>
    )
}

function DropdownDiv({ show } : { show:boolean }) {
    //Links logik
    const { isAuth, loggedUser } = useAuth();
    const [ links, setLinks ] = useState<TLinkObject[]>([]);
    const footerLinks: TLinkObject[] = [
        { title: 'Instagram', to: 'https://www.instagram.com/duvi_official/', icon: <FaInstagram />    },
        { title: 'GitHub', to: 'https://github.com/dmsosa/', icon: <FaGithub/> },
        { title: 'LinkedIn', to: 'https://www.linkedin.com/in/durian-sosa-807147241/', icon: <FaLinkedin /> },
        { title: 'YouTube', to: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
    ]; 
    //useEffect
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
            <div id="header-dropdown" className={`header-dropdown ${show ? "show":""} bg-2 `}>
                <div className="p-2 pb-4">
                    <LinksListe links={links} column expanded fullWidth/>
                    <ThemeToggler />
                </div>
                <div className="border-top-dark pt-1 pb-2 fs-4">
                    <LinksListe links={footerLinks} clazz="w-100 h-100 justify-content-center"/>
                </div>
            </div>        
    )
}
function DropdownMenuMobile() {
    //Dropdown Logik
    const [ show, setShow ] = useState(false);
    return <div className="d-block">
        <DropdownBtn show={show} setShow={setShow} />
        <DropdownDiv show={show}/>
    </div>
}
export default DropdownMenuMobile;