import { FunctionComponent } from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: FunctionComponent<TitleProps> = ({ children }) => {
  return (
    <code className="p-3 mt-5 text-lg font-bold bg-gray-100 rounded-lg">
      {children}
    </code>
  );
};

export default Title;
