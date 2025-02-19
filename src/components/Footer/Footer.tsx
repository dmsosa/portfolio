import axios from "axios";
import et from "../../assets/img/et.png";
import IconListe from "../Widgets/IconListe";
import { DOMElement, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

function Footer() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        startDownload().then(() => {
            console.log("Loading")
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log("done")
        })
    };
    useGSAP(() => {
        if (!sectionRef.current) return;
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline( { scrollTrigger: {
            trigger: sectionRef.current, 
            start: "top 35%",
            end: "bottom top",
            once: true,
        }});

        tl.from("h2 span", {
            transform: "translateY(100%) rotate(-10deg)",
            opacity: 0,
            duration: 0.5,
        }).from("img", {
            transform: "translateY(30%)",
            opacity: 0,
            duration: 1.5,
        }).from("h3 span", {
            transform: "translateY(100%) rotate(-10deg)",
            opacity: 0,
            duration: 0.5,
        }, 1.2).to(".icon-link svg:not([id='emailSvg'])", {
            strokeDashoffset: 0,
            duration: 2.7,
        }, 1.2).to(".icon-link svg#emailSvg path", {
            strokeDashoffset: 0,
            fill: "#65ff65",
            duration: 1,
        },1.2)
        .from(".btn-warning", {
            transform: "translateX(-100%)",
            opacity: 0,
        }, 1.2).from(".btn-primary", {
            transform: "translateX(100%)",
            opacity: 0,
        }, 1.2);
    }, { scope: sectionRef });

    async function startDownload() {
        let result = await axios({
            url: '../../assets/files/current.pdf',
            method: 'GET',
            responseType: 'blob',
        });
        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", window.URL.createObjectURL(new Blob([result.data], { type: 'application/pdf'})));
        anchorTag.setAttribute("download", "current");
        document.body.appendChild(anchorTag);
        anchorTag.click();
        document.body.removeChild(anchorTag);
    }

    return (
        <footer ref={sectionRef}>
            <div className="container container-sm">
                <div className="px-3 mb-3">
                    <h2 className="text-center fw-bold mb-2">
                        <span>have a project?</span>
                    </h2>
                    <img src={et} alt="" />
                    <h3 className="uppercase text-center mb-3"><span>contact me</span></h3>
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
                      <IconListe icons={["whatsapp", "email", "github"]}/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <button className="btn btn-warning mb-2 w-75 fw-bold" onClick={handleClick}>WATCH CV</button>
                        <button className="btn btn-primary w-75 fw-bold">MY WORK</button>
                    </div>
                </div>
                <hr></hr>
                <span className="d-block text-center pb-3">&#169; Duvi, 2024</span>
            </div>
            
        </footer>
        
    )
}

export default Footer;