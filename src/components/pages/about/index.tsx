import AchievementsSection from "@/components/sections/AchievementsSection";
import LeagueSection from "@/components/sections/LeagueSection";

import HeroSection from "./sections/HeroSection";
import MascotSection from "./sections/MascotSection";
import TimelineSection from "./sections/TimelineSection";

function About() {
  return (
    <>
      <HeroSection />
      <TimelineSection />
      <MascotSection />
      <LeagueSection subtitle="" />
      <AchievementsSection subtitle="" />
    </>
  );
}

export default About;
