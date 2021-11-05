import { FunctionComponent } from "react";

interface SourceCodeClubProps {}

const SourceCodeClub: FunctionComponent<SourceCodeClubProps> = () => {
  return (
    <div className="p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed w-72 hover:border-pink-400 rounded-xl group hover:translate-y-1 hover:scale-105">
      <h3 className="mb-2 text-2xl font-bold group-hover:text-pink-500">
        <a
          href="https://github.com/aaronthangnguyen/source-code-club-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code Club
        </a>
      </h3>
      <ul className="text-lg text-gray-400 list-disc list-inside group-hover:text-pink-400">
        <li>JavaScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>MUI</li>
      </ul>
    </div>
  );
};

export default SourceCodeClub;
