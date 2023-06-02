import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [storedValue, setStoredValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleClick = (value) => {
  if (/[+\-*/]/.test(value)) {
    if (displayValue !== '0' && operator !== '') {
      if (!/[+\-*/]/.test(displayValue)) {
        setStoredValue(evaluate(storedValue + operator + displayValue).toString().slice(0, 10));
      }
    } else if (displayValue !== '0') {
      setStoredValue(displayValue);
    }
    setOperator(value);
    setDisplayValue(value);
  } else {
    if (value === '.' && displayValue.includes('.')) {
      return;
    }
    if (displayValue.length < 12) {
      if (/[+\-*/]/.test(displayValue) || displayValue === '0') {
        setDisplayValue(value);
      } else {
        setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
      }
    }
  }
};

  const handleClear = () => {
    setDisplayValue('0');
    setStoredValue('');
    setOperator('');
  };

  const handleEquals = () => {
    if (storedValue && operator) {
      try {
        const result = evaluate(storedValue + operator + displayValue);
        setDisplayValue(result.toString().slice(0, 10));
        setStoredValue('');
        setOperator('');
      } catch (error) {
        console.log('Error in evaluation:', error);
      }
    }
  };

  return (
    <div>
      <Display displayValue={displayValue} />
      <div className="buttons-container">
        <div className="row">
          <Button onClick={() => handleClick('7')} label="7" id="seven" />
          <Button onClick={() => handleClick('8')} label="8" id="eight" />
          <Button onClick={() => handleClick('9')} label="9" id="nine" />
          <Button onClick={() => handleClick('/')} label="/" id="divide" />
        </div>
        <div className="row">
          <Button onClick={() => handleClick('4')} label="4" id="four" />
          <Button onClick={() => handleClick('5')} label="5" id="five" />
          <Button onClick={() => handleClick('6')} label="6" id="six" />
          <Button onClick={() => handleClick('*')} label="*" id="multiply" />
        </div>
        <div className="row">
          <Button onClick={() => handleClick('1')} label="1" id="one" />
          <Button onClick={() => handleClick('2')} label="2" id="two" />
          <Button onClick={() => handleClick('3')} label="3" id="three" />
          <Button onClick={() => handleClick('-')} label="-" id="subtract" />
        </div>
        <div className="row">
          <Button onClick={() => handleClick('0')} label="0" id="zero" />
          <Button onClick={() => handleClick('.')} label="." id="decimal" />
          <Button onClick={() => handleClick('+')} label="+" id="add" />
          <Button onClick={handleEquals} label="=" id="equals" />
        </div>
        <div className="row">
          <Button onClick={handleClear} label="Clear" id="clear" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
