export type TCardView = {
    title: string;
    text: string;
    href: string;
}
export const cardsViews: TCardView[] = [
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

export default function CardView({  title, text, href, index }: { title: string, text: string, href: string, index: number }) {

    const handleClick = () => {
        window.location.href = href;
    }
    return  <div className="basis-50 grow-1 shrink-1 p-2" onClick={handleClick}>
        <div className={`border-container card-view card-view--${index}`}>
                <div className="card-view-bg"></div>
                <h3 className="text-center">{title}</h3>
                <div className="card-view-inner">
                    <p className="text-center">{text}</p>
                    <a role="button" className="btn btn-primary btn-outline align-self-center " href={href}>Visit Website</a>
                </div>
            </div>
    </div>
    
}