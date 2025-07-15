import { FaRegSadTear } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function NotFound() {
    return ( 
        <section className="content content-full-width h-100vh">
            <div className="d-flex justify-content-center align-items-center  flex-wrap px-4">
                <h1 className="fs-big text-primary">4</h1>
                <FaRegSadTear className="fs-big color-primary"/>
                <h1 className="fs-big text-primary">4</h1>
                
            </div>
            <div className="d-flex justify-content-center align-items-center flex-column">
            <p className="text-center fs-4">Oops, there is no page here</p>
            <Link to={'/'} className="btn btn-primary ">Back to home</Link>
            </div>
        </section>
    )
}