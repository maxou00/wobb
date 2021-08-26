import Hero from "../component/Hero";
import Features from "../component/Features";
import Campaign from "../component/Campaign";
import InfluencersTestimonalCard from "../component/InfluencersTestimonalCard";
import CreateAccountSections from "../component/CreateAccountSections";
import FeatureCampaign from "../component/FeatureCampaign";
import { useAppUser } from "../../state/selectors";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { Routes } from "../../routes";

export default function Landing() {
  const { user } = useAppUser();
  const history = useHistory();

  useEffect(() => {
    if(user) {
      history.replace(Routes.Discover);
    }
  }, [user, history]);

  return (
    <div>
      <Hero />
      <Features />
      <FeatureCampaign />
      <CreateAccountSections />
      <InfluencersTestimonalCard />
      <Campaign />
    </div>
  )
}
