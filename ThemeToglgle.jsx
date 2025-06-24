import React from 'react'
import './ThemeToggle.css';


function ThemeToggle({darkMode, setDarkMode}){
  return(
    <div className="theme-toggle">
      <label>
        <input 
          type="checkbox"
          checked={darkMode}
          onChange = {() => setDarkMode((prev) => !prev)}
          {darkMode ? 'Dark Mode' : 'Light Mode'}
        />
      </label>
    </div>
    )
};

export default ThemeToggle;