import { FunctionComponent } from "react";

interface PortfolioProps {}

const Portfolio: FunctionComponent<PortfolioProps> = () => {
  return (
    <div className="w-64 p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed hover:border-green-400 rounded-xl group hover:translate-y-1 hover:scale-105">
      <h3 className="mb-2 text-2xl font-bold group-hover:text-green-500">
        <a
          href="https://www.ucf.edu/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </h3>
      <ul className="text-lg text-gray-400 list-disc list-inside group-hover:text-green-400">
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Tailwind.css</li>
      </ul>
    </div>
  );
};

export default Portfolio;
