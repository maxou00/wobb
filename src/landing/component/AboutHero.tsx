import { ABOUT_CARD } from "../constants/ConstArray"

export default function Hero() {
    return (
        <div className="center" style={{ background: "#F1F9FF" }}>
            <div className="container-box">
                <div className="placholder"></div>
                <div className="about-hero row ">
                    <div className="col-lg-12">
                        <div className="container">
                            <div className="row mx-auto ">
                                <div className="hero-head col-lg-7  mx-auto col-12">
                                    <p className="mb-0">Bringing finanical oppourtiunites to influencer</p>
                                    <div className="row">
                                        <div className="sub-heading col-lg-8 col-12 mx-auto">Wobb connects marketers with verified social media
                                            influencers for paid and barter campaigns</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <hr className="about-hr" />
                            </div>
                            <div style={{ position: "relative" }}>
                                <div className="row about-mt">
                                    {ABOUT_CARD.map((e, index) =>
                                        <div className="col-lg-3 col-6 about-px-4" key={index}>
                                            <div className="about-card">
                                                <div className="number">{e.number}</div>
                                                <div className="desc">{e.desc}</div>
                                            </div>
                                        </div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}