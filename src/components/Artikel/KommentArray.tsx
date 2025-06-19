import { TKomment } from "../../data/types";
import { TKommentDatei } from "../../hooks/useKomment";
import KommentInfo from "../Komment/KommentInfo";
import ArrayPagination from "../Widgets/ArrayPagination";
import { KommentArrayPhamton } from "../Widgets/Phamton/Phamton";

export default function KommentArray({ loading, array, setArrayData, kommentAnzahl, limit, setOffset }: { loading: boolean, array: TKomment[], setArrayData: React.Dispatch<React.SetStateAction<TKommentDatei>>, kommentAnzahl: number, limit:number, setOffset: React.Dispatch<React.SetStateAction<number>>}) {

    //handle Edit, handle delete, handleLike


    return loading ?
        <KommentArrayPhamton/>
        :
        array.length === 0 ?
        <>
            <h5>Es gibt noch keine Kommentare</h5>
            <p>Sei der Erste, der einen Kommentar hinterlässt</p>
        </>
        :
        <div className="w-80 mx-auto">
            {array.map((komment) => 
                <KommentInfo key={komment.id} id={komment.id} bild={komment.author.image} updatedAt={komment.updatedAt} username={komment.author.username} body={komment.body} kommentArray={array} setParentData={setArrayData}/>
            ) }
            <ArrayPagination loading={loading} pageAnzahl={Math.ceil(kommentAnzahl/limit)} setOffset={setOffset} />
        </div>
        
}