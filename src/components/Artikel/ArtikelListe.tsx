import { TArtikel, TBenutzer } from "../../data/types";
import FavoriteKnopf from "../Widgets/Knopfen/FavoriteKnopf";
import FollowKnopf from "../Widgets/Knopfen/FollowKnopf";
import RemoveKnopf from "../Widgets/Knopfen/RemoveKnopf";
import { TArtikelnDatei } from "../../hooks/useArtikeln";
import { Link } from "react-router-dom";
import ArrayPagination from "../Widgets/ArrayPagination";
import ArtikelInfo from "./ArtikelInfo";

export default function ArtikelListe({ loading, array, setArrayData, artikelAnzahl, setOffset }: { loading: boolean, array: TArtikel[], setArrayData: React.Dispatch<React.SetStateAction<TArtikelnDatei>>, artikelAnzahl: number, setOffset: React.Dispatch<React.SetStateAction<number>>}) {

    const pageAnzahl = Math.ceil(artikelAnzahl/3);
    //Karte mit Knopf
    const handleRemove = (artikel: TArtikel) => {
        setArrayData((prev) => (
        { 
            artikelnAnzahl: prev.artikelnAnzahl - 1,
            artikeln: prev.artikeln.filter((art) => art.slug !== artikel.slug)
        }))
    }
    const handleFollow = (benutzer: TBenutzer) => {
        const items = [...array];

        const updatedArtikeln = items.map((art) =>
            art.author.username === benutzer.username ? { ...art, author: {...art.author, isFollowing: benutzer.isFollowing } } : art,
        );

        setArrayData((prev) => (
            { 
                ...prev, 
                artikeln: updatedArtikeln
            }))
    }
    const handleFav = (artikel: TArtikel) => {
        const items = [...array];

        const updatedArtikeln = items.map((art) =>
            art.slug === artikel.slug ? { ...art, ...artikel } : art,
        );

        setArrayData((prev) => (
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
        <div>
            {array.map((art) => 
                        <ArtikelInfo artikel={art} key={art.slug}>
                            { art.author.username === '' ?
                                <div className="d-flex justify-content-between align-items-center">
                                    <Link to={art.slug}>Edit</Link>
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
            <ArrayPagination loading={loading} pageAnzahl={pageAnzahl} setOffset={setOffset} />
        </div>
        
    )
}