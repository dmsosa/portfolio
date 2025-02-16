import { useEffect, useRef } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    const prevScroll = useRef<number>(0);

    useEffect(() => {
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;
            if (currentScroll > prevScroll.current) {
                header?.classList.add("scrolled");
                prevScroll.current = currentScroll;
            } else if (currentScroll < prevScroll.current) {
                header?.classList.remove("scrolled");
                prevScroll.current = currentScroll;
            }
        })
    }, [])
    return (
        <header id="header" className="sticky-header">
            <Logo />
            <Navbar />
            <div className="progress-bar"></div>
        </header>
        
    )
}

export default Header;