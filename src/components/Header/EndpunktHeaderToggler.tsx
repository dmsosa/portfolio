import React from "react";
import { useEndpunkt } from "../../context/EndpunktContext";

type TEndpunkt = 'global' | 'feed' | 'author' | 'favorite' | 'followers';
type TEntity = 'artikel' | 'benutzer';

function EndpunktHeaderToggler({ entities=[], endpunkte=[] } : { entities?: TEntity[], endpunkte?: TEndpunkt[] }) {
    const { setEndpunktStatus } = useEndpunkt();

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const value = e.currentTarget.innerText as TEndpunkt | TEntity;
    const type = e.currentTarget.dataset.changer as 'entity' | 'endpunkt';
    if (type === 'entity') {
        setEndpunktStatus((prev) => ({ ...prev, entity: value as TEntity }));
    } else {
        setEndpunktStatus((prev) => ({ ...prev, endpunkt: value as TEndpunkt }));
    }
}
    return (
        <div className="endpunkt-header-toggler">
            {entities.map((link) => (
            <a key={link} data-changer="entity" onClick={handleClick}>
                {link}
            </a>
            ))}
            {endpunkte.map((link) => (
            <a key={link} data-change="endpunkt" onClick={handleClick}>
                {link}
            </a>
            ))}
        </div>
    )
}

export default EndpunktHeaderToggler;