import { ReactNode } from "react";
import { FaHome, FaUserTie } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";

type TPage = {
    title: string,
    href: string,
    icon: ReactNode,
}
const pages: TPage[] = [
    { title: 'Dashboard', href: '/dashboard', icon: <GiAbstract031/> },
    { title: 'Home', href: '/', icon: <FaHome />    },
    { title: 'Artikeln', href: '/artikeln', icon: <Gi3dGlasses /> },
    { title: 'CV', href: '/cv', icon: <FaUserTie /> },
]; 

function DashboardNav() {
    return (
        <nav className="dashboard-nav">
            {pages.map((page) => 
                <a key={page.title} href={page.href}>
                    {page.icon}
                    <span>{page.title}</span>
                </a>
            )}
        </nav>
    );
}
export default DashboardNav;