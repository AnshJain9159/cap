import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import SupportUs from './SupportUs';

const teamMembers = [
  {
    name: "Kartik Singh",
    title: "Founder & UI/UX Designer",
    description:
      "I serve as the frontend developer and project manager for this initiative. My passion for technology drives my desire to create seamless user experiences. I oversee the development process and ensure that our projects are executed efficiently and effectively.",
    image: "/ks.jpg",
    linkedin: "https://in.linkedin.com/in/kartik-singh19",
    github: "https://github.com/PROBOTTHACK",
    email: "ks19092005@gmail.com",
  },
  {
    name: "Abhinav Gupta",
    title: "Frontend Developer & Project Manager",
    description:
    "I am the originator of the idea behind our platform. With the support of my capable team, I transformed this vision into reality. I designed the UI/UX of the website to ensure an intuitive and seamless user experience",
    image: "/ag.png",
    linkedin: "https://www.linkedin.com/in/abhinav-gupta-b3317128a/",
    github: "https://github.com/abhinav2805-ux",
    email: "gupta380189@gmail.com",
  },
  {
    name: "Ashwin Bansal",
    title: "Backend Developer",
    description:
      "I am the backend developer for this project. I focus on creating a robust and scalable infrastructure to support our applications. My goal is to ensure that our backend systems are efficient and reliable.",
    image: "/Ellipse 22.svg",
    linkedin: "https://www.linkedin.com/in/ashwin-bansal-5b5a70257/",
    github: "https://github.com/Ashwin1902",
    email: "ashwinbansal19feb@gmail.com",
  },
  {
    name: "Ansh Jain",
    title: "Frontend Developer & Product Designer",
    description:
      "I am responsible for the frontend development and product design. I enjoy creating visually appealing and user-friendly interfaces. My experience in product design helps us build intuitive and engaging applications.",
    image: "/aj.png",
    linkedin: "https://www.linkedin.com/in/ansh-jain-78986b242/",
    github: "https://github.com/AnshJain9159",
    email: "anshjain9159@gmail.com",
  },
  
];

function AboutUs() {
  return (
    <div className="bg-black text-white min-h-screen py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-4">ABOUT US</h1>
        <h5 className="text-lg md:text-xl text-center text-yellow-400 mb-12">
          We are developers of CODECAP
        </h5>
        <p className="text-base md:text-xl mb-8 text-center">
          We are a team of five enthusiastic college students who share a
          passion for technology, innovation, and collaboration. Recognizing the
          challenges that students face in finding the{" "}
          <span className="text-yellow-400">
            right teammates for hackathons
          </span>{" "}
          and staying{" "}
          <span className="text-yellow-400">updated on the latest events</span>,
          we decided to create a platform that addresses these needs.
        </p>
        <p className="text-base md:text-xl mb-16 text-center">
          Our website is designed to help college students connect with
          like-minded peers, form teams for hackathons, and discover exciting
          hackathon opportunities. We believe that by fostering a community of
          motivated and talented individuals, we can enhance the learning
          experience and drive innovation within our college and beyond.
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">MEET OUR TEAM</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-gray-700 p-4 md:p-6 rounded-xl text-center border-2 border-white"
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                {member.image && (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 md:w-36 md:h-36 object-cover rounded-full mb-4 md:mb-0"
                  />
                )}
                <div className="text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-2 text-lg md:text-xl underline">
                    {member.title}
                  </p>
                  <p className="text-base md:text-lg mt-4">
                    {member.description}
                  </p>
                  <div className="mt-4 flex justify-center gap-4">
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <LinkedIn className="text-blue-700 text-xl hover:text-blue-900" />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <GitHub className="text-gray-900 text-xl hover:text-gray-600" />
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`}>
                        <Email className="text-red-500 text-xl hover:text-red-700" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <SupportUs />
      </div>
    </div>
  );
}

export default AboutUs;