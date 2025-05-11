import hp from "../assets/img/hp.png";
import data from "../assets/img/data.png";
import Card from "../components/CV/Card";

type TCard = {
    svg: string;
    title: string;
    text: string;
}
const cards: TCard[] = [
    {
        svg: 'moon',
        title: 'Front End',
        text: 'Since beginning my journey as a freelance designer 12 years ago, I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I\'m quietly confident, naturally curious, and perpetually working on improving my chops.',
    },
        {
        svg: 'moon',
        title: 'Front End',
        text: 'Since beginning my journey as a freelance designer 12 years ago, I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I\'m quietly confident, naturally curious, and perpetually working on improving my chops.',
    }
    ,     {
        svg: 'moon',
        title: 'Front End',
        text: 'Since beginning my journey as a freelance designer 12 years ago, I\'ve done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I\'m quietly confident, naturally curious, and perpetually working on improving my chops.',
    }
]


export default function CV() {

    return <div className="content">
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="cv-logo bg-secondary">
                        <img src={hp} alt="Duvi's logo" />
                        <h1 className="h1">
                            <span className="split">
                                <span className="line">Hallo, ich bin Duvi</span>
                            </span>
                        </h1>
                        <p>
                            <span className="split">
                                <span className="line">code & development</span>
                            </span>   
                            <span className="split">
                                <span className="line">made easy</span>
                            </span>   
                        </p>
                    </div>
                    <button className="btn btn-primary">Watch CV</button>
                    <div className="w-80 mx-auto"><img src={data} alt="Dev icon" className="w-100 is-bottom"/></div>
                    <div className="py-6">
                        <div className="card-wrapper">
                            {cards.map((card) => <Card svg={card.svg} title={card.title} text={card.text}/>)}
                        </div>
                    </div>
                </div>
            </div>
}