export default function CardView({  title, text, href, index }: { title: string, text: string, href: string, index: number }) {
    return  <div className="basis-50 grow-1 shrink-1 p-2">
        <div className={`border-container card-view card-view--${index}`}>
                <h3 className="text-center">{title}</h3>
                <div className="card-view-inner">
                    <p className="text-center">{text}</p>
                    <a role="button" className="btn btn-primary btn-outline align-self-center " href={href}>Visit Website</a>
                    
                </div>
            </div>
    </div>
    
}