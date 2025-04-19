import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const seiteLinks = ['dashboard' , 'artikel' , 'profile' , 'editor' , 'cv' , 'settings'];

function Breadcrumbs() {
    const location = useLocation();

    const [ links, setLinks ] = useState<string[]>([]);

    useEffect(() => {
        const path = location.pathname.split('/');
        const aktuellLinks: string[] = [];
        for (let i = 0 ; i < path.length ; i++) {
            if (seiteLinks.includes(path[i]) ) {
                aktuellLinks.push(path[i]);
            }
        }
        setLinks(aktuellLinks);
    }, [])
    return (
        <div>
            <a href="#">#</a>
            {links.map((link) => (
                <a href={`/${link}`}>{link}</a>
            ))}
        </div>
    )
}

export default Breadcrumbs;