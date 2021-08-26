import { FEATURED } from "../constants/ConstArray";

export default function FeatureCampaign() {

    return (
        <>
            <div className="center">
                <div className="container-box">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row feature_">
                                <div className="col-lg-9 order-lg-1 order-md-1 px-0">
                                    <div className="row">
                                        <div className="col-lg-9 col-12">
                                            <h1 className="f-heading">Featured Campaigns</h1>
                                        </div>
                                    </div>
                                    {FEATURED.map((e, index) =>
                                        <div className="feature" key={index}>
                                            <div className="row align-items-lg-center" >
                                                <div className="col-lg-1 col-4 f-icon" style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    alignContent: "center"
                                                }}>
                                                    <img src={`/images/${e.icon}`} alt="campaign icon" />
                                                </div>
                                                <div className="col-lg-3 col-8" style={{ paddingLeft: 0 }}>
                                                    <span className="feature-name">{e.heading}</span>
                                                    <div className="feature-link">
                                                        <a className="" href={e.href}>{e.link}<img src="/images/external-link.svg" height="18px" width="18px" /></a>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-4 text-center">
                                                    <span className="feature-item">PLATFORM</span>
                                                    <span className="feature-value">{e.platform}</span>
                                                </div>
                                                <div className="col-lg-2 col-4 text-center">
                                                    <span className="feature-item">CASH</span>
                                                    <span className="feature-value">₹ {e.cash}</span>
                                                </div>
                                                <div className="col-lg-1 col-4 text-center">
                                                    <span className="feature-item">COINS</span>
                                                    <span className="feature-value">{e.coins}</span>
                                                </div>
                                                <div className="col-lg-3 col-12" style={{ textAlign: "right", paddingRight: 0 }}>
                                                    <button className="button_ button_1">View Details</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                </div>
                                <div className="col-lg-3 order-lg-2 order-3 p-0 px-0" >
                                    <div className="back-img" >
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="featured">
                                                    <div className="row" style={{ display: "flex", alignContent: "center" }}>
                                                        <img src="/images/Campaign Icon.svg" alt="campaign" />
                                                        <h1>New campaign</h1>
                                                    </div>
                                                    <p className="camp-msg">Post your free campaign and hire influencers in a few minutes</p>
                                                    <div className="post-camp-btn">
                                                        <button className="post-camp" >Post a free campaign</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12 order-lg-3 order-2">
                                    <div className="view-more-row"><button className="view-more">View More</button></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}