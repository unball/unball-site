import AchievementsSection from "@/components/sections/AchievementsSection";
import LeagueSection from "@/components/sections/LeagueSection";
import PapersSection from "@/components/sections/PapersSection";

import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import HeroSection from "./sections/HeroSection";
import PartnersSection from "./sections/PartnersSection";
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
      <PartnersSection />
      <ContactSection />
    </>
  );
}

export default Home;
