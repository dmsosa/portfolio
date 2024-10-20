import TechStack from "./TechStack";

export type tools = "spring" | "postgresql" | "react" | "typescript" | "nodejs" | "bootstrap";

function ProjektKarte({ link, title, icon, techstack, body, repo, image }: { link: string, title: string, icon: string, techstack: tools[], body: string, repo: string, image?: string | null }) {
    return (
        <div className="projekt-karte">
            { image && 
            <div className="projekt-karte-img">
                <img src={image}></img>
            </div>}
            <div className="projekt-karte-header">
                <a href={link}>{title}</a><span>{icon}</span>
                <TechStack techstack={techstack} />
            </div>
            <p className="projekt-karte-body">{body}</p>
            <a className="projekt-karte-footer" href={repo}>See GitHub Repository</a>
        </div>
    )
}

export default ProjektKarte;