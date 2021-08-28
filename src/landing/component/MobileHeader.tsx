import { useState } from "react"
import { Link } from "react-router-dom";
import { Routes } from "../../routes";

export default function MenuileHeader() {
    const [open, setOpen] = useState(false)
    const [marketer, setMarketer] = useState(false)
    const [influ, setInflu] = useState(false)

    return (
        <>
            <div className="center">
                <div className="mob-header">
                    <div>
                        <div className="container-box">
                            <div className="row d-flex align-items-lg-center mob-menu">
                                {open ?
                                    <div className="cross-icon " onClick={() => { setOpen(false); setMarketer(false); setInflu(false) }}>&#10006;</div>
                                    :
                                    <>
                                        <div className="hamburgur" onClick={() => { setOpen(true) }}>
                                            <img src="images/hamburgur.svg" alt="hamburgur" height="20px" width="20px" /></div>
                                    </>
                                }<div >
                                    <div className="mob-title"><a href="/">Wobb </a></div>
                                </div>
                                <div >
                                    <div className="mob-side-btn">
                                        <div><Link to={Routes.Login}>Log In</Link></div>
                                        <div><Link to={Routes.Signup} className="mob-signup">Sign Up</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                {open && <div className="header-list">
                    <ul>
                        <a href="/" className="menu-item" style={{ borderTop: "1px solid #C4C4C4" }}>Home</a>
                        <li className="menu-item" onClick={() => { setMarketer(!marketer) }}>I'm a Marketer <img src="/images/dropdown.svg" alt="dropdown" height="12px" width="12px" /></li>
                        {marketer && <ul className="header-sub-ul">
                            <li className="header-li"><a href="/">Post a Campaign</a></li>
                            <li className="header-li"><a href="/">Browse Influencers</a></li>
                        </ul>}
                    </ul>
                    <ul>
                        <li className="menu-item" onClick={() => { setInflu(!influ) }}>I'm an Influencer <img src="/images/dropdown.svg" alt="dropdown" height="12px" width="12px" /></li>
                        {influ && <ul className="header-sub-ul">
                            <li className="header-li"><a href="/">Download App</a></li>
                            <li className="header-li"><a href="/">Browse campaigns</a></li>
                        </ul>}
                    </ul>
                </div>}
            </div >
        </>

    )
}
