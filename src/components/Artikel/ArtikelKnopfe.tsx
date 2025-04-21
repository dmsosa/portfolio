import { Link } from "react-router-dom";
import { TArtikel, TBenutzer, TLoggedBenutzer } from "../../data/types";
import FollowKnopf from "../Widgets/Knopfen/FollowKnopf";

function ArtikelKnopfe({ author, loggedUser, updateParentData  } : { author: TBenutzer, loggedUser: TLoggedBenutzer | null, updateParentData: React.Dispatch<React.SetStateAction<TArtikel | undefined>> }) {
    const handleFollow = (benutzer: TBenutzer) => {
        updateParentData((prev: TArtikel | undefined) => {
            if (!prev) return prev;
            else return ({ ...prev, author: benutzer })});
    };
    return loggedUser && author.username === loggedUser.username ?
        <div className="d-flex justify-content-between align-items-center">
            <Link to={`/settings/${author.username}`} className="btn btn-primary" state={author}>Edit</Link>
            <Link to={`/editor`} className="btn btn-secondary">New Article</Link>
        </div>
        :
        <div className="d-flex justify-content-between align-items-center">
            <a href="#">Follow</a>
            <FollowKnopf isFollowing={author.isFollowing} username={author.username} updateParentData={handleFollow} />
        </div>
    
};

export default ArtikelKnopfe;