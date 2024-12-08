import { useEffect } from "react";

function Nachricht() {



    useEffect(() => {
        const containers = document.querySelectorAll(".nachricht-container") as NodeListOf<HTMLDivElement>;
        const size = 25;


        const bewegung = () => {
            console.log(containers);
            for (let i = 0 ; i < containers.length ; i ++ ) {
                let pos = 0;
                let limit = containers[i].children.length - 1;
                setInterval(() => {
                    if (pos === 0 ) {
                        pos += 1;
                    } else if (pos === limit) {
                        pos -= 1;
                    } else {
                        let n = (Math.round(Math.random()) * 2) - 1;
                        if (n < 0) {
                            pos -= 1;
                        } else {
                            pos += 1;
                        }
                    }
            
                    containers[i].style.top = "-"+(pos * size)+"px";
                }, 2500);
            }
            
        }
        window.addEventListener("load", bewegung);
    }, []);
    return (
        <div className="nachrichten">
            <div className="nachricht-outer">
                <div className="nachricht-container">
                    <p>Danke,</p>
                    <p>Gracias,</p>
                    <p>Merci,</p>
                    <p>Obrigado,</p>
                    <p>Grazie,</p>
                    <p>Thank you,</p>
                </div>
            </div>
            <div className="nachricht-outer color-primary">
                <div className="nachricht-container">
                    <p>Zia (Marina)</p>
                    <p>Victor</p>
                    <p>Lili</p>
                    <p>Avô</p>
                    <p>Mãe</p>
                    <p>Jadassá</p>
                    <p>Katherine</p>
                    <p>Sadieth</p>
                    <p>Pai</p>
                </div>
            </div>
        </div>
    )
}

export default Nachricht;