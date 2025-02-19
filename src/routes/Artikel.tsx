import artikelArray from "../data/articles"

export default function Artikel() {
    const artikel = artikelArray[0];
    return (
        <div className="artikel--wrap">
            <div className="artikel--top">
                <h1>{artikel.title}</h1>
            </div>
            <div className="artikel--desc">
                <div className="benutzer--bild">
                    <div></div>
                    <span>dmsosa</span>
                </div>
                <ul className="ul-item">
                    {artikel.tags.map((tag) => (<li key={tag} className="li-item"><a>{tag}</a></li>))}
                </ul>
                <span>{artikel.description}</span>
            </div>
            <div className="artikel--main">
                <p>{artikel.body}</p>
            </div>
            <div className="artikel--kommentar">
                <div className="kommentar--form">
                    <div className="benutzer--bild">
                        <div></div>
                        <span>Benutzer3</span>
                    </div>
                    <form>
                        <fieldset>
                            <label htmlFor="kommentarBody">New comment</label>
                            <input id="kommentarBody" type="text" value={"Das ist toll"}/>
                        </fieldset>
                        <button className="btn btn-primary">comment</button>
                    </form>
                </div>
                <div className="kommentar--wrap">
                    {artikel.kommentar.map((komm) => (
                        <div className="kommentar--karte">
                            <div className="kommentar--body">
                                <div className="benutzer--bild">
                                    <div></div>
                                    <span>{komm.author.username}</span>
                                </div>
                                <div className="kommentar--body--text">
                                    <p>{komm.body}</p>
                                    <span>created: 22.04.2025</span>
                                    <span>updated: 22.04.2025</span>
                                </div>
                            </div>
                            <div className="kommentar-btns">
                                <button className="btn btn-primary">Like</button>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}