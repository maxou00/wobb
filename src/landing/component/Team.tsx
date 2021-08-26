export default function Team() {
    return (
        <div className="center" style={{ background: "#F1F9FF" }}>
            <div className="container-box">
                <div className="container team">
                    <div className="row ">
                        <div className="col-lg-5 mx-auto" style={{ textAlign: "center" }}>
                            <div className="team-heading">The amazing team behind <span>Wobb</span></div></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="team-card">
                                <img src="/images/team1.png" alt="Ishan Jindal" height="100%" width="100%" />
                            </div>
                            <h1 className="team-name">Ishan Jindal</h1>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="team-role col-lg-8">Founder & CEO ex-IIT Delhi</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-card">
                                <img src="/images/team2.png" alt="Crystal Correa" height="100%" width="100%" />
                            </div>
                            <h1 className="team-name">Crystal Correa</h1>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="team-role col-lg-8">Growth</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-card">
                                <img src="/images/team3.png" alt="Varun Chandra" height="100%" width="100%" />
                            </div>
                            <h1 className="team-name">Varun Chandra</h1>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="team-role col-lg-8">Technology</div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="team-card-text">
                                <div className="team-text">+30</div>
                            </div>
                            <h1 className="team-name">Team Members</h1>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <div className="team-role col-lg-8">Creating the future every day</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}