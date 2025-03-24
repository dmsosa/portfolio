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

function LinkList({ expanded } : { expanded: boolean }) {
    return (
        <ul className="link-list">
            {pages.map((page) => 
                (
                <li key={page.title}>
                    <a className="link" href={page.href} aria-expanded={expanded}>
                        {page.icon}
                        <span>{page.title}</span>
                    </a>
                </li>
                )
            )}
        </ul>
    );
}
export default LinkList;