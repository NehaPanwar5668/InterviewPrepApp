import React from 'react'

const Button2 = ({darkMode,setDarkMode}) => {
  return (
    <div>
       <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
              title="Toggle Theme"
            >
              {darkMode ? (
                <span>☀️</span>
              ) : (
                <span>🌙</span>
              )}
            </button>
    </div>
  )
}

export default Button2
