import { useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function FooterNav() {
    const [prevPage, setPrev ] = useState('/dashboard');
    const [nextPage, setNext ] = useState('/cv');

    const location = useLocation();

    const setNavLinks = (href: string) => {
        switch (href) {
            case '/home': {
                setPrev('/dashboard');
                setNext('/dashboard/cv');
                break;
            };
            case '/artikel': {
                setPrev('/dashboard');
                setNext('/dashboard/profile');
                break;
            };
            case '/profile': {
                setPrev('/dashboard');
                setNext('/dashboard/artikel');
                break;
            };
            case '/cv': {
                setPrev('/home');
                setNext('/dashboard');
                break;
            };
            case '/editor': {
                setPrev('/dashboard');
                setNext('/dashboard/settings');
                break;
            };
            case '/settings': {
                setPrev('/dashboard');
                setNext('/dashboard/cv');
                break;
            };
        }
    }
        const handleClick = (page: string) => {
        switch (page) {
            case '/home': {
                window.location.href = '/home';
                break;
            };
            case '/artikel': {
                window.location.href = '/dashboard/artikel';
                break;
            };
            case '/profile': {
                window.location.href = '/dashboard/profile';
                break;
            };
            case '/cv': {
                window.location.href = '/dashboard/cv';
                break;
            };
            case '/editor': {
                window.location.href = '/dashboard/editor';
                break;
            };
            case '/settings': {
                window.location.href = '/dashboard/settings';
                break;
            };
            default : {
                window.location.href = '/dashboard';
                break;
            }
        }
    }
    useEffect(() => {
        const pathname = location.pathname.split('/');
        for (let i = pathname.length; i >= 0; i-- ) {
            setNavLinks(pathname[i]);
        }
    }, [location])
    return (
            <div className="footer-nav">
                <a className="page-item" onClick={() => handleClick(prevPage)}><MdArrowBackIos className="me-1"/> {prevPage.replace("/", "")}</a>
                <a className="page-item" onClick={() => handleClick(nextPage)}>{nextPage.replace("/", "")} <MdArrowForwardIos className="ms-1"/> </a>
            </div>
            
    )
}