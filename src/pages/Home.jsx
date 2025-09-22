// pages/Home.jsx
import React from "react";
import PortfolioSection from "../components/HomePageSections/PortfolioSection";
import FounderTestimonials from "../components/HomePageSections/FounderTestimonials";
import InvestmentFAQ from "../components/HomePageSections/InvestmentFAQ";
import InsightsSection from "../components/HomePageSections/InsightsSection";
import Landing from "../components/HomePageSections/Landing";
import BlackBanner from "../components/other/BlackBanner";
import LuxHero from "../components/other/LuxHero";
import Conviction from "../components/other/Conviction";
import OverlaySection from "../components/other/OverlaySection";
import ExpertiseBuild from "../components/other/ExpertiseBuild";

function Home() {
  return (
    <>
      <Landing />
      <BlackBanner />
      <ExpertiseBuild />
      <LuxHero />
      <Conviction />
      <OverlaySection />
      <PortfolioSection />
      <FounderTestimonials />
      <InvestmentFAQ />
      <InsightsSection />
    </>
  );
}

export default Home;
