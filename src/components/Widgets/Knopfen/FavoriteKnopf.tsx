import { useState } from "react";
import { TArtikel } from "../../../data/types";
import { toggleFavorite } from "../../../services/article.services";

export default function FavoriteKnopf({ isFavorite, favoritesCount, slug, updateParentData } : { isFavorite:boolean, favoritesCount: number, slug: string, updateParentData: (artikel: TArtikel) => void }) {
    const [ loading, setLoading ] = useState(false);
    const handleClick = () => {
        setLoading(true);
        toggleFavorite({ headers: {}, isFavorite, slug })
        .then((artikel) => {
            updateParentData(artikel);
        })
        .catch(console.error)
        .finally(() => setLoading(false));
    }
    return loading ? 
    <div>is Loading</div>
    :
    isFavorite ? 
    <button className="btn btn-primary" onClick={handleClick}>Unfav</button> 
    :
    <button className="btn btn-warning" onClick={handleClick}>Fav {favoritesCount} </button>
}