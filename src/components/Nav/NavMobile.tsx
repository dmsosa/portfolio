import LinksListe, { TLinkObject } from "../Widgets/LinksListe";
import { FaGamepad, FaHome, FaUserAstronaut, FaUserTie } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";
import { useAuth } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function NavMobile() {
    const { isAuth, loggedUser } = useAuth();
    const [links, setLinks] = useState<TLinkObject[]>([])
    useEffect(() => {
        if (isAuth) {
                    const loggedInLinks = [
                        { title: 'Home', to: '/', icon: <FaHome />    },
                        { title: 'Dashboard', to: '/', icon: <GiAbstract031/> },
                        { title: 'Artikeln', to: '/editor', icon: <Gi3dGlasses /> },
                        { title: 'CV', to: '/cv', icon: <FaUserTie /> },
                        { title: 'Profile', to: `/profile/${loggedUser?.username}`, icon: <FaUserAstronaut /> },
                    ]; 
                    setLinks(loggedInLinks);
                }
                else {
                    const notLoggedLinks: TLinkObject[] = [
                        { title: 'Home', to: '/', icon: <FaHome />    },
                        { title: 'Dashboard', to: '/dashboard', icon: <GiAbstract031/> },
                        { title: 'CV', to: '/cv', icon: <FaUserTie /> },
                        { title: 'Spiele', to: '/cv', icon: <FaGamepad /> },
                    ]; 
        
                    setLinks(notLoggedLinks);
                }
    }, [isAuth, loggedUser])
    return (
        <nav className="nav-mobile bg-1-hover-opacity-1">
            <LinksListe links={links} expanded={false} clazz="h-100 fs-2">
                { isAuth ? <Link to={`/dashboard/profile/${loggedUser?.username}`}><FaUserAstronaut /></Link>: <button className="btn btn-primary">Log In</button>}
            </LinksListe>
        </nav>
    );
}
export default NavMobile;