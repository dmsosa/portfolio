import hero from "../../assets/img/fot.png";
import { useRef } from "react";
import Portfolio from "../Portfolio/Portfolio";


function HeroBg() {

    const sectionRef = useRef<HTMLDivElement>(null);


    return (
        <section ref={sectionRef} className="hero">
                <div className="slide">
                    <div className="hero-content">
                        <div className="images">
                            <img src={hero} alt="" />
                        </div>
                        <div className="text">
                            <h1>Front + End</h1>
                            <p>That's what I do</p>
                            <button></button>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <Portfolio/>
                </div>
        </section>
    )
}

export default HeroBg;