import { FunctionComponent } from "react";

interface Props {}

const Name: FunctionComponent<Props> = () => {
  return (
    <h1 className="text-6xl font-bold mt-8">
      Aaron&nbsp;
      <a
        className="p-2 text-blue-600 transition duration-300 ease-out rounded-xl hover:bg-red-600 hover:text-white"
        href="https://www.linkedin.com/in/aaronthangnguyen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nguyen 🌋
      </a>
    </h1>
  );
};

export default Name;
