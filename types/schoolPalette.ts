export interface Palette {
  hoverBg: string;
  hoverPrimaryText: string;
  hoverSecondaryText: string;
}

const schoolPalette: Record<string, Palette> = {
  "University of Central Florida": {
    hoverBg: "bg-yellow-50",
    hoverPrimaryText: "text-yellow-500",
    hoverSecondaryText: "text-yellow-400",
  },
  "Valencia College": {
    hoverBg: "bg-red-50",
    hoverPrimaryText: "text-red-500",
    hoverSecondaryText: "text-red-400",
  },
  "Ton Duc Thang University": {
    hoverBg: "bg-blue-50",
    hoverPrimaryText: "text-blue-500",
    hoverSecondaryText: "text-blue-400",
  },
};

export default schoolPalette;
