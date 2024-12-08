import Section from "../Section";
import dmblog from "../../assets/img/dmblog.png";
import  jdss  from "../../assets/img/jadassa.png";
import ProjektSection from "./ProjektSection";

function Portfolio() {
    return (
        <>
        <Section name="zwei">
            <div className="section-content">
                <h1 id="portfolio" className="fw-bold text-center text-zeigen-left clearfix" >My work</h1>
                <span>I really enjoy with JavaScript, which makes me able to work comfortably with the most modern technologies!</span>
                <a className="link">my projects on Github <i className="bi bi-github"></i></a>
            </div>
        </Section>
        <Section name="drei">
            <div className="section-content">
                <ProjektSection
                title="Realworld Blog"
                image={dmblog}
                body="In building Frontend applications I'm specialized with JavaScript, which makes me able to work comfortably with the most modern technologies like Next.JS, React or NodeJS,  independently of the framework, resilient solutions optimized for scale — performance and scalabilty are priorities on my projects."
                techstack={["react", "typescript", "spring", "postgresql"]}
                icon={"emoji-laughing-fill"}
                link={"https://dmsosa.github.io/dmblog/"}
                repo={"https://github.com/dmsosa/dmblog"}
                />
            </div>
        </Section>
        <Section name="vier">
            <div className="section-content">
                <ProjektSection
                title="React: All in One"
                image={jdss}
                body="In building Frontend applications I'm specialized with JavaScript, which makes me able to work comfortably with the most modern technologies like Next.JS, React or NodeJS,  independently of the framework, resilient solutions optimized for scale — performance and scalabilty are priorities on my projects."
                techstack={["react", "typescript", "spring", "postgresql"]}
                icon={"robot"}
                link={"https://dmsosa.github.io/jadassa-page/"}
                repo={"https://github.com/dmsosa/jadassa-page"}
                position="right"
                />
            </div>
        </Section>
        </>
        

    )
}

export default Portfolio;