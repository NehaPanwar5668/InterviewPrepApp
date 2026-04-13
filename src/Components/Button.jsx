import React from 'react'

const Button = () => {
  return (
    <div>
       <button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all w-fit"
            onClick={() => window.location.href = '/practice'}
          >
            Start Practicing →
          </button>
    </div>
  )
}

export default Button
