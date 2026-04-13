import React from 'react'

const Right = ({ darkMode }) => {

  const containerStyle = darkMode
    ? 'bg-gradient-to-b from-gray-800 to-gray-900 border-gray-700'
    : 'bg-gradient-to-b from-gray-100 to-gray-200 border-white';

  const cardStyle = darkMode
    ? 'bg-gray-900 text-white'
    : 'bg-white text-gray-800';

  const optionStyle = darkMode
    ? 'bg-gray-700 hover:bg-gray-600 text-white'
    : 'bg-gray-100 hover:bg-gray-200 text-black';

  const activeOption = darkMode
    ? 'bg-blue-700 hover:bg-blue-600 text-white border'
    : 'bg-blue-100 hover:bg-blue-200 text-black border';

  return (
    <div>
      <div className={`rounded-3xl shadow-2xl p-8 max-w-md mx-auto lg:mx-0 border-4 ${containerStyle}`}>

        <div className={`rounded-2xl shadow-inner p-6 h-80 flex flex-col space-y-4 ${cardStyle}`}>

         
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full" />
              <div className="w-2 h-2 bg-yellow-400 rounded-full" />
              <div className="w-2 h-2 bg-green-400 rounded-full" />
            </div>
          </div>

      
          <h3 className="font-semibold">
            What is time complexity?
          </h3>

       
          <div className="space-y-2 flex-1">
            <div className={`px-4 py-3 rounded-xl cursor-pointer ${optionStyle}`}>
              O(n)
            </div>

            <div className={`px-4 py-3 rounded-xl cursor-pointer font-medium ${activeOption}`}>
              O(log n)
            </div>

            <div className={`px-4 py-3 rounded-xl cursor-pointer ${optionStyle}`}>
              O(n²)
            </div>
          </div>

        
          <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all">
            🤖 AI Explain
          </button>

        </div>
      </div>
    </div>
  )
}

export default Right