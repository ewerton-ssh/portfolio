import { useState } from 'react';
import './darktoggle.css'

export default function DarkToggle({ onDarkModeChange }) {
    const [darkMode, setDarkMode] = useState(false);
    const handleToggle = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        onDarkModeChange(newDarkMode);
      };
    return (
        <div>
      <label>
        <input className='toggle-checkbox' type='checkbox' checked={darkMode} onChange={handleToggle} />
        <div className='toggle-slot'>
          <div className='sun-icon-wrapper'>
            <div className="iconify sun-icon" data-icon="feather-sun" data-inline="false"></div>
          </div>
          <div className='toggle-button'></div>
          <div className='moon-icon-wrapper'>
            <div className="iconify moon-icon" data-icon="feather-moon" data-inline="false"></div>
          </div>
        </div>
      </label>
    </div>
    )
}