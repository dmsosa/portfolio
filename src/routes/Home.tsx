import UberMich from "../components/About/UberMich";
import Portfolio from "../components/Portfolio/Portfolio";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
    return (
        <>
            <Sidebar />
            <div className="content">
              <Portfolio />
              <UberMich />
            </div>
        </>

    )
}