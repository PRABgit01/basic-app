import React from 'react';
import theme from '../theme';

function Textbutton() {
  const containerStyle = {
    display: 'flex',
    gap: '20px', // Adjust the gap according to your preference
  };

  const secnd = {
    color: 'black', // Change the color to your desired color
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0',
  };
  
  const primar = {
    color: '#ff4e54', // Change the color to your desired color
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0',
  };

  const Dngr = {
    color: '#ff9800', // Change the color to your desired color
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0',
  };

  const sucss = {
    color: '#4caf50', // Change the color to your desired color
    textDecoration: 'none',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '0',
  };
  
  return (
    <div style={containerStyle}>
      <h1 style={{ ...primar }}>PRIMARY BUTTON</h1>
      <h1 style={{ ...secnd }}>SECONDARY BUTTON</h1>
      <h1 style={{ ...sucss }}>SUCCESS BUTTON</h1>
      <h1 style={{ ...Dngr }}>WARNING BUTTON</h1>
    </div>
  );
}

export default Textbutton;
