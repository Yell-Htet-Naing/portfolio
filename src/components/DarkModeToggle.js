// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import classes from './All.module.css';
const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {

    return localStorage.getItem('darkMode') === 'disabled';
  });

  useEffect(() => {

    document.querySelector("body").setAttribute("data-theme" , darkMode)

  }, [darkMode]);

  const toggleDarkMode = () => {

    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode ? 'disabled' : 'enabled');
  };

  return (
    <Form.Check
      className={classes["dark-position"]} 
      size={5}
      type="switch"
      id="darkModeToggle" 
      checked={darkMode}
      onChange={toggleDarkMode}
    />
  );
};

export default DarkModeToggle;
