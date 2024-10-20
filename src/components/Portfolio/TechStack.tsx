import { tools } from "./ProjektKarte";

function TechStack({ techstack } : { techstack: tools[] }) {
    return (
        <ul className="techstack">
            { techstack.map((tool) => <li key={tool}><img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${tool}/${tool}-original.svg`} /></li>)}
        </ul>
    )
}
export default TechStack;