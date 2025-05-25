import { FaEdit } from "react-icons/fa";
import { TArtikel, TBenutzer } from "../../../data/types";
import FavoriteKnopf from "./FavoriteKnopf";
import FollowKnopf from "./FollowKnopf";
import RemoveKnopf from "./RemoveKnopf";
import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function ArtikelKnopf({  artikel, handleFollow, handleFav } : { artikel: TArtikel, handleFollow: (benutzer: TBenutzer) => void, handleFav: (artikel: TArtikel) => void }) {
    const { loggedUser } = useAuth();

    return loggedUser && loggedUser.username === artikel.author.username ? 
            <>
                <Link className='link' to={'/dashboard/editor'} state={{...artikel}}><FaEdit/></Link>
                <RemoveKnopf slug={artikel.slug} />
            </>    
            :
            <>
                <FollowKnopf username={artikel.author.username} isFollowing={artikel.author.isFollowing} handleFollow={handleFollow}/>
                <FavoriteKnopf slug={artikel.slug} isFavorite={artikel.isFavorite} favoritesCount={artikel.favoritesCount} handleFav={handleFav}/>
            </>
}