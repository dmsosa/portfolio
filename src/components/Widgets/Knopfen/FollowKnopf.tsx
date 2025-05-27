import { useState } from "react";
import { TBenutzer } from "../../../data/types";
import { toggleFollow } from "../../../services/benutzer.services";
import { useAuth } from "../../../context/AuthContext";
import { IsFollowingSvg, IsNotFollowingSvg } from "../FollowKnopfSvg";

export default function FollowKnopf({ isFollowing, username, handleFollow } : { isFollowing:boolean, username: string, handleFollow: (author: TBenutzer) => void }) {
    const [ loading, setLoading ] = useState(false);
    const { headers, isAuth } = useAuth();
    const handleClick = () => {
        if (!isAuth) {
            alert('Du musst angemeldet sein, um Follow setzen zu konnen!');
            return;
        }
        setLoading(true);
        toggleFollow({ headers: headers!, isFollowing, username })
        .then((benutzer) => {
            handleFollow(benutzer);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => setLoading(false));
    }
    return loading ? 
    <div>is Loading</div>
    :
    <button className={isFollowing ? 'btn' : 'btn'} onClick={handleClick}>
        { isFollowing ? <IsFollowingSvg /> : <IsNotFollowingSvg /> }
    </button>
}