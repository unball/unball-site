import FtLogo from "@/assets/images/logos/ft_logo.svg";
import IeLogo from "@/assets/images/logos/ie_logo.svg";
import UnbLogo from "@/assets/images/logos/unb_logo.svg";
import VtexLogo from "@/assets/images/logos/vtex_logo.svg";
import type { PartnerItem } from "@/types/content";

export const partners = {
  items: [
    {
      type: "INSTITUCIONAL",
      name: "Faculdade de Tecnologia",
      logoUrl: FtLogo,
      url: "http://ft.unb.br",
    },
    {
      type: "INSTITUCIONAL",
      name: "Instituto de Exatas",
      logoUrl: IeLogo,
      url: "https://exatas.unb.br",
    },
    {
      type: "INSTITUCIONAL",
      name: "Universidade de Brasília",
      logoUrl: UnbLogo,
      url: "https://www.unb.br",
    },
    {
      type: "PATROCÍNIO",
      name: "VTEX",
      logoUrl: VtexLogo,
      url: "https://www.vtex.com/pt-br",
    },
  ] satisfies PartnerItem[],
};
