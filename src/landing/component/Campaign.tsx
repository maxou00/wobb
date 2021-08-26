import CampaignCard from "./CampaignCard";
import MobileDownloadCard from "./MobileDownloadCard";

export default function Campaign() {
    return (
        <div className="center">
            <div className="container-box">
                <div className=" camapign-container">
                    <div className="row">
                        <CampaignCard />
                        <MobileDownloadCard />
                    </div>
                </div>
            </div>
        </div>
    )
}