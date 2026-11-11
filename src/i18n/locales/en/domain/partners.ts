import FtLogo from "@/assets/images/logos/ft_logo.svg";
import IeLogo from "@/assets/images/logos/ie_logo.svg";
import UnbLogo from "@/assets/images/logos/unb_logo.svg";
import VtexLogo from "@/assets/images/logos/vtex_logo.svg";
import type { PartnerItem } from "@/types/content";

export const partners = {
  items: [
    {
      type: "INSTITUTIONAL",
      name: "Faculty of Technology",
      logoUrl: FtLogo,
      url: "http://ft.unb.br",
    },
    {
      type: "INSTITUTIONAL",
      name: "Institute of Exact Sciences",
      logoUrl: IeLogo,
      url: "https://exatas.unb.br",
    },
    {
      type: "INSTITUTIONAL",
      name: "University of Brasília",
      logoUrl: UnbLogo,
      url: "https://www.unb.br",
    },
    {
      type: "SPONSOR",
      name: "VTEX",
      logoUrl: VtexLogo,
      url: "https://www.vtex.com/en-us",
    },
  ] satisfies PartnerItem[],
};
