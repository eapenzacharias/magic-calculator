import React from 'react';
import Display from './Display';
import RenderCol from './ButtonPanel';
import Button from './Button';
import './style/style.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container main">
        <Display />
        <div className="button-panel">
          <RenderCol btn0="A" btn1="+/-" btn2="%" btn3="÷" />
          <RenderCol btn0="7" btn1="8" btn2="9" btn3="x" />
          <RenderCol btn0="4" btn1="5" btn2="6" btn3="-" />
          <RenderCol btn0="1" btn1="2" btn2="3" btn3="+" />
          <div className="btn-col">
            <Button buttonName="0" wide="wide" color="grey" />
            <Button buttonName="." color="grey" />
            <Button buttonName="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
