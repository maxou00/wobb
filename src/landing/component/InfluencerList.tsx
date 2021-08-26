export default function InfluencerList() {
    return (
        <section className="dropdown-influencer">
            <div className="menu-item dropdown-heading" >I'm an Influencer <img src="/images/dropdown.svg" alt="influencers" height="12px" width="12px" style={{ marginTop: 4 }} /></div>
            <ul className="influencer-list">
                <li><a href="/">Download app</a></li>
                <li><a href="/">Browse Campaigns</a></li>
            </ul>
        </section>
    );
}