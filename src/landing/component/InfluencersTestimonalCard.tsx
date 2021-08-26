import { useState } from "react"
import Slider from "react-slick";


export default function InfluencersTestimonalCard() {
    const [no, setNo] = useState(0)
    const array = [
        { name: "Shanth Kumar", desg: "Head of Digital, Nestlè (Galderma)", qoute: "We evaluated certain international players but none today offers complete visibility of returns from awareness to conversion, which the Wobb pixel offers.", company: "Mask Group7", image: "Mask Group6" },
        { name: "Karan Mirchandani", desg: "Founder, Boring Foods", qoute: "Earlier there was a lot of back and forth and a lot of effort in finding Influencers, which now gets significantly reduced with platform.", company: "Mask Group1", image: "Mask Group" },
        { name: "Pinkey Preet", desg: "Influencer on instagram", qoute: "I'm surprised how Wobb has quickly become one of the latest favourites. It's amazing - simple to use and gets you many campaigns.", company: "Mask Group3", image: "Mask Group2" },
        { name: "Manu Agrawal", desg: "Managing Director", qoute: "It was for the very first time our brand integrated Influencer marketing to our marketing mix and we are happy to have collaborated with Wobb.", company: "Mask Group5", image: "Mask Group4" },
    ]
    const profile = array[no]
    let slider: Slider | null = null
    const next = () => {
        slider?.slickNext();

        // if (no === array.length - 1) {
        //     setNo(0)
        // } else {
        //     setNo(no + 1)
        // }
    }
    const prev = () => {
        slider?.slickPrev();

        // if (no === 0) {
        //     setNo(array.length - 1)
        // } else {
        //     setNo(no - 1)
        // }
    }

    const settings = {
        arrows: false
    }
    return (
        <div className="center">
            <div className="container-box">
                <div className="infl-test-card">
                    <div className="row">
                        <div className="col-lg-6 infl-desc">
                            <div className="infl-test-heading">Trusted by over <span>1,000</span> Brands and <span>100,000</span> Influencers</div>
                            <div className="infl-test-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper nisl tellus, vitae eleifend ligula tempus</div>
                        </div>
                        <div className="col-lg-6 px-0" style={{ padding: 0 }}>
                            <Slider {...settings} ref={c => (slider = c)}>
                                {array.map((profile, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="inft-test-profile " >
                                                <div className="row align-items-lg-center testimonial-img-col">
                                                    <div className="col-lg-2 col-4">
                                                        <img src={`/images/${profile.image}.png`} alt="testimonial" className="testimonial-img" />
                                                    </div>
                                                    <div className="col-lg-6 col-8 p-0">
                                                        <div className="infl-test-heading1">{profile.name}</div>
                                                        <span className="infl-test-heading2">{profile.desg}</span>
                                                    </div>
                                                    <div className="col-lg-4 infl-star">
                                                        <img src="/images/vector.svg" alt="vector" />
                                                        <img src="/images/vector.svg" alt="vector" />
                                                        <img src="/images/vector.svg" alt="vector" />
                                                        <img src="/images/vector.svg" alt="vector" />
                                                        <img src="/images/vector.svg" alt="vector" />

                                                    </div>
                                                </div>
                                                <div className="testimonial-desc">“{profile.qoute}“</div>
                                                <hr className="infl-test-hr" />

                                                <div className="row testimoial-footer">
                                                    <div className="col-lg-9 col-7" style={{ paddingLeft: 0 }}><img src={`/images/${profile.company}.png/`} alt={profile.company} className="galderma" /></div>
                                                    <div className="col-lg-1 col-2" onClick={prev}>
                                                        <svg className=" arrow-left" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M4.16849 10L11.5451 17.4221C11.6874 17.5604 11.8009 17.7258 11.879 17.9088C11.9571 18.0917 11.9982 18.2885 11.9999 18.4876C12.0017 18.6867 11.964 18.8841 11.889 19.0684C11.8141 19.2526 11.7034 19.42 11.5635 19.5608C11.4236 19.7016 11.2572 19.813 11.0741 19.8883C10.8909 19.9637 10.6947 20.0017 10.4968 19.9999C10.299 19.9982 10.1034 19.9569 9.92161 19.8783C9.7398 19.7997 9.57536 19.6855 9.43789 19.5422L1.00774 11.0601C0.728372 10.7789 0.571428 10.3976 0.571428 10C0.571428 9.60241 0.728372 9.2211 1.00774 8.93992L9.43789 0.457752C9.57536 0.314543 9.7398 0.200315 9.92161 0.121732C10.1034 0.0431497 10.299 0.00178666 10.4968 5.66129e-05C10.6947 -0.00167343 10.8909 0.0362642 11.0741 0.111656C11.2572 0.187048 11.4236 0.298383 11.5635 0.439167C11.7034 0.579951 11.8141 0.747363 11.889 0.931635C11.964 1.11591 12.0017 1.31335 11.9999 1.51244C11.9982 1.71153 11.9571 1.90828 11.879 2.09122C11.8009 2.27415 11.6874 2.4396 11.5451 2.57792L4.16849 10Z" />
                                                        </svg>
                                                    </div>
                                                    <div className="col-lg-1 col-2" onClick={next}>
                                                        <svg className=" arrow-right" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path xmlns="http://www.w3.org/2000/svg" d="M4.16849 10L11.5451 17.4221C11.6874 17.5604 11.8009 17.7258 11.879 17.9088C11.9571 18.0917 11.9982 18.2885 11.9999 18.4876C12.0017 18.6867 11.964 18.8841 11.889 19.0684C11.8141 19.2526 11.7034 19.42 11.5635 19.5608C11.4236 19.7016 11.2572 19.813 11.0741 19.8883C10.8909 19.9637 10.6947 20.0017 10.4968 19.9999C10.299 19.9982 10.1034 19.9569 9.92161 19.8783C9.7398 19.7997 9.57536 19.6855 9.43789 19.5422L1.00774 11.0601C0.728372 10.7789 0.571428 10.3976 0.571428 10C0.571428 9.60241 0.728372 9.2211 1.00774 8.93992L9.43789 0.457752C9.57536 0.314543 9.7398 0.200315 9.92161 0.121732C10.1034 0.0431497 10.299 0.00178666 10.4968 5.66129e-05C10.6947 -0.00167343 10.8909 0.0362642 11.0741 0.111656C11.2572 0.187048 11.4236 0.298383 11.5635 0.439167C11.7034 0.579951 11.8141 0.747363 11.889 0.931635C11.964 1.11591 12.0017 1.31335 11.9999 1.51244C11.9982 1.71153 11.9571 1.90828 11.879 2.09122C11.8009 2.27415 11.6874 2.4396 11.5451 2.57792L4.16849 10Z" /> </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                }
                                )}
                            </Slider>
                        </div>
                    </div>
                </div >
            </div>
        </div>
    )
}