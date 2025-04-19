import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/EndpunktToggler";
import Forms from "../components/Forms/Forms";
import { useAuth } from "../context/AuthContext";
import { useEndpunkt } from "../context/EndpunktContext";
import ArtikelListe from "../components/Widgets/Artikel/ArtikelListe";
import useBenutzer from "../hooks/useBenutzer";
import BenutzerArray from "../components/Widgets/Benutzer/BenutzerArray";
import Card from "../components/Dashboard/Card";


export default function Dashboard() {
    const { headers, isAuth, loggedUser } = useAuth();
    const { entity } = useEndpunkt();
    // const [currentPage, setCurrentPage ] = useState(0);
    const {  loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }  = useArtikeln({headers: headers ? headers : {}, endpunkt: 'global' });
    
    const {  loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }  = useBenutzer({headers: headers ? headers : {}, endpunkt: 'global' });

    return <>
    { isAuth ? <h1>Hallo {loggedUser?.username}</h1> : <Forms/>}
                <EndpunktToggler endpunkte={['global', 'feed']}/>
                <div className="row pb-5">
                    <div className="d-flex justify-content-center align-items-center flex-wrap w-100 gap-3">
                        <Card title="Total Artikeln" anzahl={artikelnAnzahl} />
                        <Card title="Total Benutzer" anzahl={benutzerAnzahl} />
                    </div>
                    
                </div>
                <div className="row">
                { entity === 'artikel' ? 
                <ArtikelListe loading={loadingArtikeln} array={artikeln} setArrayData={setArtikelnDatei} artikelAnzahl={artikelnAnzahl} setOffset={setOffsetArtikeln} />
                : 
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} setArrayData={setBenutzerDatei} benutzerAnzahl={benutzerAnzahl} setOffset={setOffsetBenutzer} />}
                </div>
                
    </>
}