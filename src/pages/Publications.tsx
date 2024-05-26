import React from 'react';

const Publications: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Publications</h1>
      <div className="space-y-8">
        <div className="flex items-start mb-6">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">NLPs</span>
            </div>
            <h3 className="text-lg font-bold text-pink-600">Analyzing Language Bias Between French and English in Conventional Multilingual Sentiment Analysis Models</h3>
            <p className="text-gray-700">Ethan Parker Wong and <a href="https://scholar.google.ca/citations?user=SXgVELcAAAAJ&hl=en" className="text-pink-600">Faten M'hiri</a></p>
            <p className="text-gray-600">2024</p>
            <a href="https://arxiv.org/abs/2405.06692" className="bg-gray-200 text-gray-700 px-2 py-1 mt-2 rounded hover:bg-gray-300">Paper</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publications;
