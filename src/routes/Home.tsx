import UberMich from "../components/Home/UberMich/UberMich";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import LinksListe, { TLinkObject } from "../components/Widgets/LinksListe";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const links: TLinkObject[] = [
    { title: 'Instagram', to: 'https://www.instagram.com/duvi_official/', icon: <FaInstagram />    },
    { title: 'GitHub', to: 'https://github.com/dmsosa/', icon: <FaGithub/> },
    { title: 'LinkedIn', to: 'https://www.linkedin.com/in/durian-sosa-807147241/', icon: <FaLinkedin /> },
    { title: 'YouTube', to: 'https://www.youtube.com/@EinfachDev', icon: <FaYoutube /> },
];
export default function Home() {
    return (
        <>
            <Hero/>
            <div className="content pt-5">
                <div className="fs-2 px-3 mb-2"><LinksListe links={links}></LinksListe></div>
                <p className="text-left w-80 mx-auto fs-6 mb-5">
                    Hi, I'm Durian Sosa —— a full-stack developer passionate about crafting seamless digital experiences with React, TypeScript, and Node.js. I love diving into both the frontend and backend, working fluidly with Java, MongoDB, and PostgreSQL. Beyond code, I'm a lifelong learner with a love for math, well-being, and technology. I speak six languages (🇩🇪 🇫🇷 🇪🇸 🇮🇹 🇬🇧 🇧🇷), and when I'm not coding, you’ll find me playing football, practicing yoga, or swimming laps.
                </p>
                <h2 className="h2 text-center mb-5">
                    <div className="line">projekte</div>
                </h2>
                <Portfolio/>
            </div>
            <div className="content pt-5">
                <UberMich />
            </div>
        </>
            
    )
}