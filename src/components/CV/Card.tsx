import { ReactNode } from "react"

export type TCard = {
    svg: string;
    title: string;
    text: string;
    paragraphs: TCardParagraph[];
}

export type TCardParagraph = {
    subtitle: string;
    content: string;
}
const svgs: { [key:string]: ReactNode } = {
    'moon': <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="moon-svg"
                            version="1.1"
                            viewBox="0 0 168.291 168.291"
                        >
                            <path d="M84.141 0a83.7 83.7 0 0 0-31.549 6.138l-.006.002C20.641 19.076 0 49.695 0 84.147c0 34.451 20.641 65.069 52.585 78.003l.007.002a83.7 83.7 0 0 0 31.548 6.138c46.401 0 84.15-37.747 84.15-84.144C168.291 37.749 130.542 0 84.141 0M15 84.147c0-27.285 15.759-51.639 40.4-62.885 24.645 11.247 40.406 35.601 40.406 62.885S80.045 135.783 55.4 147.029C30.759 135.784 15 111.431 15 84.147m69.141 69.144a70 70 0 0 1-8.704-.544c21.948-15.534 35.37-40.82 35.37-68.599S97.385 31.08 75.437 15.545A69 69 0 0 1 84.141 15c38.13 0 69.15 31.02 69.15 69.147 0 38.126-31.02 69.144-69.15 69.144"></path>
                        </svg>
}

export const cards: TCard[] = [
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

export default function Card({ svg, title, text, paragraphs }: { svg: string, title: string, text: string, paragraphs: TCardParagraph[]}) {
    return <div className="card">
                    <div>
                        {svgs[svg]}
                    </div>
                    <h3 className="text-center">{title}</h3>
                    <p className="text-center">{text}</p>
                    {paragraphs.map((paragraph) => {
                        return (
                            <>
                                <span className="mt-3 text-primary d-block fw-bold w-100 text-center">{paragraph.subtitle}</span>
                                <p className="text-center">{paragraph.content}</p>
                            </>
                        )
                    })}
                </div>
}