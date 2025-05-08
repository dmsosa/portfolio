import UberMich from "../components/About/UberMich";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";

export default function Home() {
    return (
        <>
            <Hero/>
            <h1>{import.meta.env.MODE} app is running in %VITE_APP_NAME%</h1>
            <Portfolio />
            <UberMich />
        </>
            
    )
}