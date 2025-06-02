import LinksListe, { TLinkObject } from "./LinksListe";
import { FaGithub, FaInstagram, FaLinkedin, FaVoicemail } from "react-icons/fa";

const socialLinks: TLinkObject[] = [
    {
        title: "github",
        to: "https://github.com/dmsosa",
        icon: <FaGithub />
    },
    {
        title: "instagram",
        to: "https://www.instagram.com/duvi_official",
        icon: <FaInstagram />
    },
    {
        title: "linkedin",
        to: "https://www.linkedin.com/in/durian-sosa-807147241/",
        icon: <FaLinkedin />
    },
     {
        title: "dmsosa21",
        to: "mailto:dmsosa21@outlook.com",
        icon: <FaVoicemail />
    }]


export default function SocialLinks({ expanded=false, column=false, clazz } : { expanded?: boolean, column?: boolean, clazz?: string }) {
    
    return (
        <LinksListe links={socialLinks} expanded={expanded} column={column} clazz={clazz} />
    );
}

