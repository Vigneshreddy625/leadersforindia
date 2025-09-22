// pages/Home.jsx
import FounderTestimonials from "../components/HomePageSections/FounderTestimonials";
import InvestmentFAQ from "../components/HomePageSections/InvestmentFAQ";
import InsightsSection from "../components/HomePageSections/InsightsSection";
import Landing from "../components/HomePageSections/Landing";
import BlackBanner from "../components/other/BlackBanner";
import LuxHero from "../components/other/LuxHero";
import Conviction from "../components/other/Conviction";
import OverlaySection from "../components/other/OverlaySection";
import ExpertiseBuild from "../components/other/ExpertiseBuild";

export function Home() {
  return (
    <div className="relative">
      <section className="sticky -top-40 z-10 h-[150vh]">
        <Landing />
      </section>

      <section className="relative z-20">
        <BlackBanner />
      </section>

      <div className="relative z-30 bg-white">
        <ExpertiseBuild />
        <LuxHero />
        <Conviction />
        <OverlaySection />
        {/* <FounderTestimonials /> */}
        <InvestmentFAQ />
        <InsightsSection />
      </div>
    </div>
  );
}


export default Home;