import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { TArtikel } from "../../data/types";
import Avatar from "../Widgets/Avatar";

export default function ArtikelInfo({ artikel, children } : { artikel: TArtikel, children: ReactNode }) {
//if author, remove und edit knopf
//if not: follow und fav knopf
//slug
    return (<div className="artikel--card">
            <div className="d-flex justify-content-between align-items-center">
                <Avatar bild={artikel.author.image} username={artikel.author.username} expanded />
                { children }
            </div>
            <Link  to={`/dashboard/artikel/${artikel.slug}`} className="text-decoration-none link">
                <h3>{artikel.title}</h3>
                <span>{artikel.description.slice(0, 100)}</span>
                <p>{artikel.body.slice(0, 300)}</p>
            </Link>
            <ul className="link-list">{artikel.tags.map((tag) => <li key={tag}><a className='link' href="">{tag}</a></li>)}</ul>
            </div>)
    
}
