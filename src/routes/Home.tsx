import UberMich from "../components/About/UberMich";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio/Portfolio";
import FormToggler from "../components/Widgets/Toggler/FormToggler";

export default function Home() {
    return (
        <>
            <Hero/>
            <FormToggler/>
            <Portfolio />
            <UberMich />
        </>
            
    )
}