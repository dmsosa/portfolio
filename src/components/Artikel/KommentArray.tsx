import { TKomment } from "../../data/types";
import useKomment from "../../hooks/useKomment";
import ArrayPagination from "../Widgets/ArrayPagination";

export default function KommentArray({ slug } : { slug?: string }) {
    const { loading, kommentAnzahl, kommentArray, setOffset } = useKomment({ slug });
    return loading ?
        <div>Loading</div>
        :
        kommentArray.length === 0 ?
        <div className="container">
            <h5>Es gibt noch keine Kommentare</h5>
            <p>Sei der Erste, der einen Kommentar hinterlässt</p>
        </div>
        :
        <div className="container">
            {
                kommentArray.map((komment: TKomment) => 
                    <div key={komment.body}>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col-12 col-md-8">
                                <h5>{komment.body}</h5>
                                <p>komment updated</p>
                            </div>
                            <div className="col col-md-4">
                                <p>{komment.author.username}</p>
                            </div>
                        </div>
                    </div>
                )   
            }
            <ArrayPagination loading={loading} pageAnzahl={Math.ceil(kommentAnzahl/5)} setOffset={setOffset} />
        </div>
        
}