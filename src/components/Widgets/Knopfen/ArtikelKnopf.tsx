import { TArtikel, TBenutzer, TLoggedBenutzer } from "../../../data/types";
import EditKnopf from "./EditKnopf";
import FavoriteKnopf from "./FavoriteKnopf";
import FollowKnopf from "./FollowKnopf";
import RemoveKnopf from "./RemoveKnopf";

export default function ArtikelKnopf({ loggedUser, artikel, updateParentData } : { loggedUser: TLoggedBenutzer| null, artikel: TArtikel, updateParentData: React.Dispatch<React.SetStateAction<TArtikel>> }) {
    
    const handleFollow = (benutzer: TBenutzer) => {
        updateParentData((prevArtikel) => ({...prevArtikel, author: {...prevArtikel.author, isFollowing: benutzer.isFollowing}}))
    }
    const handleFav = (artikel: TArtikel) => {
        updateParentData((prevArtikel) => ({...prevArtikel, isFavorite: artikel.isFavorite, favoritesCount: artikel.favoritesCount}))
    }

    return loggedUser && loggedUser.username === artikel.author.username ? 
            <>
                <EditKnopf to={`editor`} state={{...artikel}}/>
                <RemoveKnopf slug={artikel.slug} />
            </>    
            :
            <>
                <FollowKnopf username={artikel.author.username} isFollowing={artikel.author.isFollowing} updateParentData={handleFollow}/>
                <FavoriteKnopf slug={artikel.slug} isFavorite={artikel.isFavorite} favoritesCount={artikel.favoritesCount} updateParentData={handleFav}/>
            </>
}