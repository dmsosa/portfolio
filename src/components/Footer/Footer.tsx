import { useRef } from "react";
import ContactForm from "../Widgets/ContactForm";
import {ET} from "../Widgets/Svg/ContentSvg";
import { useGSAP } from "@gsap/react";
import FooterNav from "./FooterNav";
import { MdCopyright } from "react-icons/md";
import CopyEmail from "./CopyEmail";

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
            <div className="d-flex flex-column flex-md-row bg-2 p-5">
                <div className="d-flex align-items-center justify-content-center align-items-md-start mb-5">
                    <h2 className="h2 text-epic">
                        Want to work with me?
                    </h2>
                    <ET />
                </div>
                <div>
                    <div className="w-sm-80 mb-5 mx-auto">
                        <h5 className="h5">Feel free to contact me:</h5>
                        <p>option 1:</p>
                        <ContactForm />
                    </div>
                    <div className="">
                        <p>option 2:</p>
                        <CopyEmail />
                        <a href="mailto:dmsosa21@outlook.com" className="w-100 mx-auto p-1 text-decoration-none bg-primary d-block text-center btn fw-bold mb-3">send me your message</a>
                    </div>
                </div>
            </div>
            <div className="bg-1 w-100 p-3 pb-6 d-flex justify-content-between align-items-center">
                <a href="https://github.com/dmsosa" className="text-center fs-6 text-decoration-none"><MdCopyright/>dmsosa | 2025</a>
                <span>all rights reserved</span>
            </div>
        </footer>
            
    )
}