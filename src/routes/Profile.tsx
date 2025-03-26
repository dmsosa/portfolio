import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { TBenutzer } from "../data/types";
import boy from "../assets/img/boy.png";

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
            <div className="container-fluid">
                <div className="row row2">Benutzer</div>
            </div>
    )
}