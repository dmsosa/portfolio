import { Link } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import {TBenutzer } from "../../../data/types";
import FollowKnopf from "./FollowKnopf";
import { FaEdit, FaSwatchbook } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

export default function BenutzerKnopf({ benutzer, handleFollow } : { benutzer: TBenutzer, handleFollow: (benutzer: TBenutzer) => void }) {
    const { loggedUser } = useAuth();

    return loggedUser && loggedUser.username === benutzer.username ? 
            <div className="d-flex justify-content-between align-items-center gap-3">
                <Link className='link' to={'/dashboard/editor'}><FaEdit/></Link>
                <Link className="link" to={'/dashboard/settings/'} state={{...loggedUser}}><FaGear/></Link>
            </div>    
            :
            <div className="d-flex justify-content-between align-items-center gap-3" >
                <FollowKnopf username={benutzer.username} isFollowing={benutzer.isFollowing} handleFollow={handleFollow}/>
                <Link className='link' to={`/dashboard/profile/${benutzer.username}`}><FaSwatchbook/></Link>

            </div>
}