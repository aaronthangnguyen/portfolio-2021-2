import { FunctionComponent } from "react";

interface EducationProps {}

const Education: FunctionComponent<EducationProps> = () => {
  return (
    <div className="flex flex-wrap items-stretch justify-between max-w-4xl gap-3 mt-9 sm:w-full odd:after:w-96">
      <div className="p-6 text-left transition duration-300 ease-in-out transform w-96 rounded-xl group hover:bg-yellow-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
        <h3 className="mb-2 text-2xl font-bold group-hover:text-yellow-500">
          <a
            href="https://www.ucf.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            University of Central Florida
          </a>
        </h3>
        <ul className="text-lg text-gray-400 group-hover:text-yellow-400">
          <li>Bachelor of Computer Science</li>
          <li>
            GPA: <span className="font-bold">N/A</span>
          </li>
          <li>2022 - 2024 | expected</li>
        </ul>
      </div>

      <div className="p-6 text-left transition duration-300 ease-in-out transform w-96 rounded-xl group hover:bg-red-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
        <h3 className="mb-2 text-2xl font-bold group-hover:text-red-500">
          <a
            href="https://valenciacollege.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Valencia College
          </a>
        </h3>
        <ul className="text-lg text-gray-400 group-hover:text-red-400">
          <li>Associate of Arts</li>
          <li>
            GPA: <span className="font-bold">4.0</span>
          </li>
          <li>2021 - 2022 | transferred</li>
        </ul>
      </div>

      <div className="p-6 text-left transition duration-300 ease-in-out transform rounded-xl w-96 group hover:bg-blue-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
        <h3 className="mb-2 text-2xl font-bold group-hover:text-blue-500">
          <a
            href="https://www.tdtu.edu.vn/en/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ton Duc Thang University
          </a>
        </h3>
        <ul className="text-lg text-gray-400 group-hover:text-blue-400">
          <li>Bachelor of Laws</li>
          <li>2014 - 2018 | graduated</li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
