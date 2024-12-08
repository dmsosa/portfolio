import { TSectionContext, useScroll } from "../../context/SectionContext";
import IconListe from "../Widgets/IconListe";

function Footer() {
    const { section, sectionObjekt } = useScroll() as TSectionContext;
    const isCurrent = sectionObjekt[section] === "footer";
    return (
        <footer className="section" data-section="footer" aria-hidden={isCurrent} tabIndex={-1}>
            <div className="container-fluid">
                <h2 className="text-center fw-bold">More Coding Here:</h2>
                <div className="footer-content">
                    <ul>
                        <li><a href="mailto:moderno@dmsosa.com">moderno@dmsosa.com</a></li>
                        <li><a href="https://bento.me/dmsosa">obento/dmsosa</a></li>
                        <li><a href="">Mein Werk</a></li>
                        <li><a href="">Meine Artikeln</a></li>
                        <li><a href="">Mein Lebenslauf</a></li>
                    </ul>
                </div>
                <div className="footer-bottom">
                    <IconListe />
                    <span className="d-block mx-auto">&#169; Duvi, 2024</span>
                </div>
            </div>
            
        </footer>
        
    )
}

export default Footer;