import PapersSection from "@/components/sections/PapersSection";

import HeroSection from "./sections/HeroSection";

function Papers() {
  return (
    <>
      <HeroSection />
      <PapersSection showHeader={false} />
    </>
  );
}

export default Papers;
