import { Link } from "react-router-dom";

export default function EditKnopf({ slug } : { slug: string }) {
    
    return <Link to={slug} className="btn btn-info">
                Edit
            </Link>
}