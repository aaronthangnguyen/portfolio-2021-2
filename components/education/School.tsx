import { FunctionComponent } from "react";
import schoolPalette from "../../types/schoolPalette";
import { Palette } from "../../types/schoolPalette";

interface SchoolProps {
  school: string;
  url: string;
  children: React.ReactNode;
}

const School: FunctionComponent<SchoolProps> = ({
  school,
  url,
  children,
}: SchoolProps) => {
  const { hoverBg, hoverPrimaryText, hoverSecondaryText } =
    schoolPalette[school];
  return (
    <div
      className={`p-6 text-left transition duration-300 ease-in-out transform w-96 rounded-xl group hover:${hoverBg} hover:shadow-lg hover:translate-y-1 hover:scale-105`}
    >
      <h3 className={`mb-2 text-2xl font-bold group-hover:${hoverPrimaryText}`}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {school}
        </a>
      </h3>
      <ul className={`text-lg text-gray-400 group-hover:${hoverSecondaryText}`}>
        {children}
      </ul>
    </div>
  );
};

export default School;
