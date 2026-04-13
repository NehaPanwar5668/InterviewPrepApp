import React from 'react';

const Dashboard = ({ darkMode }) => {
  const stats = {
    totalQuestions: 30,
    correct: 28,
    accuracy: 85,
    streak: 12
  };

  return (
    <div className={`max-w-4xl mx-auto px-4 py-20 ${
      darkMode ? 'text-white' : 'text-gray-900'
    }`}>

      
      <div className="text-center mb-16">
        <h1 className={`text-4xl lg:text-5xl font-bold mb-4 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>
          Dashboard
        </h1>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Track your interview prep progress
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        
        <div className={`p-8 rounded-2xl shadow-lg text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-4xl font-bold text-blue-600">{stats.accuracy}%</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
            Accuracy
          </p>
        </div>

        <div className={`p-8 rounded-2xl shadow-lg text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-4xl font-bold text-green-600">{stats.correct}</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
            Correct
          </p>
        </div>

        <div className={`p-8 rounded-2xl shadow-lg text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-4xl font-bold text-purple-600">{stats.totalQuestions}</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
            Total
          </p>
        </div>

        <div className={`p-8 rounded-2xl shadow-lg text-center ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <h3 className="text-4xl font-bold text-orange-600">{stats.streak}</h3>
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mt-2`}>
            Streak
          </p>
        </div>
      </div>

     
      <div className={`rounded-3xl shadow-2xl p-8 lg:p-12 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
        <h2 className="text-2xl font-bold mb-8">Recent Practice</h2>

        <div className="space-y-4">

          <div className={`flex items-center justify-between p-4 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div>
              <h4 className="font-semibold">Binary Search Complexity</h4>
              <p className="text-sm text-green-500">✅ Correct</p>
            </div>
            <span className="text-sm text-gray-400">2 mins ago</span>
          </div>

          <div className={`flex items-center justify-between p-4 rounded-xl ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <div>
              <h4 className="font-semibold">15% of 200</h4>
              <p className="text-sm text-red-500">❌ Wrong</p>
            </div>
            <span className="text-sm text-gray-400">5 mins ago</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;