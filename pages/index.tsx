import { NextPage } from "next";
import Head from "next/head";
import Name from "../components/hero/Name";
import Title from "../components/hero/Title";
import School from "../components/education/School";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Aaron Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Name />
        <Title>Full-stack Software Engineer</Title>

        <div className="flex flex-wrap items-stretch justify-center max-w-4xl mt-6 gap-9 sm:w-full odd:after:w-96 ">
          <School
            school="University of Central Florida"
            url="https://www.ucf.edu/"
          >
            <li>Bachelor of Computer Science</li>
            <li>
              GPA: <span className="font-bold">N/A</span>
            </li>
            <li>2022 - 2024 | expected</li>
          </School>

          <School school="Valencia College" url="https://valenciacollege.edu/">
            <li>Associate of Arts</li>
            <li>
              GPA: <span className="font-bold">4.0</span>
            </li>
            <li>2021 - 2022 | transferred</li>
          </School>

          <School
            school="Ton Duc Thang University"
            url="https://www.tdtu.edu.vn/en/"
          >
            <li>Bachelor of Laws</li>
            <li>2014 - 2018 | graduated</li>
          </School>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24">
        <a
          className="flex items-center justify-center"
          href="https://www.linkedin.com/in/aaronthangnguyen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aaron Nguyen © 2021
        </a>
      </footer>
    </div>
  );
};

export default IndexPage;
