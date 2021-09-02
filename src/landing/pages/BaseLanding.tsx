import Footer from "../component/Footer";
import '../styles/globals.scss'
import '../styles/variable.scss'
import '../styles/home.scss'
import '../styles/main.scss'
import '../styles/about.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WebHeader from "../component/WebHeader";
import MobileHeader from "../component/MobileHeader";
import { Helmet } from "react-helmet";
import { useCallback } from "react";
import * as snippet from '@segment/snippet';
import { Route, Switch } from "react-router";
import About from "./about";
import Privacy from "./privacy-policy";
import Terms from "../component/Terms";
import Landing from ".";

function BaseLanding() {

  const renderSnippet = useCallback(() => {
    const opts = {
      apiKey: "TLvDtBeWuBgeb2GbJzoWllpWjeMTrdB8",
      page: true,
    };
    return snippet.min(opts);
  }, []);

  return (<div className="land">
    <Helmet>
      <meta name="title" content="Wobb: Largest marketplace for brands & Influencers" />
      <meta name="description" content="Wobb is the largest Influencer marketing platform which connects brands with social media influencers to run paid & barter campaigns." />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Wobb: Largest marketplace for brands & Influencers" />
      <meta property="og:url" content="https://product.wobb.ai/" />
      <meta property="og:type" content="website" />
      <meta property="og:description" content="Wobb provides paid & barter campaigns for influencers to connect with brands. Wobb is one stop shop for your influencer campaign." />
      <meta property="og:image" content="/images/GetInfluencercampaigns.svg" />

      <link rel="fav icon" href="/favicon.webp" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      <script dangerouslySetInnerHTML={{
        __html: renderSnippet()
      }} />

    </Helmet>
    <WebHeader />
    <MobileHeader />
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/privacy-policy">
        <Privacy/>
      </Route>
      <Route path="/terms">
        <Terms/>
      </Route>
      <Route path="/" exact>
        <Landing/>
      </Route>
    </Switch>
    <Footer />
  </div>)
}

export default BaseLanding
