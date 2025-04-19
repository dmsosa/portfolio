export default function Card({ title, anzahl } : { title: string, anzahl: number }) {
    return (
        <div className="karte">
            <h3>{title}</h3>
            <span>{anzahl}</span>
        </div>
    )
}