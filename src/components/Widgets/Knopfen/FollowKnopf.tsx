import { useState } from "react";
import { TBenutzer } from "../../../data/types";
import { toggleFollow } from "../../../services/benutzer.services";
import { useAuth } from "../../../context/AuthContext";
import { IsFollowingSvg, IsNotFollowingSvg } from "../Svg/ContentSvg";
import useAuthFormContext from "../../../context/AuthFormContext";

export default function FollowKnopf({ isFollowing, username, handleFollow } : { isFollowing:boolean, username: string, handleFollow: (author: TBenutzer) => void }) {
    const [ loading, setLoading ] = useState(false);
    const { headers, isAuth } = useAuth();
    const { setAuthFormContext } = useAuthFormContext();
    const handleClick = () => {
        if (!isAuth) {
            setAuthFormContext((prev) => ({...prev, visible: true }));
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