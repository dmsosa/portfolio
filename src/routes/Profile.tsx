import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { TBenutzer } from "../data/types";
import boy from "../assets/img/boy.png";
import BenutzerInfo from "../components/Widgets/BenutzerInfo";

const user: TBenutzer = {
    username: 'benutzer1',
    email: 'string@string.com',
    image: boy,
    bio: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English',
    isFollowing: false,
    followingCount: 34,
    followersCount: 22,
    createdAt: '05-03-2025',
    updatedAt: '15-03-2025',
}
export default function Profile() {
    const { username } = useParams();
    useEffect(() => {
        console.log('fetch user ' + username + user);
    })
    return (
        <>
            <div className="main-bg">
                <div className="d-flex justify-content-between align-self-end w-100 px-5 py-3">
                    <BenutzerInfo bild={user.image} username={user.username} expanded={true}/>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-primary me-3">Follow</button>
                        <a href={`mailto:${user.email}`}>Email</a>
                    </div>
                </div>
            </div>
            <div className="benutzer--text">
                <h2>{user.username}</h2>
                <p>{user.bio}</p>
                <div className="d-flex justify-content-start align-items-center">
                    <span>Follow: {user.followersCount}</span>
                    <span className="ms-3">Following: {user.followingCount}</span>
                </div>
            </div>

        </>
    )
}