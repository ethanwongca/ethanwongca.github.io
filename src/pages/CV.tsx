import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="hidden lg:block lg:w-1/4 p-4">
          <ul className="space-y-4">
            <li><a href="#basics" className="text-gray-800 hover:text-pink-600">Basics</a></li>
            <li><a href="#experience" className="text-gray-800 hover:text-pink-600">Experience</a></li>
            <li><a href="#volunteering" className="text-gray-800 hover:text-pink-600">Volunteering</a></li>
            <li><a href="#education" className="text-gray-800 hover:text-pink-600">Education</a></li>
            <li><a href="#awards" className="text-gray-800 hover:text-pink-600">Awards</a></li>
            <li><a href="#publications" className="text-gray-800 hover:text-pink-600">Publications</a></li>
            <li><a href="#skills" className="text-gray-800 hover:text-pink-600">Skills</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 p-4 space-y-8">
          <div id="basics" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Basics</h2>
            <p><strong>Name:</strong> Ethan Parker Wong</p>
            <p><strong>Label:</strong> Computer Science Student</p>
            <p><strong>Email:</strong> <a href="mailto:ethanwongca@gmail.com" className="text-pink-600">ethanwongca@gmail.com</a></p>
            <p><strong>Phone:</strong> (236) 889-3873</p>
            <p><strong>URL:</strong> <a href="https://ethanwongca.github.io/" className="text-pink-600">https://ethanwongca.github.io/</a></p>
            <p><strong>Summary:</strong> A computer science student interested in machine learning and human computer interaction.</p>
          </div>

          <div id="experience" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> United Nations</p>
              <p><strong>Role:</strong> Artificial Intelligence Fellow</p>
              <p><strong>Duration:</strong> May 2024 - Present</p>
              <p><strong>Responsibilities:</strong> Currently developing AI tools for the UN-OICT Innovation Unit.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> University of British Columbia</p>
              <p><strong>Role:</strong> Research Assistant</p>
              <p><strong>Duration:</strong> March 2022 - Present</p>
              <p><strong>Responsibilities:</strong> Did data visualization and automated excel files for a hepatic blood flow literature review. Currently doing AI and epidemiology.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> McGill University</p>
              <p><strong>Role:</strong> TEAM Mentor</p>
              <p><strong>Duration:</strong> January 2024 - April 2024</p>
              <p><strong>Responsibilities:</strong> Had office hours for over 400 students in McGill's COMP 202, COMP 250, and COMP 206.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> Google</p>
              <p><strong>Role:</strong> Computer Science Research Mentorship Scholar</p>
              <p><strong>Duration:</strong> September 2023 - December 2023 </p>
              <p><strong>Responsibilities:</strong> Selected in a three month program to be mentored by a Google Employee in HCI and NLP.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> APOLLO Insurance</p>
              <p><strong>Role:</strong> Agency Intern</p>
              <p><strong>Duration:</strong> June 2023 - August 2023 </p>
              <p><strong>Responsibilities:</strong> Managed an insurance database with SQL. </p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> Koi Continuity</p>
              <p><strong>Role:</strong> Software Engineer Intern</p>
              <p><strong>Duration:</strong> October 2022 - June 2023</p>
              <p><strong>Responsibilities:</strong> Developed the business product using full-stack JS development.</p>
            </div>
          </div>

          <div id="volunteering" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Volunteering</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Organization:</strong> McGill Computer Science Undergraduate Society</p>
                <p><strong>Role:</strong> President FYC</p>
                <p><strong>Duration:</strong> October 2023 - April 2024</p>
                <p><strong>Responsibilities:</strong> Led a team of six to run ten events for computer science students at McGill.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> HackMcGill</p>
              <p><strong>Role:</strong> Experience Coordinator</p>
              <p><strong>Duration:</strong> September 2022 - April 2024</p>
              <p><strong>Responsibilities:</strong> Ran workshops in web development, git, and more for McHacks, Quebec's biggest hackathon.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> Canadian Online Model United Nations</p>
              <p><strong>Role:</strong> Founder</p>
              <p><strong>Duration:</strong> June 2020 - June 2023</p>
              <p><strong>Responsibilities:</strong> Founded a Model United Naitons, that won two awards from UNHCR. The conference had 300 delegates from 37 countries attend.</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
              <p><strong>Company:</strong> Vancouver Care Packages</p>
              <p><strong>Role:</strong> Executive</p>
              <p><strong>Duration:</strong> March 2021 - April 2022</p>
              <p><strong>Responsibilities:</strong> Helped run a non-profit that was featured by CTV news.</p>
            </div>
          </div>

          <div id="education" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Institution:</strong> University of British Columbia</p>
                <p><strong>Degree:</strong> BSc in Computer Science</p>
                <p><strong>Duration:</strong> 2024 - Present</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Institution:</strong> McGill University</p>
                <p><strong>Degree:</strong> Transferred (BSc in Computer Science)</p>
                <p><strong>Duration:</strong> 2022 - 2024</p>
            </div>
          </div>

          <div id="awards" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Awards</h2>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Award:</strong> Tomlinson Engagement Award for Mentoring</p>
                <p><strong>Year:</strong> 2024</p>
                <p><strong>Details:</strong> Mentoring students at McGill</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Award:</strong> Governor General's Academic Bronze Medal</p>
                <p><strong>Year:</strong> 2022</p>
                <p><strong>Details:</strong> Rank 1 at Magee Secondary School</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Award:</strong> Alma Mater Scholarship</p>
                <p><strong>Year:</strong> 2022</p>
                <p><strong>Details:</strong> McGill Entry Scholarship</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Award:</strong> British Columbia Achievement Scholarshp</p>
                <p><strong>Year:</strong> 2022</p>
                <p><strong>Details:</strong> Top 8,000 graduates from British Columbia</p>
            </div>
            <div className="border-l-4 border-gray-300 pl-4 mb-4">
                <p><strong>Award:</strong> Special Mention in UNHCR's MUN Refugee Challenge</p>
                <p><strong>Year:</strong> 2022</p>
                <p><strong>Details:</strong> Won for ideas in empowering refugees with technology over 350 of the top international MUNs</p>
            </div>
          </div>

          <div id="publications" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Publications</h2>
            <p><strong>Title:</strong> Analyzing Language Bias Between French and English in Conventional Multilingual Sentiment Analysis Models</p>
            <p><strong>Journal:</strong> arXiv</p>
            <p><strong>Year:</strong> 2024</p>
            <p><strong>Details:</strong> Wrote a paper on bias in sentiment analysis machine learning models. </p>
          </div>

          <div id="skills" className="bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <p><strong>Programming Languages:</strong> Python, JavaScript, R, TypeScript, Bash, C, Java</p>
            <p><strong>Technologies:</strong> React, Node.js, SQL, Power BI, AWS</p>
            <p><strong>Others:</strong> Data Analysis, Machine Learning</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Experience;
