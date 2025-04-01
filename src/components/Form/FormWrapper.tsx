import { ReactNode } from "react";

export default function FormWrapper({ titel, untertitel, link, linkMessage, children } : 
    { titel: string, untertitel: string, link: string, linkMessage: string, children: ReactNode | ReactNode[] }) {
    return (
        <div>
            <div>
                <h3>{titel}</h3>
                <h5>{untertitel}</h5>
            </div>
            {children}
            <a href={link}>{linkMessage}</a>
        </div>
    );
}