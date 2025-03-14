import { MouseEvent, useState } from "react";
import { SiFiverr } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function DropdownBtn() {
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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" width="60px" height="60px">
                    <path d="M 50 50 L 141.406 50 L 250 50" id="bar1"></path>
                    <path d="M 50 150 L 200 150" id="bar2"/>
                    <path  d="M 50 250 L 250 250" id="bar3"/>
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

export default DropdownBtn;