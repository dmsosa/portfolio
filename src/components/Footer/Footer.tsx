import axios from "axios";
import et from "../../assets/img/et.png";
import IconListe from "../Widgets/IconListe";

function Footer() {

    const handleClick = () => {
        startDownload().then(() => {
            console.log("Loading")
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            console.log("done")
        })
    };

    async function startDownload() {
        let result = await axios({
            url: '../../assets/files/current.pdf',
            method: 'GET',
            responseType: 'blob',
        });
        const anchorTag = document.createElement("a");
        anchorTag.setAttribute("href", window.URL.createObjectURL(new Blob([result.data], { type: 'application/pdf'})));
        anchorTag.setAttribute("download", "current");
        document.body.appendChild(anchorTag);
        anchorTag.click();
        document.body.removeChild(anchorTag);
    }

    return (
        <footer>
            <div className="container container-sm">
                <div className="px-3 mb-3">
                    <h2 className="text-center fw-bold mb-2">DO YOU WANT TO LAND A PROJECT?</h2>
                    <img src={et} alt="" />
                    <span className="d-block text-center mt-2">CONTACT ME</span>
                </div>
                <div>
                    <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
                      <IconListe icons={["whatsapp", "email", "github"]}/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <button className="btn btn-warning mb-2 w-75 fw-bold" onClick={handleClick}>WATCH CV</button>
                        <button className="btn btn-primary w-75 fw-bold">MY WORK</button>
                    </div>
                </div>
                <hr></hr>
                <span className="d-block text-center pb-3">&#169; Duvi, 2024</span>
            </div>
            
        </footer>
        
    )
}

export default Footer;