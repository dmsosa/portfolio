import Kontakt from "./Kontakt";
import Section from "../Section";

function Social() {
    return (
        <Section name="sechs">
            <div className="container container-lg">
                <h2 id="contact" className="text-center fw-bold">Send me a message:</h2>
                <div className="row">
                    <Kontakt />
                </div>
            </div>
        </Section>
        
    )
}

export default Social;