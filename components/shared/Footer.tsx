import { FunctionComponent } from "react";

interface FooterProps {}

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24">
      <a
        className="flex items-center justify-center text-lg text-gray-400"
        href="https://www.linkedin.com/in/aaronthangnguyen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered with ♥ by&nbsp;
        <span className="font-medium">Aaron Nguyen</span>
      </a>
    </footer>
  );
};

export default Footer;
