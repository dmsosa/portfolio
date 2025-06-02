import { ReactNode } from "react";
import { Link } from "react-router-dom";


export type TLinkObject = {
    title: string,
    to: string,
    icon: ReactNode,
    state?: object,
}


function LinksListe({ links, expanded=false, column=false, fullWidth=false, clazz, children } : { links: TLinkObject[], expanded?: boolean, column?: boolean, fullWidth?: boolean, clazz?: string, children?: ReactNode }) {
    const dir = column ? 'flex-column gap-1':'flex-row gap-2';
    return (
        <ul className={`nav-links ${dir} ${clazz ? clazz : ''}`}>
            {links.map((link) => 
                (
                <li key={link.title} className={fullWidth ? 'w-100':''}>
                    <Link className={`link ${column ? 'justify-content-start':'justify-content-center'}`} to={link.to} state={link.state ? link.state : null} aria-expanded={expanded}>
                        {link.icon}
                        <span>{link.title}</span>
                    </Link>
                </li>
                )
            )}
            { children }
        </ul>
    );
}
export default LinksListe;