import { useRef } from "react";


function Hero() {

    const sectionRef = useRef<HTMLDivElement>(null);


    return (
        <div ref={sectionRef} className="content hero">
                <div className="hero-bg">
                </div>
                <div className="hero-text">
                        <h1 className="h1 text-epic fw-bold">
                            <span className="split d-flex">
                                <span className="line">Front</span>
                                <span className="line ms-2">+</span>
                                <span className="line ms-2">End</span>
                            </span>
                        </h1>
                        <p className="p">
                            <span className="split">
                                <span className="line">That's what I do</span>
                                <span className="line">.</span>
                            </span>
                        </p>
                        <button className="btn btn-primary">Get started</button>
                </div>
        </div>
    )
}

export default Hero;