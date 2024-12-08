import heroImg from "../../assets/img/front 2.png"
import { useThemeContext } from "../../context/ThemeContext";
import Section from "../Section";
import Cube from "../Widgets/Cube";
import Typewriter from "./Typewriter";

const messages = ["Hallo, ich bin Durian!", "Frontend Entwlicker.", "Code, Atmen, Repeat."];
function HeroBg() {

    const { theme } = useThemeContext();

    return (
        <Section name="ein" secondary={true}>
            <div className="d-flex flex-column flex-md-row">
                <div className="mx-auto pt-5 pt-md-0 order-1 order-sm-0">
                    <img src={heroImg} className="hero-bilder "></img>
                </div>
                <div className="mt-md-5 d-sm-flex flex-column justify-content-center">
                    <Cube />
                    <div className="typewriter w-100">
                        <Typewriter messages={messages} delay={125}/>
                        <span className="typewriter__cursor">|</span>
                    </div>
                    <p className="text-center">Frontend Developer, I enjoy to create responsive and optimized websites.  </p>
                    <a type="button" href="#uber" className={`btn hero-btn ${theme === "dark" ? "btn-secondary":"btn-primary"}`}>Contact Me</a>
                </div>
            </div>
        </Section>
    )
}

export default HeroBg;