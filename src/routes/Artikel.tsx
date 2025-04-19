import artikelArray from "../data/articles"
import boy from "../assets/img/boy.png";
import BenutzerInfo from "../components/Widgets/Benutzer/BenutzerInfo";
import { TBenutzer } from "../data/types";

const sampleBenutzer: TBenutzer = {
    username: 'string',
    image: boy,
    bio: 'Ich nutze das Dmblog!',
    isFollowing: false,
    followingCount: 33,
    followersCount: 2,
    createdAt: '23-35-2025:23:34:34T',
    updatedAt: '22-03-0333',
}
export default function Artikel() {
    const artikel = artikelArray[0];
    return (
        <div className="artikel--wrap">
            <div className="row row-cols-md-2">
                <div className="col-12 col-md-8">
                    <div className="artikel--top d-flex justify-content-start align-items-center">
                        <h1>{artikel.title}</h1>
                    </div>
                    <hr></hr>
                    <div className="artikel--desc">
                        <BenutzerInfo benutzer={sampleBenutzer}>
                            <button>Folg</button>
                        </BenutzerInfo>
                        <p>{artikel.description}</p>
                        <div className="tags">
                            <ul>
                                {artikel.tags.map((tag) => (<li key={tag}><a>{tag}</a></li>))}
                            </ul>
                        </div>
                    </div>
                    <div className="artikel--main">
                        <p>{artikel.body}</p>
                    </div>
                    <div className="container">
                        <div className="container">
                            <div className="benutzer--bild">
                                <img src={boy} alt={`${artikel.title}'s profile image`} />
                                <span>dmsosa</span>
                            </div>
                            <form>
                                <fieldset>
                                    <label htmlFor="kommentarBody">New comment</label>
                                    <input id="kommentarBody" type="text" value={"Das ist toll"}/>
                                </fieldset>
                                <button className="btn btn-primary">comment</button>
                            </form>
                        </div>
                        <div className="kommentar--wrap mt-5 bg-dark2">
                            {artikel.kommentar.map((komm) => (
                                <div className="container">
                                    <div className="row">
                                        <BenutzerInfo benutzer={sampleBenutzer}>
                                            <button>Folg</button>
                                        </BenutzerInfo>       
                                        <div className="ms-5">
                                            <span>{'25-2025'}</span>
                                            <p>{komm.body}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-flex ms-5 justify-content-start align-items-center"
                                        >
                                            <button className="btn btn-primary">follow</button>
                                            <button className="btn btn-secondary ms-2">like</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                <div className="col col-md-4">
                    <ul>
                        <li>more articles</li>
                        <li>my cv</li>
                        <li>email</li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}