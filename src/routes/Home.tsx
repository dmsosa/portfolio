import UberMich from "../components/About/UberMich";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
    return (
        <>
            <div className="content">
              <Portfolio />
              <UberMich />
            </div>
        </>

    )
}