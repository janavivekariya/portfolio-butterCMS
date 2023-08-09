import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-800 py-6 text-white text-center">
         <p className="mt-3 text-sm">Connect with me <br /> <br /></p>
      <div className="flex justify-center space-x-6">
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
     
    </footer>
  );
};

export default Footer;
