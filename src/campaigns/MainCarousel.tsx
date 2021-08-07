import Skills from "../assets/skills.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function MainCarousel() {
    return <div className="carousel">
        <Carousel
            autoFocus
            autoPlay
            infiniteLoop
            showThumbs={false}
            showArrows={false}
            showStatus={false}>
            <div>
                <img src={Skills} alt="skills"/>
            </div>
            <div>
                <img src={Skills} alt="skills"/>
            </div>
            <div>
                <img src={Skills} alt="skills"/>
            </div>
        </Carousel>
    </div>
}