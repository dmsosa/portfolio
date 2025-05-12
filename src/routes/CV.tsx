
import Card, { TCardParagraph } from "../components/CV/Card";
import CardView from "../components/CV/CardView";
import CVHero from "../components/CV/CVHero";

type TCard = {
    svg: string;
    title: string;
    text: string;
    paragraphs: TCardParagraph[];
}
type TCardView = {
    title: string;
    text: string;
    href: string;
}
const cards: TCard[] = [
    {
        svg: 'moon',
        title: 'Designer',
        text: 'I value simple content structure, clean design patterns, and thoughtful interactions.',
        paragraphs: [{
            subtitle: 'Tools I use:',
            content: 'Figma, Canva, Adobe Photoshop, Illustrator'
        }]
    },
        {
        svg: 'moon',
        title: 'Frontend Developer',
        text: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
        paragraphs: [{
            subtitle: 'Tools I use:',
            content: 'Figma, Canva, Adobe Photoshop, Illustrator'
        }]
    }
    ,     {
        svg: 'moon',
        title: 'Learner',
        text: 'I genuinely care about people, and enjoy helping them work on their craft.',
        paragraphs: [{
            subtitle: 'Tools I use:',
            content: 'Figma, Canva, Adobe Photoshop, Illustrator'
        }]
    }
]
const cardsViews: TCardView[] = [
    {
        title: 'The Chosen',
        text: 'High-end, custom residential renovaters serving Fraser Valley homeowners.',
        href: 'https://dmsosa.github.io/jadassa-page'
    },
    {
        title: 'React AIO',
        text: 'High-end, custom residential renovaters serving Fraser Valley homeowners.',
        href: 'https://dmsosa.github.io/jadassa-page'
    },
    {
        title: 'Realworld Blog',
        text: 'High-end, custom residential renovaters serving Fraser Valley homeowners.',
        href: 'https://dmsosa.github.io/jadassa-page'    
    },
    {
        title: 'Quinta El Renacer',
        text: 'High-end, custom residential renovaters serving Fraser Valley homeowners.',
        href: 'https://dmsosa.github.io/jadassa-page'    
    },
]


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