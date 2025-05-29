import { useRef } from "react";
import ContactForm from "../Widgets/ContactForm";
import {ET} from "../Widgets/Svg/ContentSvg";
import { useGSAP } from "@gsap/react";
import FooterNav from "./FooterNav";

export default function Footer() {

    const footerRef = useRef<HTMLDivElement >(null);
    useGSAP(() => {
        if (!footerRef.current) return;
        gsap.from('.icon', {
            transform: "translateY(100%) rotate(-10deg)",})
    }, {scope: footerRef});


    return (
        <footer >
            <FooterNav/>
            <div className="container">
                <div className="row row-cols-md-2">
                    <div className="col col-12">
                        <h2 className="h2 text-epic">
                            Want to collaborate?
                        </h2>
                        <ET />
                    </div>
                    <div className="col col-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </footer>
            
    )
}