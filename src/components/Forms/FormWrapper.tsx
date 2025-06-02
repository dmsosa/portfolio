import { ReactNode } from "react";
import logo from "../../assets/img/logo.png";

export default function FormWrapper({ titel, untertitel, linkMessage, onClick, children } : 
    { titel: string, untertitel: string, linkMessage: string, onClick: () => void, children: ReactNode | ReactNode[] }) {
    return (
        <div className="form-wrapper bg-2 mb-3">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <img src={logo} alt="Logo" className="logo mb-3" />
                <h3 className="mb-0">{titel}</h3>
                <span>{untertitel}</span>
            </div>
            {children}
            <a className="link" onClick={onClick}>{linkMessage}</a>
        </div>
    );
}