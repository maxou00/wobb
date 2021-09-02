import { Helmet } from "react-helmet";
import AboutHero from "../component/AboutHero";
import Vision from "../component/Vision";
import Team from "../component/Team";
import Timeline from "../component/Timeline";
import Social from "../component/Social";
import Campaign from "../component/Campaign";

export default function About() {
    return (
        <div>
            <Helmet>
                <title>Wobb | About</title>
            </Helmet>
            <AboutHero />
            <Vision />
            <Team />
            <Timeline />
            <Social />
            <Campaign />
        </div>
    )
}
