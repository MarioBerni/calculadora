import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const handleClick = (value) => {
    if (value === '.' && displayValue.includes('.')) {
      return;
    }
  
    if (/[+\-*/]$/.test(displayValue) && /[+\-*/]/.test(value)) {
      setDisplayValue((prevDisplayValue) => prevDisplayValue.slice(0, -1) + value);
    } else {
      if (displayValue === '0' && value === '0') {
        return;
      }
      if (displayValue === '0') {
        setDisplayValue(value);
      } else {
        // Comprueba si la longitud de la pantalla es 10 antes de agregar otro valor
        if (displayValue.length < 16) {
          setDisplayValue((prevDisplayValue) => prevDisplayValue + value);
        }
      }
    }
  };  

  const handleClear = () => {
    setDisplayValue('0');
  };

  const handleEquals = () => {
    try {
      const result = evaluate(displayValue);
      setDisplayValue(result.toString().slice(0, 10));
    } catch (error) {
      console.log('Error in evaluation:', error);
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
