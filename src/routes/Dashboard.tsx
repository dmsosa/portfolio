import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/Toggler/EndpunktToggler";
import BenutzerForms from "../components/Forms/BenutzerForms";
import { useAuth } from "../context/AuthContext";
import { useEndpunkt } from "../context/EndpunktContext";
import useBenutzer from "../hooks/useBenutzer";
import BenutzerArray from "../components/Benutzer/BenutzerArray";
import Card from "../components/Dashboard/Card";
import ArtikelArray from "../components/Artikel/ArtikelArray";


export default function Dashboard() {
    const { isAuth, loggedUser } = useAuth();
    const { entity } = useEndpunkt();
    // const [currentPage, setCurrentPage ] = useState(0);
    const {  loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }  = useArtikeln({endpunkt: 'global' });
    
    const {  loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }  = useBenutzer({ endpunkt: 'global' });

    return <>
    { isAuth ? <h1>Hallo {loggedUser?.username}</h1> : <BenutzerForms/>}
                <EndpunktToggler endpunkte={['global', 'feed']}/>
                <div className="row pb-5">
                    <div className="d-flex justify-content-center align-items-center flex-wrap w-100 gap-3">
                        <Card title="Total Artikeln" anzahl={artikelnAnzahl} />
                        <Card title="Total Benutzer" anzahl={benutzerAnzahl} />
                    </div>
                    
                </div>
                <div className="row">
                { entity === 'artikel' ? 
                <ArtikelArray loading={loadingArtikeln} array={artikeln} setArrayData={setArtikelnDatei} artikelAnzahl={artikelnAnzahl} setOffset={setOffsetArtikeln} />
                :
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} setArrayData={setBenutzerDatei} benutzerAnzahl={benutzerAnzahl} setOffset={setOffsetBenutzer} />}
                </div>
                
    </>
}