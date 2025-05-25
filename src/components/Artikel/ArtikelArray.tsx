import { TArtikel, TBenutzer } from "../../data/types";
import { TArtikelnDatei } from "../../hooks/useArtikeln";
import ArrayPagination from "../Widgets/ArrayPagination";
import ArtikelInfo, {  KeinArtikel } from "./ArtikelInfo";
import { ArtikelArrayPhamton } from "../Widgets/Phamton/Phamton";
import ArtikelKnopf from "../Widgets/Knopfen/ArtikelKnopf";

export default function ArtikelArray({ loading, array, setArrayData, artikelAnzahl, setOffset }: { loading: boolean, array: TArtikel[], setArrayData: React.Dispatch<React.SetStateAction<TArtikelnDatei>>, artikelAnzahl: number, setOffset: React.Dispatch<React.SetStateAction<number>>}) {

    const pageAnzahl = Math.ceil(artikelAnzahl/3);
    //Karte mit Knopf
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
        <ArtikelArrayPhamton/>
    )
    :
    array.length === 0 ?
        <KeinArtikel/>
    :
    (
        <div>
            {array.map((art) => 
                        <ArtikelInfo artikel={art} key={art.slug}>
                            <ArtikelKnopf artikel={art} handleFollow={handleFollow} handleFav={handleFav}/>
                        </ArtikelInfo>
                        )}
            <ArrayPagination loading={loading} pageAnzahl={pageAnzahl} setOffset={setOffset} />
        </div>
        
    )
}