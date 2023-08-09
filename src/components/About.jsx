import React from "react";
import me from '../assets/me.jpg';
import { Link } from 'react-scroll';

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full bg-[#ffffff] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full py-8 md:py-16">
        <div className="bg-cyan-800 rounded-md max-w-[1200px] flex flex-col justify-center items-center max-w-[1000px] px-4 md:px-7 py-10 md:flex-row">
          <div className="md:w-1/2 md:pr-4 lg:pr-12">
            <p className="text-2xl md:text-4xl text-center md:text-left font-bold border-b-4 border-cyan-500">
              More About Me <br />
            </p>
            <p className="mt-4 md:mt-8">
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
              className="group text-cyan-800 px-4 md:px-6 py-2 md:py-3 flex items-center rounded-md bg-white cursor-pointer"
              style={{
                width: '150px',
                height: '40px',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
              }}

            >
              See My Work
              <span className="group-hover:rotate-90 duration-300">
                {/* Arrow icon */}
              </span>
            </Link>
          </div>
          <div className="md:w-1/2 mx-auto mt-6 md:mt-0">
            <img
              src={me}  
              alt="my profile"
              className="rounded-2xl w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
