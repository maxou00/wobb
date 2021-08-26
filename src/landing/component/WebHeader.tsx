import InfluencerList from "./InfluencerList"
import MarketerList from "./MarketerList"

export default function WebHeader() {

    return (
        <>
            <div className="center" style={{ background: "white" }}>

                <div className="header">
                    <div className="container-box">

                        <div className="row d-flex align-items-lg-center justify-content-center">
                            <div className="col-lg-3 col-5">
                                <a className="title" href="/">Wobb</a>
                            </div>
                            <div className="col-lg-6 center-btn">
                                <div className="row  d-flex align-items-lg-center justify-content-center " style={{ padding: 0, justifyContent: "center" }}>
                                    <div className="col-lg-3 d-flex align-items-lg-center" style={{ padding: 0 }}><a href="/" className="menu-item home">Home</a></div>
                                    <div className="col-lg-3 d-flex align-items-lg-center" style={{ padding: 0 }}><MarketerList /></div>
                                    <div className="col-lg-3 d-flex align-items-lg-center" style={{ padding: 0 }}><InfluencerList /></div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="side-btn">
                                    <div><a href="/" className="web-log-in">Log In</a></div>
                                    <div><button className="web-signup">Sign Up</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}