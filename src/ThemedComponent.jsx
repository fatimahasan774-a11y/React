// ThemedComponent.jsx
import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return <div style={style}>This is a {theme}-themed component!</div>;
}

export default ThemedComponent;
