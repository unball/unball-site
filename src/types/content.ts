export type AchievementIcon = "trophy" | "medal";

export type AchievementItem = {
  id: number | string;
  title: string;
  competition: string;
  year: number | string;
  icon?: AchievementIcon;
};

export type LeagueTrivia = {
  title: string;
  description: string;
};

export type LeagueItem = {
  name: string;
  shortName: string;
  description: string;
  tags: string[];
  trivia?: LeagueTrivia;
};

export type PaperType = "tdp" | "article" | "tcc";

export type PaperItem = {
  id: number | string;
  type: PaperType;
  title: string;
  authors: string[];
  date: string;
  abstract: string;
  url: string;
  tags: string[];
  ctaText: string;
};

export type PartnerItem = {
  type: string;
  name: string;
  logoUrl: string;
  url?: string;
};

export type WorkAreaItem = {
  title: string;
  icon: string;
  description: string;
};

export type InstitutionalItem = {
  label: string;
  href: string;
};

export type TimelineItem = {
  date: string;
  title: string;
  description: string;
};
