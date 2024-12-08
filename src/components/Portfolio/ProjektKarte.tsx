import TechStack from "./TechStack";

export type tools = "spring" | "postgresql" | "react" | "typescript" | "nodejs" | "bootstrap";

function ProjektKarte({ link, title, icon, techstack, image, position="left" }: { 
    link: string, 
    title: string,
    icon: string, 
    techstack: tools[], 
    image: string,
    position?: "right" | "left", 
 }) {
    return (
            <div className={`projekt-karte  ${position === "right" ? "order-1":"order-0"}`}>
                <a className="text-decoration-none" href={link}>
                    <div className="projekt-karte-header">
                        <a className="fs-5 text-decoration-none" href={link}>{title}<i className={`bi bi-${icon}`}></i></a>
                    </div>
                    <div className="projekt-karte-img-wrap">
                        <img className="projekt-karte-img" src={image}></img>
                    </div>
                    <div className="projekt-karte-footer">
                        <TechStack techstack={techstack} />
                    </div>
                </a>
            </div>
        
    )
}

export default ProjektKarte;