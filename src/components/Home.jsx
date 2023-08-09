import React from 'react';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#ffffff]">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-800 mb-4">
            Hi, I'm Janavi
          </h2>
          <div className="flex items-center mb-6">
            <p className="text-4xl sm:text-3xl  text-gray-500 mb-4">
              I'm studying <span className="font-bold">Computer Science</span> at the{" "}
              <span className="font-bold">University of Waterloo </span> <br /> <br />
              recently, I have worked as a <strong>Software Engineering Intern</strong> at ReliablyMe, implementing an AI chatbot
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="about"
              smooth
              duration={500}
              offset={-80}
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-[#2b447e] cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                {/* Arrow icon */}
              </span>
            </Link>
            <Link
              to="work"
              smooth
              duration={500}
              offset={-80}
              className="group text-white px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-[#2b447e] cursor-pointer"
            >
              My Work
              <span className="group-hover:rotate-90 duration-300">
                {/* Arrow icon */}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
