import { NextPage } from "next";
import Head from "next/head";
import Name from "../components/hero/Name";
import Title from "../components/hero/Title";
import Education from "../components/education/Education";
import Project from "../components/project/Project";

const IndexPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Aaron Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <Name />
        <Title />
        <Education />
        <Project />
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
