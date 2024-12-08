import {  ReactNode } from "react";
import { TSectionContext, useScroll } from "../context/SectionContext";


const scrollObjekt: { [name:string]: number } = {};
const sections = document.querySelectorAll(".bereich");

for (let i = 0 ; i < sections.length ; i++ ){
    let section = sections[i] as HTMLDivElement;
    let name = section.dataset.section as string;
    scrollObjekt[name] = i;
}
console.log("scrollContext initialisiert");



function Section({ children, name, secondary = false }: { children: ReactNode | ReactNode[], name: string, secondary?: boolean | undefined }) {

    const { section, sectionObjekt } = useScroll() as TSectionContext;
    const isCurrent = sectionObjekt[section] === name;
    return (
        <section 
        className={`${secondary? "section": "section-2"}`} 
        data-section={name} 
        aria-hidden={!isCurrent} 
        tabIndex={-1}>
            {children}
        </section>
    )
}

export default Section;