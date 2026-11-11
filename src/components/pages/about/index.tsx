import { useTranslation } from "react-i18next";

import Logo from "@/assets/images/logos/unball-logo.png";
import AchievementsSection from "@/components/sections/AchievementsSection";
import LeagueSection from "@/components/sections/LeagueSection";
import PageHeroSection from "@/components/sections/PageHeroSection";

import MascotSection from "./sections/MascotSection";
import TimelineSection from "./sections/TimelineSection";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <PageHeroSection
        title={t("pages.about.hero.title")}
        description={t("domain.about.description")}
        imageSrc={Logo}
        imageAlt={t("pages.about.hero.imageAlt")}
      />
      <TimelineSection />
      <MascotSection />
      <LeagueSection subtitle="" />
      <AchievementsSection subtitle="" />
    </>
  );
}

export default About;
