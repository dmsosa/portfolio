import { Link } from "react-router-dom";
import boy from "../../../assets/img/boy.png";
import { ReactNode } from "react";
import { TArtikel } from "../../../data/types";
import Avatar from "../Avatar";

export default function ArtikelInfo({ artikel, children } : { artikel: TArtikel, children: ReactNode }) {
//if author, remove und edit knopf
//if not: follow und fav knopf
//slug
    return (<div className="artikel--card">
            <div className="d-flex justify-content-between align-items-center">
                <Avatar bild={boy} username={artikel.author.username} expanded />
                { children }
            </div>
            <Link to={artikel.slug} className="text-decoration-none">
                <h3>{artikel.title}</h3>
                <span>{artikel.description}</span>
                <p>{artikel.body.slice(0, 151)}</p>
            </Link>
            <ul className="ul-tag">{artikel.tags.map((tag) => <li key={tag}><a href="">{tag}</a></li>)}</ul>
            </div>)
    
}
