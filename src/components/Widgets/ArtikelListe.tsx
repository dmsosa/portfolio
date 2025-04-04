import { TArtikel, TBenutzer } from "../../data/types";
import { TArtikelnDatei } from "../../hooks/useArtikeln";
import ArtikelInfo from "./ArtikelInfo";
import EditKnopf from "./Knopfen/EditKnopf";
import FavoriteKnopf from "./Knopfen/FavoriteKnopf";
import FollowKnopf from "./Knopfen/FollowKnopf";
import RemoveKnopf from "./Knopfen/RemoveKnopf";

export default function ArtikelListe({ loading, artikelnArray, setArtikelnDatei }: { loading: boolean, artikelnArray: TArtikel[], setArtikelnDatei: React.Dispatch<React.SetStateAction<TArtikelnDatei>>}) {
    //Karte mit Knopf
    const handleRemove = (artikel: TArtikel) => {
        setArtikelnDatei((prev) => (
        { 
            artikelnAnzahl: prev.artikelnAnzahl - 1,
            artikeln: prev.artikeln.filter((art) => art.slug !== artikel.slug)
        }))
    }
    const handleFollow = (benutzer: TBenutzer) => {
        const items = [...artikelnArray];

        const updatedArtikeln = items.map((art) =>
            art.author.username === benutzer.username ? { ...art, author: {...art.author, isFollowing: benutzer.isFollowing } } : art,
        );

        setArtikelnDatei((prev) => (
            { 
                ...prev, 
                artikeln: updatedArtikeln
            }))
    }
    const handleFav = (artikel: TArtikel) => {
        const items = [...artikelnArray];

        const updatedArtikeln = items.map((art) =>
            art.slug === artikel.slug ? { ...art, ...artikel } : art,
        );

        setArtikelnDatei((prev) => (
            { 
                ...prev, 
                artikeln: updatedArtikeln
            }))
    }
    return loading ? 
    (
        <div>Loading</div>
    )
    :
    (
        <div className="container">
            {artikelnArray.map((art) => 
            <ArtikelInfo artikel={art} key={art.slug}>
                { art.author.username === '' ?
                    <div className="d-flex justify-content-between align-items-center">
                        <EditKnopf slug={art.slug}/>
                        <RemoveKnopf slug={art.slug} updateParentData={handleRemove}/>
                    </div>
                :
                    <div className="d-flex justify-content-between align-items-center">
                        <FollowKnopf isFollowing={art.author.isFollowing} username={art.author.username} updateParentData={handleFollow}/>
                        <FavoriteKnopf isFavorite={art.isFavorite} slug={art.slug} updateParentData={handleFav}/>
                    </div>
                }
            </ArtikelInfo>
            )}
        </div>
    )
}