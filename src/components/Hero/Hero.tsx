import { useRef } from "react";


function Hero() {

    const sectionRef = useRef<HTMLDivElement>(null);


    return (
        <div ref={sectionRef} className="content hero">
                <div className="hero-bg">
                </div>
                <div className="hero-text">
                        <h1 className="h1 fw-bold drop-shadow-1 mb-3">
                            <span className="split d-flex">
                                <span className="line">Front</span>
                                <span className="line ms-2">+</span>
                                <span className="line ms-2">End</span>
                            </span>
                        </h1>
                        <h5 className="h5 fw-bold drop-shadow-1">
                            <span className="line">That's what I do</span>
                            <span className="line">.</span>
                        </h5>
                        <button className="btn btn-primary fw-bold px-4 py-2 mt-3">Get started</button>
                </div>
        </div>
    )
}

export default Hero;