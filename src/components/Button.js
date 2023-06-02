// Button.js
import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, label, id }) => {
  return (
    <button onClick={onClick} id={id} className="button">
      {label}
    </button>
  );
};

export default Button;
