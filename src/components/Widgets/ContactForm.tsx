import SvgListe from "./Svg/SvgListe";

export default function ContactForm() {
    return (
        <div className="row">

            <div className="col mb-3">
                <form className="contact-form">
                    <h2 className="h2 text-epic">Contact Me</h2>
                    <p className="p">I would love to hear from you! Please fill out the form below and I will get back to you as soon as possible.</p>
                    <fieldset className="input-wrap">
                        <input type="email" id="contact-me-email" required placeholder=""/>
                        <label htmlFor="contact-me-email">Email</label>
                    </fieldset>
                    <fieldset className="input-wrap">
                        <textarea id="contact-me-text" required placeholder=""/>
                        <label htmlFor="contact-me-text" >Message</label>

                    </fieldset>
                    <button type="submit" className="btn btn-primary w-75 mx-auto d-block mt-3">Send</button>
                </form>
            </div>
            <div className="col">
                <SvgListe icons={["wsp", "email", "github"]} />
            </div>
        </div>
        
    )
}