import React from 'react';
import '../styles/Button.css';

const Button = ({ onClick, label, id }) => {
  const isOperator = ['+', '-', '*', '/', '='].includes(label);
  const isClear = label === 'Clear';
  const buttonClass = isOperator ? 'button operator' : isClear ? 'button clear' : 'button';

  return (
    <button onClick={onClick} id={id} className={buttonClass}>
      {label}
    </button>
  );
};

export default Button;
