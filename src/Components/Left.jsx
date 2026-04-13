import React from 'react'

const Left = ({ darkMode }) => {

  const titleStyle = darkMode
    ? 'bg-gradient-to-r from-white to-gray-400'
    : 'bg-gradient-to-r from-gray-900 to-blue-900';

  const subtitleStyle = darkMode
    ? 'text-gray-300'
    : 'text-gray-700';

  return (
    <div>
      <div>
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent leading-tight ${titleStyle}`}>
          Interview Prep
        </h1>

        <h2 className={`text-2xl md:text-3xl lg:text-4xl font-medium mt-4 leading-relaxed ${subtitleStyle}`}>
          Ace Your Next Interview With Smart Practice
        </h2>
      </div>
    </div>
  )
}

export default Left