import BenutzerInfo from "../components/Widgets/BenutzerInfo"
import boy from "../assets/img/boy.png";
import ArtikelReactPagination from "../components/ArtikelnPagination/ArtikelReactPagination";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
// const cards = [
//     {title: 'Total Artikeln', value: 18}, //get funcs
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
//     {title: 'Total Benutzer', value: 25},
    
// ]
const articles = [
    {
        title: 'Artikel 1',
        description: 'Lorem sama demek fure tylo nama lupa fer',
        tags: ['react', 'node', 'typescript'],
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat laudantium, beatae possimus voluptates maiores tenetur dicta autem at ex iusto quisquam facilis quod dignissimos! Sit quod similique rem deserunt!',
        slug: 'artikel-1',
        author: {
            username: 'Benutzer 1',
            isFollowing: false,
        },
        updatedAt: '22-05-2025'
    },
    {
        title: 'Artikel 2',
        description: 'Lorem sama demek fure tylo nama lupa fer',
        tags: ['react', 'node', 'typescript'],
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat laudantium, beatae possimus voluptates maiores tenetur dicta autem at ex iusto quisquam facilis quod dignissimos! Sit quod similique rem deserunt!',
        slug: 'artikel-1',
        author: {
            username: 'Benutzer 2',
            isFollowing: false,
        }
    },
    {
        title: 'Artikel 3',
        description: 'Lorem sama demek fure tylo nama lupa fer',
        tags: ['react', 'node', 'typescript'],
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quaerat laudantium, beatae possimus voluptates maiores tenetur dicta autem at ex iusto quisquam facilis quod dignissimos! Sit quod similique rem deserunt!',
        slug: 'artikel-3',
        author: {
            username: 'Benutzer 13',
            isFollowing: false,
        }
    }
]

const pageCount = 8;
export default function Dashboard() {
    const href = window.location.href.split('/');
    const currentLocation = href[href.length - 1];
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
    useEffect(() => {
        console.log(currentLocation)
    })
    return (
        <div className="container">
                {/* {cards.map((c) => 
                (<div key={c.title} className="dashboard-card">
                    <h1>{c.title}</h1>
                    <span>{c.value}</span>
                </div>)
                )} */}
                <Outlet/>
            <div className="row pb-5">
                <h1 className="mt-5">{title}</h1>
                <div className="artikel-liste">
                    {articles.map((art) => 
                    <div className="artikel-card">
                        <BenutzerInfo bild={boy} username={art.author.username} />
                        <h1>{art.title}</h1>
                        <p>{art.description}</p>
                        <ul>{art.tags.map((tag) => <li key={tag}><a href="">{tag}</a></li>)}</ul>
                    </div>
                    )}
                </div>
                <ArtikelReactPagination pageCount={pageCount} />
            </div>
        </div>
    )
}