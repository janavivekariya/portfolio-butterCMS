import React from 'react';
//import code from '../assets/code2.png';
import work1 from '../assets/reliablyme.png';
import work2 from '../assets/bookpedia.png';
import work3 from '../assets/Weather_app.png';
import work4 from '../assets/doante4needy.png';
import work5 from '../assets/crestt.png'
import work6 from '../assets/iitk (2).png'


const Works = () => {
  return (
    <div name='work' className='w-full h-full text-cyan-800 bg-[#ffffff]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-cyan-800 border-cyan-500'>
            Work
          </p>
        </div>
        <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        {/* Container */}
        <div className='grid grid-cols-1 gap-10 md:pr'>
          {/* Grid Item 1 */}
          <div className='shadow-lg shadow-[#040c16] container rounded-md flex mx-auto'>
            {/* Image */}
            <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work1})` }}></div>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
              Software Engineering Intern at ReliablyMe
              </span>
              <p className='text-cyan-800'>
                <ul  className='list-disc pl-4 py-2'>
                  <li> Developed an AI-based chat bot using React and Python, integrating it seamlessly into the company’s web application to enhance user experience and support capabilities.</li>
                  <li>Received positive feedback from senior management for the chatbot’s impact on user engagement, leading to a
45% increase in overall user interaction.</li>
                </ul>
              </p>
              <div className='pt-4'>
                <a href='https://reliablyme.com/'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* ... (other grid items) ... */}
          {/* Grid Item 2 */}
          <div className='shadow-lg shadow-[#040c16] container rounded-md flex mx-auto'>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
              Bookpedia
              </span>
              <p className='text-cyan-800'>
                <ul className='list-disc pl-4 py-2'>
                  <li>Developed a React and Node.js web app with Express and integrated the Open Library API, enabling users to create
personalized reading lists by searching and adding books.
</li>
<li>Designed and implemented a PostgreSQL database, facilitating efficient storage and retrieval of user reading lists
through RESTful APIs.</li>
                </ul>
              </p>
              <div className='pt-4'>
                <a href='https://github.com/KathleenX7/Manulife-Skill-Development-Project-Team-294'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
             {/* Image */}
             <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work2})` }}></div>
          </div>
          {/* Grid Item 3 */}
          <div className='shadow-lg shadow-[#040c16] container rounded-md flex mx-auto'>
            {/* Image */}
            <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work3})` }}></div>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
                WeatherPlan
              </span>
              <p className='text-cyan-800'>
                <ul className='list-disc pl-4 py-2'>
                  <li>
                  Designed and developed a weather app that generates a personalized checklist of items to bring based on the
                  day’s weather forecast using React, Node.js, and Express
                  </li>
                  <li>
                  Integrated the OpenWeather API to retrieve real-time weather data, which was then processed by the backend
server to generate the necessary checklist items
                  </li>
                  </ul>
              </p>
              <div className='pt-4'>
                <a href='https://github.com/janavivekariya/WeatherPlan-App'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 4 */}
          <div className='shadow-lg shadow-[#040c16] container rounded-md flex mx-auto'>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
                Founder at Donate4Needy
              </span>
              <p className='text-cyan-800'>
                <ul className='list-disc pl-4 py-2'>
                  <li>
                  Conceptualized and developed a website which helps people make donations from comfort of their home with a
form made using PHP which sent updates to the team on email when donation form was filled
                  </li>
                  <li>
                  Co-founded Donate4Needy which helped 1000+ people with food and conducted 50+ STEM workshops for 200+
girls with basic python bootcamps
                  </li>
                </ul>
              </p>
              <div className='pt-4'>
                <a href='http://donate4needy.net/'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
             {/* Image */}
             <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work4})` }}></div>
          </div>
          {/* Grid Item 5 */}
          <div className='shadow-lg shadow-[#040c16]  container rounded-md flex mx-auto'>
            {/* Image */}
            <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work5})` }}></div>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
                Intern at Crestt
              </span>
              <p className='text-cyan-800'>
                <ul className='list-disc pl-4 py-2'>
                  <li>Increased efficiency of 100+ employees by adding a ‘attendance feature’ and a ‘sick leave request section’ on the
app used by company
</li>
<li>
Centralised stock data on app to improve work efficiency of employees by 70% using SQL and Microsoft Excel
Extensions
</li>
                </ul>
              </p>
              <div className='pt-4'>
                <a href='https://www.crestt.com/'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item 6 */}
          <div className='shadow-lg shadow-[#040c16] container rounded-md flex mx-auto'>
            {/* Text */}
            <div className='w-1/2 p-4 cursor-default'>
              <span className='text-lg font-bold text-cyan-800 tracking-wider'>
              Indian Institute of Technology Training and Internship Program
              </span>
              <p className='text-cyan-800'>
              <ul className='list-disc pl-4 py-2'>
                  <li>
                  Completed an intensive project-based curriculum on Python, WebScraping, HTML, CSS, and JavaScript, gaining
practical experience and knowledge of industry-standard tools and techniques
                  </li>
                  <li>
                  Developed several Python mini-projects including a DiceRoll simulator, Random Password generator, URL Shortener,and a Weather App by scraping data from Google
                  </li>
                </ul>
              </p>
              <div className='pt-4'>
                <a href='https://www.iitk.ac.in/'>
                  <button className='rounded-lg px-4 py-2 m-2 bg-cyan-800 text-white font-bold text-lg'>
                    View
                  </button>
                </a>
              </div>
            </div>
             {/* Image */}
             <div className='w-1/2 h-64 bg-cover bg-center' style={{ backgroundImage: `url(${work6})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
