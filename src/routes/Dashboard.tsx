import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/Toggler/EndpunktToggler";
import BenutzerForms from "../components/Forms/BenutzerForms";
import { useAuth } from "../context/AuthContext";
import { useEndpunkt } from "../context/EndpunktContext";
import useBenutzer from "../hooks/useBenutzer";
import BenutzerArray from "../components/Benutzer/BenutzerArray";
import ArtikelArray from "../components/Artikel/ArtikelArray";


export default function Dashboard() {
    const { isAuth, loggedUser } = useAuth();
    const { entity } = useEndpunkt();
    // const [currentPage, setCurrentPage ] = useState(0);
    const {  loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }  = useArtikeln({endpunkt: 'global' });
    
    const {  loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }  = useBenutzer({ endpunkt: 'global' });

    return <div className="content px-3">
                { isAuth ? <h1>Hallo {loggedUser?.username}</h1> : <BenutzerForms/>}
                <div className="row pb-5">
                    <div className="d-flex justify-content-center align-items-center w-80 mx-auto gap-3">
                        <div className="d-flex justify-content-center align-items-center border border-width-2 bg-2 p-3 h-100">
                            <h4>Total Artikeln</h4><span className="fs-3 align-self-center">{artikelnAnzahl}</span> 
                        </div>
                        <div className="d-flex justify-content-center align-items-center border border-width-2 bg-2 p-3 h-100">
                            <h4>Total Benutzer</h4><span className="fs-3 align-self-center">{benutzerAnzahl}</span> 
                        </div>
                    </div>        
                </div>
                <EndpunktToggler endpunkte={['global', 'feed']}/>
                <div className="row">
                { entity === 'artikel' ? 
                <ArtikelArray loading={loadingArtikeln} array={artikeln} setArrayData={setArtikelnDatei} artikelAnzahl={artikelnAnzahl} setOffset={setOffsetArtikeln} />
                :
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} setArrayData={setBenutzerDatei} benutzerAnzahl={benutzerAnzahl} setOffset={setOffsetBenutzer} />}
                </div>  
            </div>
}