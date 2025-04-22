import { TBenutzer } from "../../data/types";
import FollowKnopf from "../Widgets/Knopfen/FollowKnopf";
import { TBenutzerDatei } from "../../hooks/useBenutzer";
import BenutzerInfo from "./BenutzerInfo";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import ArrayPagination from "../Widgets/ArrayPagination";

export default function BenutzerArray({ loading, array, setArrayData, benutzerAnzahl, setOffset }: { loading: boolean, array: TBenutzer[], setArrayData: React.Dispatch<React.SetStateAction<TBenutzerDatei>>, benutzerAnzahl: number, setOffset: React.Dispatch<React.SetStateAction<number>>}) {
    
    const pageAnzahl = Math.ceil(benutzerAnzahl/3);
    const { loggedUser } = useAuth();
   
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
                    { benutzer.username === loggedUser?.username ?
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`profiles/${benutzer.username}`} className="btn btn-info">
                                Edit
                            </Link>
                        </div>
                    :
                        <div className="d-flex justify-content-between align-items-center">
                            <FollowKnopf isFollowing={benutzer.isFollowing} username={benutzer.username} updateParentData={handleFollow}/>
                        </div>
                    }
                </BenutzerInfo>
                )
            }
            <ArrayPagination loading={loading} pageAnzahl={pageAnzahl} setOffset={setOffset} />
        </div>
    )
}