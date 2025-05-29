
import { useRef } from "react";
import { projectsArray } from "../../data/projects";
import ProjektKarte from "./ProjektKarte";

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
        <div ref={sectionRef} className="content pt-5">
            <p className="text-left w-80 mx-auto fs-6 mb-5 mt-0">
                Hi, I'm Durian Sosa —— a full-stack developer passionate about crafting seamless digital experiences with React, TypeScript, and Node.js. I love diving into both the frontend and backend, working fluidly with Java, MongoDB, and PostgreSQL. Beyond code, I'm a lifelong learner with a love for math, well-being, and technology. I speak six languages (🇩🇪 🇫🇷 🇪🇸 🇮🇹 🇬🇧 🇧🇷), and when I'm not coding, you’ll find me playing football, practicing yoga, or swimming laps.
            </p>
            <h2 className="h2 text-center">
                <div className="line">projekte</div>
            </h2>
            <div className="pt-4 d-flex flex-column flex-sm-row flex-wrap gap-4 justify-content-center align-items-center">
                {projectsArray.map((project, index) => {
                    return (
                        <ProjektKarte
                        key={project.title}
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
        </div>
        

    )
}

export default Portfolio; 