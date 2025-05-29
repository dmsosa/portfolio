import { useState } from "react";
import { TArtikel } from "../../../data/types";
import { toggleFavorite } from "../../../services/article.services";
import { useAuth } from "../../../context/AuthContext";
import useAuthFormContext from "../../../context/AuthFormContext";

export default function FavoriteKnopf({ isFavorite, favoritesCount, slug, handleFav } : { isFavorite:boolean, favoritesCount: number, slug: string, handleFav: (artikel: TArtikel) => void }) {
    const [ loading, setLoading ] = useState(false);
    const { headers, isAuth } = useAuth();
    const { setAuthFormContext } = useAuthFormContext();

    const handleClick = () => {
        if (!isAuth) {
            setAuthFormContext((prev) => ({...prev, visible: true }));
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