import ProjektKarte from "./ProjektKarte";

function MainProjects() {
    return (
        <div className="container">
            <div className="row row-cols-2">
                <div className="col">
                    <ProjektKarte 
                    link="https://dmsosa.github.io/dmblog/"
                    title="Dmblog"
                    icon="a"
                    body="krze beschreibung fur das Jadassa Seite porjekt"
                    techstack={["spring", "postgresql", "react", "typescript"]}
                    repo="https://github.com/dmsosa/dmblog"
                    />
                </div>
                <div className="col">
                    <ProjektKarte 
                    link="https://dmsosa.github.io/jadassa-page/"
                    title="Jadassa Seite"
                    icon="r"
                    body="krze beschreibung fur das Jadassa Seite porjekt"
                    techstack={["react", "typescript", "nodejs", "bootstrap"]}
                    repo="https://github.com/dmsosa/jadassa-page"
                    />
                </div>
            </div>
        </div>
    )
}

export default MainProjects;