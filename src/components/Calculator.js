import React, { useState } from 'react';
import Display from './Display';
import RenderCol from './ButtonPanel';
import Button from './Button';
import calculate from '../logic/calculate';
import './style/style.scss';

const Calculator = () => {
  const [state, setState] = useState({
    total: '0',
    next: null,
    operations: null,
  });

  const handleClick = (buttonName) => {
    const cal = state;
    setState(calculate(cal, buttonName));
  };

  return (
    <div className="container main">
      <Display value={state.next || state.total || '0'} />
      <div className="button-panel">
        <RenderCol clickHandler={handleClick} btn0="AC" btn1="+/-" btn2="%" btn3="÷" />
        <RenderCol clickHandler={handleClick} btn0="7" btn1="8" btn2="9" btn3="x" />
        <RenderCol clickHandler={handleClick} btn0="4" btn1="5" btn2="6" btn3="-" />
        <RenderCol clickHandler={handleClick} btn0="1" btn1="2" btn2="3" btn3="+" />
        <div className="btn-col">
          <Button clickHandler={handleClick} buttonName="0" wide="wide" color="grey" />
          <Button clickHandler={handleClick} buttonName="." color="grey" />
          <Button clickHandler={handleClick} buttonName="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
