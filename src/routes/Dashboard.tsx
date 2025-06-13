import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/Toggler/EndpunktToggler";
import BenutzerForms from "../components/Forms/BenutzerForms";
import { useAuth } from "../context/AuthContext";
import { useEndpunkt } from "../context/EndpunktContext";
import useBenutzer from "../hooks/useBenutzer";
import BenutzerArray from "../components/Benutzer/BenutzerArray";
import ArtikelArray from "../components/Artikel/ArtikelArray";
import TagsInput from "../components/Forms/TagsInput";
import { useTags } from "../context/TagsContext";


export default function Dashboard() {
    const { isAuth, loggedUser } = useAuth();
    const { entity } = useEndpunkt();
    const { tags, setTags } = useTags();
    // const [currentPage, setCurrentPage ] = useState(0);
    const {  loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }  = useArtikeln({endpunkt: 'global' });
    
    const {  loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }  = useBenutzer({ endpunkt: 'global' });

    return <div className="content px-3">
                { isAuth ? <h1>Hallo {loggedUser?.username}</h1> : <BenutzerForms/>}
                <div className="d-flex justify-content-center align-items-center gap-2
                mt-2 mb-3">
                    <div className="border border-width-2 bg-2 py-1 px-2 h-100">
                        <span className="align-self-center">Total Artikeln: {artikelnAnzahl}</span> 
                    </div>
                    <div className="border border-width-2 bg-2 py-1 px-2 h-100">
                        <span className="align-self-center">Total Benutzer: {benutzerAnzahl}</span> 
                    </div>
                </div>        
                <EndpunktToggler endpunkte={['global', 'feed']}/>
                <TagsInput tagsArray={tags} parentHandler={(t: string[]) => console.log(t)}/>
                <div className="row">
                { entity === 'artikel' ? 
                <ArtikelArray loading={loadingArtikeln} array={artikeln} setArrayData={setArtikelnDatei} artikelAnzahl={artikelnAnzahl} setOffset={setOffsetArtikeln} />
                :
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} setArrayData={setBenutzerDatei} benutzerAnzahl={benutzerAnzahl} setOffset={setOffsetBenutzer} />}
                </div>  
            </div>
}