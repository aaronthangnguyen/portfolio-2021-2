import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Aaron Nguyen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main></main>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <h1 className="text-6xl font-bold">
          Aaron{" "}
          <a
            className="p-2 text-blue-600 transition duration-300 ease-out hover:bg-red-600 hover:text-white"
            href="https://www.linkedin.com/in/aaronthangnguyen/"
            target="_blank"
          >
            Nguyen 🌋
          </a>
        </h1>

        <code className="p-3 mt-5 text-lg font-bold bg-gray-100 rounded-lg">
          Full-stack Software Engineer
        </code>

        <div className="flex flex-wrap items-stretch max-w-4xl mt-6 justify-evenly sm:w-full odd:after:w-96">
          <div className="p-6 text-left transition duration-300 ease-in-out transform w-96 rounded-xl group hover:bg-yellow-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
            <h3 className="mb-2 text-2xl font-bold group-hover:text-yellow-500">
              University of Central Florida
            </h3>
            <ul className="text-lg text-gray-400 group-hover:text-yellow-400">
              <li>Bachelor of Computer Science</li>
              <li>
                GPA: <span className="font-bold">4.0</span>
              </li>
              <li>2022 - 2024 | expected</li>
            </ul>
          </div>

          <div className="p-6 text-left transition duration-300 ease-in-out transform w-96 rounded-xl group hover:bg-red-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
            <h3 className="mb-2 text-2xl font-bold group-hover:text-red-500">
              Valencia College
            </h3>
            <ul className="text-lg text-gray-400 group-hover:text-red-400">
              <li>Associate of Arts</li>
              <li>
                GPA: <span className="font-bold">4.0</span>
              </li>
              <li>2021 - 2022 | transferred</li>
            </ul>
          </div>

          <div className="p-6 mt-3 text-left transition duration-300 ease-in-out transform rounded-xl w-96 group hover:bg-blue-50 hover:shadow-lg hover:translate-y-1 hover:scale-105">
            <h3 className="mb-2 text-2xl font-bold group-hover:text-blue-500">
              Ton Duc Thang University
            </h3>
            <ul className="text-lg text-gray-400 group-hover:text-blue-400">
              <li>Bachelor of Laws</li>
              <li>2014 - 2018 | graduated</li>
            </ul>
          </div>
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
}
