import Content from "../About/Content";
import wsp from "../../assets/img/wsp.png";
import email from "../../assets/img/email.png";


function Contact() {
    return (
        <section>
            <div className="container container-lg">
                <Content
                title="DO YOU WANT A PROJECT?">
                        <h2 className="text-center">Contact me</h2>
                        <div className="d-flex justify-content-between align-items-center">
                            <img className="w-50" src={wsp} alt="" />
                            <img className="w-50" src={email} alt="" />
                        </div>
                </Content>
            </div>
        </section>
    )
}

export default Contact;