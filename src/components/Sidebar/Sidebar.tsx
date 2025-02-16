import { useRef } from "react";


function Sidebar() {

    const sectionRef = useRef<HTMLDivElement>(null);


    return (
        <section ref={sectionRef} className="sidebar">
            <div className="sidebar--bg"></div>
            <div className="sidebar--content">
                <div className="sidebar--content--text">
                    <h1 className="text-wrap mb-0 fw-bold text-center"><span>FRONT END</span></h1>
                    <p className="text-wrap text-center"><span>that's what I do.</span></p>
                </div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <button className="btn btn-primary mb-2 w-100">Contact</button>
                    <button className="btn btn-secondary w-100">Find work</button>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;