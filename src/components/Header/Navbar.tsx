import { MouseEvent, useState } from "react";
import { SiFiverr } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
    const [ show, setShow ] = useState(false);
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const body = document.body;
        if (window.innerWidth < 768) {
            body.classList.toggle("no-scroll");
        }
        
        setShow(!show);

        const header = document.getElementById("site-header");
        header?.classList.toggle("active");
        e.currentTarget.classList.toggle("x");
    }
    return (
        <>
            <button className="nav-toggler" type="button" 
            aria-expanded={show}
            aria-label="Navbar toggler" aria-controls="nav-content" onClick={handleClick}>
                <svg viewBox="0 0 24 24">
                    <path d="M1,2 24,2 M1,12 24,12 M1,22 24,22"/>
                </svg>
            </button>
            <div id="nav-content" className={`nav-content ${show ? "open": ""}`}>
                <div className="nav-content-section">
                    <p>Links</p>
                    <ul>
                        <li>
                            <a href="#">My Work</a>
                        </li>
                        <li>
                            <a href="#">My Articles</a>
                        </li>
                        <li>
                            <a href="#">Buy me a coffee</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-content-section">
                    <p>Say hello</p>
                    <ul>
                        <li>
                            <a href="mailto:dmsosa21@outlook.com">dmsosa21</a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/duvi_official">duvi_official</a>
                        </li>
                    </ul>
                    
                    
                </div>
                <div className="nav-content-section">
                    <ul className="social-links">
                        <li>
                            <a><SiFiverr style={{transition: "all 0.2s"}} color="inherit"/></a>
                        </li>
                        <li>
                            <a><FaGithub style={{transition: "all 0.2s"}} color="inherit"/></a>
                        </li>
                        <li>
                            <a><FaCodepen style={{transition: "all 0.2s"}} color="inherit"/></a>
                        </li>
                        <li>
                            <a><FaYoutube style={{transition: "all 0.2s"}} color="inherit"/></a>
                        </li>
                    </ul>   
                </div>

            </div>
        </>
        
    )
}

export default Navbar;