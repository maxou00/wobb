import { useState } from "react"

export default function CreateAccountSections() {
    const [step, setStep] = useState(1)
    return (
        <div className="center" style={{ background: "#F1F9FF" }}>
            <div className="container-box">
                <div className="create-account">
                    <div className="container_">
                        <div className="row campaign-steps">
                            <div className="col-lg-6  px-0" >
                                <div>
                                    <div className="campaign">
                                        <div className={step === 1 ? "show" : "hide"} >
                                            <img src={"images/step1.png"} alt="Picture of the author" height="100%" width="100%" />
                                        </div>
                                        <div className={step === 2 ? "show" : "hide"} >
                                            <img src="images/step2.png" alt="Picture of the author" height="100%" width="100%" />
                                        </div>
                                        <div className={step === 3 ? "show" : "hide"} >
                                            <img src="images/step3.png" alt="Picture of the author" height="100%" width="100%" />
                                        </div>
                                        {/* <Image src={image2} alt="Picture of the author"
                                    className={step === 2 ? "show" : "hide"} />
                                <Image src={image3} alt="Picture of the author"
                                    className={step === 3 ? "show" : "hide"} /> */}
                                        {/* {step === 2 && <img src={"/images/step2.svg"} id={`image${step}`} />} */}
                                        {/* {step === 3 && <img src={"/images/step3.svg"} id={`image${step}`} />} */}
                                        {/* <div className="campaign-left">
                                    <div className="row">
                                        <h3 className="col-lg-12">Post your free campaign</h3>
                                        <h5 className="col-lg-12">What type of platform are you looking for?</h5>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-lg-4 col-4">
                                                Platform
                                            </div>

                                            <div className="col-lg-6 col-4 platform-list">
                                                <div className="insta">
                                                    Instagram<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 8 }}>
                                            <div className="col-lg-4 col-3">
                                                Category
                                            </div>

                                            <div className="col-lg-6 col-4 platform-list">
                                                <div className="fashion">
                                                    Fashion<span>&#10006;</span>
                                                </div>
                                                <div className="life-style">
                                                    Life Style<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 8 }}>
                                            <div className="col-lg-4 col-6">
                                                Follower Range
                                            </div>

                                            <div className="col-lg-5 col-6">
                                                <div className="range">
                                                    Custome Range<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <h3 className="col-lg-12">
                                                What are your requirements?
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-6">
                                                No of Influencers
                                            </div>
                                            <div className="col-lg-3 col-6">
                                                <div className="influe">
                                                    100<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 8 }}>
                                            <div className="col-lg-4 col-6">
                                                Deliverables
                                            </div>
                                            <div className="col-lg-3 col-6">
                                                <div className="influe">
                                                    Reels<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row" style={{ marginTop: 8 }}>
                                            <div className="col-lg-4 col-6">
                                                Promotion Goals
                                            </div>
                                            <div className="col-lg-5 col-6">
                                                <div className="influe">
                                                    Product Review<span>&#10006;</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <h3 className="col-lg-12">
                                                What will be the payout per influencer?
                                            </h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-4">
                                                <input type="radio" id="barter" name="barter" value="barter" />
                                                <label for="barter">Barter</label>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <input type="radio" id="variablePay" name="variablePay" value="variablePay" />
                                                <label for="variablePay">Variable Pay</label>
                                            </div>
                                            <div className="col-lg-4 col-4">
                                                <input type="radio" id="fixedPay" name="fixedPay" value="fixedPay" />
                                                <label for="fixedPay">Fixed Pay</label>
                                            </div>
                                            <div className="col-lg-12" style={{ textAlign: "center" }}>
                                                <button className="campaign-button">Post Campaign</button>
                                            </div>
                                        </div>
                                    </div>

                                </div> */}

                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-6 px-25" >
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={step === 1 ? "campaign-step-selected" : "campaign-step"}
                                            onClick={() => { setStep(1) }}>
                                            <div >
                                                1 . Post your free campaign
                                            </div>
                                            {step === 1 && <span className="campaign-step-details">Easily post your influencer campaign requirements</span>}
                                        </div>
                                        <div className={step === 2 ? "campaign-step-selected" : "campaign-step"}
                                            onClick={() => { setStep(2) }}>
                                            <div >
                                                2 . Shortlist &amp; hire influencers
                                            </div>
                                            {step === 2 && <span className="campaign-step-details">Get applications from hundreds of verified influencers on the Wobb dashboard.</span>}
                                        </div>
                                        <div className={step === 3 ? "campaign-step-selected" : "campaign-step"}
                                            onClick={() => { setStep(3) }}>
                                            <div >
                                                3 . Manage &amp; monitor your campaign
                                            </div>
                                            {step === 3 && <span className="campaign-step-details">Handle content approvals, and track real-time progress & performance of your campaigns</span>}
                                        </div>
                                    </div>
                                    <div className="campaign-buttons col-lg-12">
                                        <button className="post">Post Campaign</button>
                                        <button className="about">About Us</button>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}