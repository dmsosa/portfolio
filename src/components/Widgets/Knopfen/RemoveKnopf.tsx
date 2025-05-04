import { useState } from "react";
import { TArtikel } from "../../../data/types";
import { removeArtikel } from "../../../services/article.services";

export default function RemoveKnopf({ slug, updateParentData } : { slug: string, updateParentData?: (artikel: TArtikel) => void }) {
    const [ loading, setLoading ] = useState(false);
    const handleClick = () => {
        //headers
        //confirmation
        const confirmation = window.confirm('Bist du sicher, dass du diesen Artikel entfernen mochtest?');
        if (!confirmation) return;

        setLoading(true);
        removeArtikel({ headers: {}, slug })
        .then((artikel) => {
            if (updateParentData) {
                updateParentData(artikel)
            } else {
                window.location.href = '/';
            }
            })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
    return loading ? 
    <div>is Loading</div>
    :
    <button className="btn btn-warning" onClick={handleClick}>Remove</button>
}