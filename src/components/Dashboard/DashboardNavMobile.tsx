import { ReactNode } from "react";
import { FaHome, FaUserTie } from "react-icons/fa";
import { Gi3dGlasses, GiAbstract031 } from "react-icons/gi";

type TPage = {
    title: string,
    href: string,
    icon: ReactNode,
}
const pages: TPage[] = [
    { title: 'Home', href: '/', icon: <FaHome />    },
    { title: 'Dashboard', href: '/dashboard', icon: <GiAbstract031/> },
    { title: 'Artikeln', href: '/dashboard/artikeln', icon: <Gi3dGlasses /> },
    { title: 'CV', href: '/dashboard/cv', icon: <FaUserTie /> },
]; 

function DashboardNavMobile() {
    return (
        <nav className="dashboard-nav-mobile">
            {pages.map((page) => 
                <a key={page.title} href={page.href}>
                    {page.icon}
                    <span>{page.title}</span>
                </a>
            )}
        </nav>
    );
}
export default DashboardNavMobile;