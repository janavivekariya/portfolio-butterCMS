import React from "react";
import me from '../assets/me.jpg';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-[#ffffff] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full py-8 md:py-16">
        <div className="bg-cyan-800 rounded-md max-w-[1200px] flex flex-col items-center md:flex-row  px-4 cd:px-7 py-10 ">
          <div className="md:w-1/2 md:pr-4 md:p-12">
            <p className="text-4xl text-center md:text-left font-bold border-b-4 border-cyan-500">
              More About Me <br />
            </p>
            <p className="mt-0 md:mt-10">
            Welcome to my digital space, where the joy of learning and creating come together. Since I was young, I've loved exploring new things, whether it was building robots or getting lost in the world of painting, igniting a lifelong passion for acquiring new skills. <br /> <br />
            My adventure in technology began with robotics classes, where I learned to build robots and make them work by coding. Over time, I got really good at it and even took part in big competitions like the World Robot Olympiad, First Lego League and Robotex. <br /> <br />
            When I got to high school, I got curious about coding. I enjoy making things, so programming seemed like the perfect fit for me. It's like adding a superpower to my creative toolkit. <br /> <br />
            One of the coolest parts of the journey has been turning lines of code into useful tools. I've been lucky to create things like Donte4Needy, Bookpedia, and an AI Chatbot. These projects have not only helped me learn  coding but also helped me make a positive difference in the world using technology. It feels amazing to know that what I create can help people and communities. <br /> <br />
            Through internships and side projects, I've explored different parts of software engineering, like making the front end and back end of websites, playing with data, and even working with blockchain. Looking ahead, I'm excited to keep trying out new things in software engineering through upcoming co-op experiences. <br /> <br />
     

            </p>
            <Link
              to="work"
              smooth
              duration={500}
              offset={-80}
              className="group text-cyan-800 px-6 py-3 flex items-center rounded-md bg-white cursor-pointer"
              style={{ width: '200px', height: '40px' }}
            >
              See My Work
              <span className="group-hover:rotate-90 duration-300">
                {/* Arrow icon */}
              </span>
            </Link>
          </div>
          <div className="md:w-1/2 mx-auto mt-0 md:mt-0">
            <img
              src={me}  
              alt="my profile"
              className="rounded-2xl w-full"
            />
            <div className="flex justify-center mt-4 space-x-4">
              <a
                href="https://github.com/janavivekariya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/janavivekariya"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="mailto:jvekariya@uwaterloo.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <FaEnvelope size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
