import { FunctionComponent } from "react";

interface CheckInAppProps {}

const CheckInApp: FunctionComponent<CheckInAppProps> = () => {
  return (
    <div className="w-64 p-6 text-left transition duration-300 ease-in-out transform border-4 border-transparent border-dashed hover:border-purple-400 rounded-xl group hover:translate-y-1 hover:scale-105">
      <h3 className="mb-2 text-2xl font-bold group-hover:text-purple-500">
        <a
          href="https://github.com/aaronthangnguyen/check-in-app/"
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
  );
};

export default CheckInApp;
