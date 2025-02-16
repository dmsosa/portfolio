
import { useRef } from "react";
import { projectsArray } from "../../data/projects";
import ProjektKarte from "./ProjektKarte";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Portfolio() {

    const sectionRef = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);
    //     gsap.utils.toArray(".project-card").forEach((card) => {
    //         const target = card as Element;
    //         gsap.to(target, {
    //             position: "absolute",
    //             scrollTrigger: {
    //                 trigger: sectionRef.current,
    //                 start: "top top",
    //                 end: "top bottom",
    //                 markers: true,
    //             }
    //         })
    //     })
    // }, { scope: sectionRef })
    return (
        <section ref={sectionRef}>
            <h1 className="text-wrap text-center fw-bold mb-4">
                <span>projekte</span>
            </h1>
            <div className="p-4">
                {projectsArray.map((project, index) => {
                    return (
                        <ProjektKarte
                        index={index + 1}
                        repo={project.repo}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        createdAt={"2022.20.1"}
                        updatedAt={"2022.20.1"}
                        tools={project.tools}
                        />
                    )
                })}
            </div>
            
            <span className="ps-3">Und es gibt mehr...</span>
        </section>
        

    )
}

export default Portfolio; 