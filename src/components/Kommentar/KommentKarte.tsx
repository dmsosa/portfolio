
export default function KommentKarte({ username, image, bio, updatedAt, body } :  { username:string , image: string, bio:string, updatedAt:string, body:string }) {
    return ( 
        <div>
            <div>
                <div>
                    <img src={image} alt={`${username}'s profile Bild`} />
                </div>
            </div>
            <div>
                <div>
                    <div>{updatedAt}</div>
                    <p>{username}</p>
                    <span>{bio}</span>
                </div>
                <div>
                    <p>{body}</p>
                </div>
                <div>
                    <div>
                        <button>Like</button>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
        </div>
    )
}