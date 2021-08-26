export default function Hero() {
    return (
        <>
            <div className="center" style={{ background: "#F1F9FF" }}>
                <div className="container-box">
                    <div className="placholder"></div>
                    <div className="hero row ">
                        <div className="col-lg-12">
                            <div className="container px-0">
                                <div className="row mx-auto mb-hero">
                                    <div className="hero-head col-lg-8  mx-auto col-12 px-0">
                                        <p className="mb-0">India’s Largest Platform for Influencers and Marketers</p>
                                        <div className="row">
                                            <div className="sub-heading col-lg-12 mx-auto">Wobb connects marketers with verified social media
                                                influencers for <br />paid and barter campaigns</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mt-hero-card">
                                <div className="row d-flex justify-content-lg-center">
                                    <div className="col-lg-5 px-0">
                                        <div className="card-left">
                                            <img src="/images/GetInfluencercampaigns.svg" className="img-left" alt="Get Influencer campaigns" />
                                            <div>
                                                <span >I want to
                                                    <br />
                                                    <strong >get campaigns</strong></span>
                                                <br />
                                                <button>
                                                    Download Our App
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-lg-5 px-0">
                                        <div className="card-right">
                                            <img src="/images/HireInfluencers.svg" className="img-right" alt="Hire Influencers" />
                                            <div>
                                                <span>I want to
                                                    <br />
                                                    <strong>hire influencers</strong></span>
                                                <br />
                                                <button>
                                                    Post a free campaign
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}