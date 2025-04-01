import SidebarNav from "../components/Nav/SidebarNav";
import useArtikeln from "../hooks/useArtikeln";
import ArtikelListe from "../components/Widgets/ArtikelListe";
import TagToggler from "../components/Widgets/TagToggler";
import { useState } from "react";
import ArtikelPagination from "../components/Widgets/ArtikelPagination";
import EndpunktToggler from "../components/Widgets/EndpunktToggler";
// const cards = [
//     {title: 'Total Artikeln', value: 18}, //get funcs
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
    
// ]


export default function Dashboard() {
    const href = window.location.href.split('/');
    const currentLocation = href[href.length - 1];
    const [ selectedTags, setSelectedTags ] = useState<string>("");
    const [ offset, setOffset ] = useState<number>(2);
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
    
    // const [currentPage, setCurrentPage ] = useState(0);
    const { loading, artikelnAnzahl, artikeln, setArtikelnDatei }  = useArtikeln({ endpoint: 'global', offset: offset });
    return (
            <>
                <SidebarNav/>
                <main>
                    <EndpunktToggler endpunkte={['global', 'favorite']}/>
                    <div className="row pb-5">
                    <h1 className="mt-5">{title}</h1>
                    <h2>{artikelnAnzahl}</h2>
                    </div>
                    <TagToggler selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
                    <ArtikelListe loading={loading} artikelnArray={artikeln} setArtikelnDatei={setArtikelnDatei}/>
                    <ArtikelPagination loading={loading} pageCount={8} setOffset={setOffset}/>
                </main>
            </>
    )
}