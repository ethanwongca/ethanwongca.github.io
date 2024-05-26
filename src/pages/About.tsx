import React from 'react';
import headshot from '../assets/headshot.jpg';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="lg:w-2/3">
          <h1 className="text-5xl font-bold mb-4">
            Ethan Parker Wong
          </h1>
          <p className="text-xl mb-2">
            <a href="ethanwongca.github.io" className="text-pink-600">Computer Science at UBC. </a> Vancouver, BC. <a href="https://www.linkedin.com/in/ethanparkerwong/" className="text-pink-600 hover:underline">Linkedin</a>.
          </p>
          <p className="text-lg mb-4">
            Hello, my name is Ethan and I am Computer Science Student at UBC. I am currently developing artificial intelligence tools for the <a href="https://www.linkedin.com/in/ethanparkerwong/" className="text-pink-500"> United Nations </a> and UBC. I am interested in software development, human computer interaction, and machine learning. On this portfolio you can find my resume, projects, and publications.
          </p>
          <p className="text-lg mb-4">
            Besides computer science, I love being active. I have ran three half-marathons, have a black belt in Taekwondo, and I am preparing for my first century bike ride. I also love to travel and am always looking for new places to explore. Anywards enjoy!
          </p>
          <p className="text-lg mb-4">
            Feel free to reach out to me on my <a href="mailto:ethanwongca@gmail.com" className="text-pink-600">email</a>, ethanwongca@gmail.com if any of my work interests you. I am always looking for new opportunities to learn and grow!
          </p>
        </div>
        <div className="lg:w-1/3 lg:pl-8 text-center">
          <img src={headshot} alt="Profile" className="rounded shadow-lg mb-4 lg:mb-0"/>
        </div>
      </div>
    </div>
  );
};

export default About;

