import { TBenutzer } from "../../data/types";
import { TBenutzerDatei } from "../../hooks/useBenutzer";
import BenutzerInfo from "./BenutzerInfo";
import ArrayPagination from "../Widgets/ArrayPagination";
import BenutzerKnopf from "../Widgets/Knopfen/BenutzerKnopf";

export default function BenutzerArray({ loading, array, setArrayData, benutzerAnzahl, limit, setOffset }: { loading: boolean, array: TBenutzer[], setArrayData: React.Dispatch<React.SetStateAction<TBenutzerDatei>>, benutzerAnzahl: number, limit: number, setOffset: React.Dispatch<React.SetStateAction<number>>}) {
        const handleFollow = (benutzer: TBenutzer) => {
        const updatedArray = array.map((b) =>
            b.username === benutzer.username ? { ...b, isFollowing: benutzer.isFollowing }  : b,
        );

        setArrayData((prev) => (
            { 
                ...prev, 
                benutzer: updatedArray
            }))
    }
    return loading ? 
    (
        <div>Loading</div>
    )
    :
    array.length === 0 ?
    <div className="text-center">
        Kein benutzer gefunden
    </div>
    :
    (
        <div>
            {
            array.map((benutzer) => 
                <BenutzerInfo benutzer={benutzer} key={benutzer.username}>
                    <BenutzerKnopf benutzer={benutzer} handleFollow={handleFollow} />
                </BenutzerInfo>
                )
            }
            <ArrayPagination loading={loading} pageAnzahl={Math.ceil(benutzerAnzahl/limit)} setOffset={setOffset} />
        </div>
    )
}