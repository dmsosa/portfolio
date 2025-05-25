import { useState } from "react";
import { TArtikel } from "../../../data/types";
import { toggleFavorite } from "../../../services/article.services";
import { useAuth } from "../../../context/AuthContext";

export default function FavoriteKnopf({ isFavorite, favoritesCount, slug, handleFav } : { isFavorite:boolean, favoritesCount: number, slug: string, handleFav: (artikel: TArtikel) => void }) {
    const [ loading, setLoading ] = useState(false);
    const { headers, isAuth } = useAuth();
    const handleClick = () => {
        if (!isAuth) {
            alert('Du musst angemeldet sein, um Fav setzen zu konnen!');
            return;
        }
        setLoading(true);
        toggleFavorite({ headers: headers!, isFavorite, slug })
        .then((artikel) => {
            handleFav(artikel);
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