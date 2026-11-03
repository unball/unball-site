import { Box } from "@mui/material";
import { useState } from "react";

import { PaperList } from "@/components/sections/PapersSection";
import { usePapers } from "@/hooks/usePapers";
import { BoxSection, FlexBoxBetween } from "@/shared/styled";

import PaperFilter, { type PaperFilterType } from "./PaperFilter";

function PaperSection () {
    const [activeFilter, setActiveFilter] = useState<PaperFilterType>("all");
    const { displayedPapers } = usePapers({ filterType: activeFilter });
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
            <Box sx={{ flex: 1, width: "100%", minWidth: 0 }}>
                <PaperList items={displayedPapers} />
            </Box>
            </FlexBoxBetween>
        </BoxSection>
    );
}

export default PaperSection;