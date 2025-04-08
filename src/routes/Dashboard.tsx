import useArtikeln from "../hooks/useArtikeln";
import EndpunktToggler from "../components/Widgets/EndpunktToggler";
import Forms from "../components/Forms/Forms";
import { useAuth } from "../context/AuthContext";
import { useEndpunkt } from "../context/EndpunktContext";
import ArtikelListe from "../components/Widgets/Artikel/ArtikelListe";
import useBenutzer from "../hooks/useBenutzer";
import BenutzerArray from "../components/Widgets/Benutzer/BenutzerArray";
// const cards = [
//     {title: 'Total Artikeln', value: 18}, //get funcs
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
    
// ]


export default function Dashboard() {
    const href = window.location.href.split('/');
    const currentLocation = href[href.length - 1];
    const { headers, isAuth, loggedUser } = useAuth();
    let title = 'Alle Artikeln';
    switch (currentLocation) {
        case 'artikeln': { 
            title = 'Mehrere Artikeln';
            break;
        };
        case 'cv': { 
            title = 'Weiter Lesen';
            break;
        };
    }
    
    const { entity } = useEndpunkt();
    // const [currentPage, setCurrentPage ] = useState(0);
    const {  loadingArtikeln, artikelnAnzahl, artikeln, setArtikelnDatei, setOffsetArtikeln }  = useArtikeln({headers: headers ? headers : {}, endpunkt: 'global' });
    
    const {  loadingBenutzer, benutzerAnzahl, benutzerArray, setBenutzerDatei, setOffsetBenutzer }  = useBenutzer({headers: headers ? headers : {}, endpunkt: 'global' });

    return <>
    { isAuth ? <h1>Hallo {loggedUser?.username}</h1> : <Forms/>}
                <EndpunktToggler endpunkte={['global', 'favorite']}/>
                <div className="row pb-5">
                <h1 className="mt-5">{title}</h1>
                <h2>{artikelnAnzahl}</h2>
                </div>
                { entity === 'artikel' ? 
                <ArtikelListe loading={loadingArtikeln} array={artikeln} setArrayData={setArtikelnDatei} artikelAnzahl={artikelnAnzahl} setOffset={setOffsetArtikeln} />
                : 
                <BenutzerArray loading={loadingBenutzer} array={benutzerArray} setArrayData={setBenutzerDatei} benutzerAnzahl={benutzerAnzahl} setOffset={setOffsetBenutzer} />}
    </>
}