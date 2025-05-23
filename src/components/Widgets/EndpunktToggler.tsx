import { MouseEvent } from "react";
import { TEndpunktContext, useEndpunkt } from "../../context/EndpunktContext";

const entities = ['artikel', 'profile'];
type TEndpunkt = 'global' | 'feed' | 'author' | 'favorite' | 'followers';

export default function EndpunktToggler({ endpunkte=[ 'global', 'feed' ] } : { endpunkte?: TEndpunkt[] }) {

    const { entity, endpunkt, setEndpunktStatus } = useEndpunkt() as TEndpunktContext;

    const handleChange = (e: MouseEvent<HTMLAnchorElement>) => {
        const name = e.currentTarget.classList[0].replace('-change', '');
        const value = e.currentTarget.innerText;
        setEndpunktStatus((prev) => ({ ...prev, [name]:value }));
    }
    return (
        <div className="d-flex justify-content-start align-items-start flex-column">
            <ul className="ul-item mb-2">
                {entities.map((value) => 
                <li className={`li-primary ${entity === value && 'active'}`} key={value}><a className="entity-change" onClick={handleChange}>{value}</a></li>
                )}
            </ul>
            <ul className="ul-item mb-4">
                {endpunkte.map((value) => 
                <li className={`li-secondary ${endpunkt === value && 'active'}`} key={value}><a className="endpunkt-change" onClick={handleChange}>{value}</a></li>
                )}
            </ul>
        </div>
    )
}