const links: { [key:string]: string } = {
    "github": "https://github.com/dmsosa/",
    "robot": "https://dmsosa.github.io/dmblog/",
    "linkedin": "https://www.linkedin.com/in/durian-sosa-807147241/",
    "emoji-smile-fill": "https://dmsosa.github.io/jadassa-page/",
    "instagram": "https://www.instagram.com/duvi_official/",
    "piggy-bank-fill": "https://dmsosa.github.io/microservices/",
}

function LinkIcon({ icon } : { icon: string }) {
    return (
        <a className="w-100 h-100 d-flex justify-content-center align-items-center" href={links[icon]}>
            <i className={`bi bi-${icon} fs-4`} style={{color: "#112233"}}></i>
        </a>
    )
}


export default LinkIcon;