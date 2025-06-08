import { useRef } from "react";
import ContactForm from "../Widgets/ContactForm";
import {ET} from "../Widgets/Svg/ContentSvg";
import { useGSAP } from "@gsap/react";
import FooterNav from "./FooterNav";
import { MdCopyright } from "react-icons/md";

export default function Footer() {

    const footerRef = useRef<HTMLDivElement >(null);
    useGSAP(() => {
        if (!footerRef.current) return;
        gsap.from('.icon', {
            transform: "translateY(100%) rotate(-10deg)",})
    }, {scope: footerRef});


    return (
        <footer className="position-relative w-100 ">
            <FooterNav/>
            <div>
                <div className="row row-cols-md-2 bg-2 p-5">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <h2 className="h2 text-epic">
                            Want to work with me?
                        </h2>
                        <ET />
                    </div>
                    <div className="col col-12">
                        <ContactForm />
                    </div>
                </div>
                <div className="row bg-1 w-100 p-3">
                    <a href="https://github.com/dmsosa" className="text-center fs-6 text-decoration-none"><MdCopyright/>dmsosa | 2025</a>
                </div>
            </div>
        </footer>
            
    )
}