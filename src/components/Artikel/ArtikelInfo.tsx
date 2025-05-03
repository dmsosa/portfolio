import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { TArtikel } from "../../data/types";
import Avatar from "../Widgets/Avatar";
import { BiAccessibility } from "react-icons/bi";
import { AiOutlineRead } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

export default function ArtikelInfo({ artikel, children } : { artikel: TArtikel, children: ReactNode }) {

        return (<div className="artikel--card">
                <div className="position-relative">
                    <Avatar bild={artikel.author.image} username={artikel.author.username} expanded />
                </div>
                <Link  to={`/dashboard/artikel/${artikel.slug}`} className="text-decoration-none link">
                    <h3>{artikel.title}</h3>
                    <p>{artikel.body.slice(0, 300)}</p>
                </Link>
                <ul className="ul-item">{artikel.tags.map((tag) => <li key={tag}><a className='link' href="">{tag}</a></li>)}</ul>
                <hr></hr>
                <div className="d-flex justify-content-between align-items-center">
                    {children}
                    <Link to={`/dashboard/artikel/${artikel.slug}`}><FaRegCommentDots className="me-2"/>32</Link>

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
        