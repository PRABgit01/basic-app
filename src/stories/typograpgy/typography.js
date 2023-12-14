// Typography.js
import React from 'react';

function Typography() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px', // Adjust the margin as needed
  };

  return (
    <div style={containerStyle}>
      <h1>H1. Adorn Box heading</h1>
      <h2>H2. Adorn Box heading</h2>
      <h3>H3. Adorn Box heading</h3>
      <h4>H4. Adorn Box heading</h4>
      <h5>H5. Adorn Box heading</h5>
      <h6>H6. Adorn Box heading</h6>
    </div>
  );
}

export const fontColor = () => {
  const colors = ['#ff4e54', 'blue', 'green', 'purple', 'orange']; // Different colors

  return (
    <div>
      {colors.map((color, index) => (
        <h1 key={index} style={{ color }}>
          Adorn Box text with color {index + 1}
        </h1>
      ))}
    </div>
  );
};
export default Typography;