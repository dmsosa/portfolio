import { ReactNode } from "react";


export type TLinkObject = {
    title: string,
    href: string,
    icon: ReactNode,
}


function LinkList({ links, expanded=false, column=false } : { links: TLinkObject[], expanded?: boolean, column?: boolean }) {
    return (
        <ul className={`link-list px-2 ${column ? 'flex-column gap-1':'flex-row gap-2'}`}>
            {links.map((link) => 
                (
                <li key={link.title}>
                    <a className={`link ${column ? 'justify-content-start':'justify-content-center'}`} href={link.href} aria-expanded={expanded}>
                        {link.icon}
                        <span>{link.title}</span>
                    </a>
                </li>
                )
            )}
        </ul>
    );
}
export default LinkList;