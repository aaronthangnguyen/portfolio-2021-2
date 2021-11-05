import { FunctionComponent } from "react";

interface ValenciaTechClubProps {}

const ValenciaTechClub: FunctionComponent<ValenciaTechClubProps> = () => {
  return (
    <div className="p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed w-72 hover:border-blue-400 rounded-xl group hover:translate-y-1 hover:scale-105">
      <h3 className="mb-2 text-2xl font-bold group-hover:text-blue-500">
        <a
          href="https://github.com/chisafukutome/valencia-tech-club-website"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valencia Tech Club
        </a>
      </h3>
      <ul className="text-lg text-gray-400 list-disc list-inside group-hover:text-blue-400">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Bulma.css</li>
      </ul>
    </div>
  );
};

export default ValenciaTechClub;
