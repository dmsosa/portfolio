import React from "react";
import { useEndpunkt } from "../../context/EndpunktContext";

type TEndpunkt = 'artikel' | 'benutzer';


function EndpunktHeaderToggler({ endpunkte=[] } : { endpunkte?: TEndpunkt[] }) {
    const { setEndpunktStatus } = useEndpunkt();

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const value = e.currentTarget.innerText as TEndpunkt;
    setEndpunktStatus((prev) => ({ ...prev, entity: value as TEndpunkt }));
}
    return (
        <ul className="endpunkt-header-toggler">
            {endpunkte.map((endpunkt) => 
            <li key={endpunkt}>
                <a key={endpunkt} onClick={handleClick}>
                {endpunkt}
            </a>
            </li>
            )}
        </ul>
    )
}

export default EndpunktHeaderToggler;