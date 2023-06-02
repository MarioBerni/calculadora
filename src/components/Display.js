import React from 'react';
import '../styles/Display.css';

const Display = ({ displayValue }) => {
  return (
    <div id="display" className="display">
      {displayValue}
    </div>
  );
};

export default Display;
