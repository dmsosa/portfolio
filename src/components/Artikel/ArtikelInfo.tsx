import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { TArtikel } from "../../data/types";
import Avatar from "../Widgets/Avatar";
import { BiAccessibility } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function ArtikelInfo({ artikel, children } : { artikel: TArtikel, children: ReactNode }) {

        return (<div className="p-2 mb-3 border-container bg-second">
                    <div className="position-relative">
                        <Avatar bild={artikel.author.image} username={artikel.author.username} expanded />
                    </div>
                    <Link  to={`/dashboard/artikel/${artikel.slug}`} className="text-decoration-none link">
                        <h3>{artikel.title}</h3>
                        <p>{artikel.body.slice(0, 300)}</p>
                    </Link>
                    <ul className="ul-item fs-7">
                        {
                        artikel.tags.length > 4 ? artikel.tags.slice(0, 4).map((tag) => <li className="li-primary ms-0" key={tag}><a href="">{tag}</a></li>) 
                        : artikel.tags.map((tag) => <li className="li-primary ms-0" key={tag}><a href="">{tag}</a></li>)
                        }
                        <span>and {artikel.tags.length - 4} more...</span>
                    </ul>
                    <hr></hr>
                    <div className="d-flex justify-content-between align-items-center">
                        {children}
                        <Link to={`/dashboard/artikel/${artikel.slug}`}><FaRegCommentDots className="me-2"/>
                        {artikel.commentsCount}
                        </Link>

                        <Link to={`/dashboard/artikel/${artikel.slug}`}><AiOutlineRead/></Link>
                    </div>
                </div>)
        
    }

    export function KeinArtikel() {
        //if author, remove und edit knopf
        //if not: follow und fav knopf
        //slug
            return (
                <div className="d-flex justify-content-center align-items-center flex-column border-container">
                    <h1>Kein Artikel gefunden</h1>
                    <p>Hier gibt es noch keine Artikel</p>
                    <BiAccessibility size={100} />
                </div>
            )
    }
        