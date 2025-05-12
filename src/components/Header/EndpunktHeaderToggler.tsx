import React from "react";
import { useEndpunkt } from "../../context/EndpunktContext";

type TEndpunkt = 'global' | 'feed' | 'author' | 'favorite' | 'followers';


function EndpunktHeaderToggler({ endpunkte=[] } : { endpunkte?: TEndpunkt[] }) {
    const { setEndpunktStatus } = useEndpunkt();

   const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const value = e.currentTarget.innerText as TEndpunkt;
    setEndpunktStatus((prev) => ({ ...prev, endpunkt: value as TEndpunkt }));
}
    return (
        <div className="endpunkt-header-toggler">
            {endpunkte.map((endpunkt) => 
            <a key={endpunkt} onClick={handleClick}>
                {endpunkt}
            </a>
            )}
        </div>
    )
}

export default EndpunktHeaderToggler;