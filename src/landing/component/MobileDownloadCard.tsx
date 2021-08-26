
export default function MobileDownloadCard() {
    return (
        <div className="col-lg-6 mobile-card-p">
            <div className="mobile-card">
                <div className="">
                    <h3 className="download-heading">Are you looking for paid campaigns ?</h3>
                    <h5 className="download-head">Download App</h5>
                    <span className="download-desc">If you enjoy our web experience, we think you might enjoy
                        our mobile experience as well :</span>
                    <div className="row download-images">
                        <div className="col-lg-5 col-6" style={{ paddingLeft: 0 }}><img src="/images/google.svg" alt="google" className="google" /></div>
                        <div className="col-lg-5 col-6" style={{ paddingLeft: 0 }}><img src="/images/app.svg" alt="app" className="app" /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}