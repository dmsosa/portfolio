import IconListe from "../components/Widgets/IconListe";

export default function CV() {
    return (
            <div className="row">
                <IconListe icons={["fiverr", "email", "github"]}/>
                <button className="btn btn-primary">Donwload CV</button>
            </div>
    )
}