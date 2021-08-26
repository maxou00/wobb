export default function MarketerList() {

    return (
        <section className="dropdown-marketer">
            <div className="menu-item dropdown-heading">I'm a Marketer <img src="/images/dropdown.svg" alt="marketer" height="12px" width="12px" style={{ marginTop: 4 }} /></div>

            <ul className="marketer-list">
                <li><a href="/">Post a Campaign</a></li>
                <li><a href="/">Browse Influencers</a></li>
            </ul>
        </section>
    );
}