
import Card, { cards } from "../components/CV/Card";
import CardView, { cardsViews } from "../components/CV/CardView";
import CVHero from "../components/CV/CVHero";


export default function CV() {

    return <div className="content">
                <div className="py-6">
                    <CVHero/>
                    <div className="pb-6 pt-3 bg-second">
                        <div className="card-wrapper">
                            {cards.map((card) => <Card svg={card.svg} title={card.title} text={card.text} paragraphs={card.paragraphs}/>)}
                        </div>
                        <div className="pt-6">
                            <h3 className="h3 text-center mb-3">My lastest work</h3>
                            <p className="text-center">some projects I have been working on</p>
                            <div className="d-flex justify-content-center align-items-center flex-wrap ">
                                {cardsViews.map((cardView, index) => <CardView title={cardView.title} text={cardView.text} href={cardView.href}
                                index={index + 1} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}