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
            Vancouver, BC. <a href="https://www.linkedin.com/in/ethanwongca/" className="text-pink-600 hover:underline">Linkedin</a>.
          </p>
          <p className="text-lg mb-4">
            Hello! My name is Ethan and I am a Computer Science Student at UBC. I am an aspiring machine learning engineer who is currently a business intelligence engineer intern at <a href="https://www.linkedin.com/in/ethanwongca/" className="text-pink-500">  Amazon's Supply Chain Optimization Technology Forecasting Team</a>. I have developed artificial intelligence tools for the <a href="https://www.linkedin.com/in/ethanwongca/" className="text-pink-500">  United Nations. </a>
            I have also done natural langauge processing and deep learning research at UBC's SLIME-lab, Human Artificial Intelligence Lab, and at McGill University. My research interests are in natural language processing, multimodal learning, and human-centered artificial intelligence. On this portfolio, you can find my resume, projects, and publications.
          </p>
          <p className="text-lg mb-4">
            Besides computer science, I love being active. I have run four half-marathons, have a black belt in Taekwondo, and I am preparing for my first century bike ride. I also love to travel and am always looking for new places to explore. 
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

