function SectionTitle({ text } : { text: string }) {


    return (
        <h1 className={`section-title fw-bold`}><span>{text}</span></h1>
    )
}

export default SectionTitle;