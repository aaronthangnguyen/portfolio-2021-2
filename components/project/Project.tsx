import { FunctionComponent } from "react";
import CheckInApp from "./CheckInApp";
import Portfolio from "./Portfolio";
import SourceCodeClub from "./SourceCodeClub";
import ValenciaTechClub from "./ValenciaTechClub";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-between max-w-4xl gap-3 mt-6 sm:w-full odd:after:w-72">
      <Portfolio />
      <CheckInApp />
      <SourceCodeClub />
      <ValenciaTechClub />
    </div>
  );
};

export default Project;
