import React, {useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Practice from './Pages/Practice'
import Dashboard from './Pages/Dashboard'
import Navbar from './Components/Navbar'



const App = () => {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  const savedTheme = JSON.parse(localStorage.getItem('darkMode'));
  if (savedTheme !== null) {
    setDarkMode(savedTheme);
  }
}, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);
  return (

    <div className={`min-h-screen transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode}/>} />
        <Route path="/practice" element={<Practice darkMode={darkMode}/>} />
          <Route path="/dashboard" element={<Dashboard darkMode={darkMode}/>} />
        </Routes>
        
    </div>
  )
}

export default App
