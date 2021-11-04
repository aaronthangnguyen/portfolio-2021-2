import { FunctionComponent } from "react";

interface TitleProps {}

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <code className="p-3 mt-6 text-lg font-bold bg-gray-100 rounded-lg">
      Full-stack Software Engineer
    </code>
  );
};

export default Title;
