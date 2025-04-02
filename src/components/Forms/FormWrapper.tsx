import { ReactNode } from "react";

export default function FormWrapper({ titel, untertitel, linkMessage, onClick, children } : 
    { titel: string, untertitel: string, linkMessage: string, onClick: () => void, children: ReactNode | ReactNode[] }) {
    return (
        <div>
            <div>
                <h3>{titel}</h3>
                <h5>{untertitel}</h5>
            </div>
            {children}
            <a onClick={onClick}>{linkMessage}</a>
        </div>
    );
}