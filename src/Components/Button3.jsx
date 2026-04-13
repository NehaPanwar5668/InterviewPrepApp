import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Button3 = ({ darkMode }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/practice', label: 'Practice' },
    { path: '/dashboard', label: 'Dashboard' }
  ];

  return (
    <div className="relative">

      {/* BUTTON */}
      <button 
        onClick={() => setMenuOpen(!menuOpen)}
        className={`md:hidden p-2 rounded-xl transition-all ${
          darkMode
            ? 'hover:bg-gray-800 text-white'
            : 'hover:bg-gray-100 text-black'
        }`}
      >
        <span>{menuOpen ? '✖' : '☰'}</span>
      </button>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className={`absolute right-0 mt-2 w-40 shadow-lg rounded-xl p-2 flex flex-col gap-2 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}>

          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                navigate(item.path);
                setMenuOpen(false);
              }}
              className={`text-left px-3 py-2 rounded-lg ${
                darkMode
                  ? 'hover:bg-gray-800'
                  : 'hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}

        </div>
      )}

    </div>
  );
};

export default Button3;