import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button2 from './Button2';
import Button3 from './Button3';

const Navbar = ({ darkMode, setDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/practice', label: 'Practice' },
    { path: '/dashboard', label: 'Dashboard' }
  ];

  return (
    <nav className={`backdrop-blur-md shadow-lg sticky top-0 z-50 border-b ${
      darkMode ? 'bg-gray-900/90 border-gray-700'  : 'bg-white/90 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          <div 
            className="flex items-center gap-2 cursor-pointer p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
            onClick={() => navigate('/')}
          >
           
            <div>
              <h1 className="font-bold text-xl">InterviewPrep</h1>
              <p className="text-xs opacity-75">Ace Your Interview</p>
            </div>
          </div>

          
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(item => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span>{item.icon}</span>
                  {item.label}
                </button>
              ))}
            </div>

           <Button2 darkMode={darkMode} setDarkMode={setDarkMode}/>

           <Button3/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;