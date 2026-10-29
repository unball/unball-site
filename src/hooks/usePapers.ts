import { useMemo } from "react";

import { useTranslatedList } from "@/hooks/useTranslatedList";
import type { PaperFilterType, PaperItem } from "@/types/content";

export interface UsePapersOptions {
  filterType?: PaperFilterType;
  limit?: number;
}

export function usePapers({
  filterType = "all",
  limit,
}: UsePapersOptions = {}) {
  const allPapers = useTranslatedList<PaperItem>("domain.papers.items");

  const filteredPapers = useMemo(() => {
    if (!filterType || filterType === "all") return allPapers;
    return allPapers.filter((item) => item.type === filterType);
  }, [allPapers, filterType]);

  const displayedPapers = useMemo(() => {
    if (limit !== undefined) {
      return filteredPapers.slice(0, limit);
    }
    return filteredPapers;
  }, [filteredPapers, limit]);

  const hasMore = limit !== undefined && filteredPapers.length > limit;

  return {
    allPapers,
    filteredPapers,
    displayedPapers,
    hasMore,
    totalCount: filteredPapers.length,
  };
}
