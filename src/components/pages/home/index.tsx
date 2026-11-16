import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import LeagueSection from "@/components/sections/LeagueSection";
import PapersSection from "@/components/sections/PapersSection";
import PartnerSection from "@/components/sections/PartnerSection";

import AboutSection from "./sections/AboutSection";
import HeroSection from "./sections/HeroSection";
import RobocupSection from "./sections/RobocupSection";

function Home() {
  return (
    <>
      <HeroSection />
      <RobocupSection />
      <AboutSection />
      <LeagueSection />
      <AchievementsSection />
      <PapersSection />
      <PartnerSection />
      <ContactSection />
    </>
  );
}

export default Home;
