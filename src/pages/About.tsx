import React from 'react';

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ethan Wong</h1>
      <p>Testing testing</p>
      <img src="/assets/headshot.jpg" alt="Profile" className="mt-4"/>
      <address className="mt-4">
        Testing<br/>
        Testing<br/>
        Testing
      </address>
    </div>
  );
};

export default About;
