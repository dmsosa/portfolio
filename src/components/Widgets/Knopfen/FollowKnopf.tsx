import { useState } from "react";
import { TBenutzer } from "../../../data/types";
import { toggleFollow } from "../../../services/benutzer.services";

export default function FollowKnopf({ isFollowing, username, updateParentData } : { isFollowing:boolean, username: string, updateParentData: (author: TBenutzer) => void }) {
    const [ loading, setLoading ] = useState(false);
    const handleClick = () => {
        setLoading(true);
        toggleFollow({ headers: {}, isFollowing, username })
        .then((benutzer) => {
            updateParentData(benutzer);
        })
        .catch(console.error)
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