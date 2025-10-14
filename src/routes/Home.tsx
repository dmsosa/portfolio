import UberMich from "../components/Home/UberMich/UberMich";
import Hero from "../components/Home/Hero";
import Portfolio from "../components/Home/Portfolio/Portfolio";
import LinksListe, { TLinkObject } from "../components/Widgets/LinksListe";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export type TTextContent = {
    title: string;
    subtitle: string;
    textPrimary: string;
    image?: string;
    textSecondary: string;
}
const textContents: TTextContent[] = [
{
    title: "Discover the Future of Advertising",
    subtitle: "Refinery89 Custom Ad Units",
    textPrimary:
      "Our new ad technology adapts to your layout and maximizes user engagement without sacrificing performance.",
    image: "/images/ad-preview-1.jpg",
    textSecondary:
      "Powered by AI optimization and real-time analytics, Refinery89 helps publishers achieve higher RPM and better UX."
  },
  {
    title: "Seamless Integration",
    subtitle: "No Heavy Setup Needed",
    textPrimary:
      "Integrate our custom ad units in minutes using simple JavaScript or React components.",
    image: "/images/ad-preview-2.jpg",
    textSecondary:
      "Whether you're using Vite, Next.js, or plain HTML, our SDK is designed for easy drop-in use."
  },
  {
    title: "Optimized for Every Screen",
    subtitle: "Responsive by Default",
    textPrimary:
      "Our ads automatically adjust to any screen size and placement, delivering a smooth and consistent experience.",
    image: "/images/ad-preview-3.jpg",
    textSecondary:
      "No need for manual breakpoints or resizing — Refinery89 handles it all behind the scenes."
  }
];
export default function Home() {
    return (
        <>
            <Hero/>
            <div className="content pt-5">
                {textContents.map((content) => (
                    <div className="col">
                        <div className="row">
                            <h1>{content.title}</h1>
                            <p>{content.textPrimary}</p>ç
                            {content.image && <img src={content.image}></img>}
                        </div>
                        <div className="row">
                            <h3>{content.subtitle}</h3>
                            <p>{content.textSecondary}</p>ç
                        </div>
                    </div>
                ))}
            </div>
        </>
            
    )
}