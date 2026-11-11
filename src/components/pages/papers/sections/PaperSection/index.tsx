import { useState } from "react";

import PapersSection from "@/components/sections/PapersSection";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";
import type { PaperFilterType } from "@/types/content";

import PaperFilter from "./PaperFilter";

function PaperSection() {
  const [activeFilter, setActiveFilter] = useState<PaperFilterType>("all");

  return (
    <BoxSection sx={{ width: "100%", alignItems: "flex-start" }}>
      <FlexBoxBetween
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "stretch", md: "flex-start" },
          gap: { xs: 4, md: 6 },
        }}
      >
        <PaperFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
        <PapersSection
          showHeader={false}
          filterType={activeFilter}
          disableWrapper
        />
      </FlexBoxBetween>
    </BoxSection>
  );
}

export default PaperSection;
