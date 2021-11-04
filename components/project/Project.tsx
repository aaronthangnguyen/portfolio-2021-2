import { FunctionComponent } from "react";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-between max-w-4xl mt-3 sm:w-full odd:after:w-72">
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

      <div className="w-64 p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed hover:border-purple-400 rounded-xl group hover:translate-y-1 hover:scale-105">
        <h3 className="mb-2 text-2xl font-bold group-hover:text-purple-500">
          <a
            href="https://www.ucf.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check-in.App
          </a>
        </h3>
        <ul className="text-lg text-gray-400 list-disc list-inside group-hover:text-purple-400">
          <li>TypeScript</li>
          <li>Next.js</li>
          <li>React.js</li>
          <li>Chakra UI</li>
        </ul>
      </div>

      <div className="p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed w-72 hover:border-pink-400 rounded-xl group hover:translate-y-1 hover:scale-105">
        <h3 className="mb-2 text-2xl font-bold group-hover:text-pink-500">
          <a
            href="https://www.ucf.edu/"
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
    </div>
  );
};

export default Project;
