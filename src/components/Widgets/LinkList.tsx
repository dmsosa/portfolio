import { ReactNode } from "react";
import { Link } from "react-router-dom";


export type TLinkObject = {
    title: string,
    to: string,
    icon: ReactNode,
    state?: object,
}


function LinkList({ links, expanded=false, column=false } : { links: TLinkObject[], expanded?: boolean, column?: boolean }) {
    return (
        <ul className={`link-list px-2 ${column ? 'flex-column gap-1':'flex-row gap-2'}`}>
            {links.map((link) => 
                (
                <li key={link.title}>
                    <Link className={`link ${column ? 'justify-content-start':'justify-content-center'}`} to={link.to} state={link.state ? link.state : null} aria-expanded={expanded}>
                        {link.icon}
                        <span>{link.title}</span>
                    </Link>
                </li>
                )
            )}
        </ul>
    );
}
export default LinkList;