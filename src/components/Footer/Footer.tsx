import ET from "../Widgets/ET";

export default function Footer() {
    return (
        <footer>
            <div className="d-flex flex-column">
                <div>
                    <h2 className="h2">
                        <span className="line">Want to collaborate?</span>
                    </h2>
                    <ET />
                    <p className="text-epic text-center w-80 mx-auto"><span className="line">Get in touch</span></p>
                </div>
            </div>
        </footer>
            
    )
}