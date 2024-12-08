import ProjektKarte, { tools } from "./ProjektKarte";

function ProjektSection({image, link, title, icon, body, techstack, repo, position="left"} : { 
    image: string, 
    link: string,
    title: string,
    icon: string,
    body: string,
    techstack: tools[],
    repo: string,
    position?: "right" | "left",
}) {
return (
    <div className=" px-md-5 pt-md-5">
        <ProjektKarte 
        image={image}
        link={link}
        title={title}
        icon={icon}
        techstack={techstack}
        />
        <p className={`description  ${position === "right" ? "order-0":"order-1"}`}>{body}</p>
        <a className="link" href={repo}>see GitHub repo<i className="bi bi-github"></i></a>
    </div>
)
};


export default ProjektSection;