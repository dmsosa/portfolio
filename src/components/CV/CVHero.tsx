import hp from "../../assets/img/hp.png";
import data from "../../assets/img/svg/hero-devices.svg";

export default function CVHero() {
    return <div>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <div className="cv-logo">
                        <img src={hp} alt="Duvi's logo" />
                    </div>
                    <h3 className="h3">
                        <span className="split">
                            <span className="line">Hallo, ich bin Duvi</span>
                        </span>
                    </h3>
                    <p>
                        <span className="split">
                            <span className="line">code & development</span>
                        </span>   
                        <span className="split">
                            <span className="line">made easy</span>
                        </span>   
                    </p>
                </div>
                <button className="btn btn-primary d-block mx-auto">Watch CV</button>
                <div className="w-80 mx-auto mt-5 is-bottom"><img src={data} alt="Dev icon" className="w-100"/></div>
            </div>
}