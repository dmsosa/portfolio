import { MouseEvent } from "react";
import { TEndpunktContext, useEndpunkt } from "../../context/EndpunktContext";

const entities = ['artikel', 'profile'];
type TEndpunkt = 'global' | 'feed' | 'author' | 'favorite';

export default function EndpunktToggler({ endpunkte=[ 'global', 'feed' ] } : { endpunkte?: TEndpunkt[] }) {

    const { setEndpunktStatus } = useEndpunkt() as TEndpunktContext;

    const handleChange = (e: MouseEvent<HTMLAnchorElement>) => {
        const name = e.currentTarget.classList[0].replace('-change', '');
        const value = e.currentTarget.innerText;
        setEndpunktStatus((prev) => ({ ...prev, [name]:value }));
    }
    return (
        <div className="d-flex justify-content-center align-items-center flex-column">
            <ul className="ul-item">
                {entities.map((value) => 
                <li className="li-primary" key={value}><a className="entity-change" onClick={handleChange}>{value}</a></li>
                )}
            </ul>
            <ul className="ul-item">
                {endpunkte.map((value) => 
                <li className="li-secondary" key={value}><a className="endpunkt-change" onClick={handleChange}>{value}</a></li>
                )}
            </ul>
        </div>
    )
}