import { useState } from "react";
import { TBenutzer } from "../../../data/types";
import { toggleFollow } from "../../../services/benutzer.services";
import { useAuth } from "../../../context/AuthContext";

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
    isFollowing ? 
    <button className="btn btn-info" onClick={handleClick}>Unfollow</button> 
    :
    <button className="btn btn-primary" onClick={handleClick}>Follow</button>
}