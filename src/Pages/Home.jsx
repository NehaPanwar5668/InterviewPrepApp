import React from 'react';
import Left from '../Components/Left';
import Button from '../Components/Button';
import Right from '../Components/Right';

const Home = ({ darkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <div className="space-y-8 lg:space-y-12">
          <Left darkMode={darkMode} />

          <Button />


          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-200">
            <div>
              <h3 className={`text-4xl lg:text-5xl font-black ${darkMode ? 'text-white' : 'text-gray-900'}`}>10K+</h3>
              <p className={`text-lg font-medium mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Questions</p>
            </div>
            <div>
              <h3 className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                }`}>5K+</h3>
              <p className={`text-lg font-medium mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Users</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className={`px-6 py-4 shadow-lg rounded-xl transition-all hover:shadow-xl hover:scale-105 ${darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-900'
              }`}>
              📘 Practice Questions
            </div>

            <div className={`px-6 py-4 shadow-lg rounded-xl transition-all hover:shadow-xl hover:scale-105 ${darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-900'
              }`}>
              🤖 AI Explanations
            </div>

            <div className={`px-6 py-4 shadow-lg rounded-xl transition-all hover:shadow-xl hover:scale-105 ${darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-900'
              }`}>
              📊 Track Progress
            </div>
          </div>
        </div>

        <div className="relative">
          <Right darkMode={darkMode} />
        </div>
      </div>
    </div>
  );
};

export default Home;