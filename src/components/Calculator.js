import React from 'react';
import Display from './Display';
import RenderCol from './ButtonPanel';
import Button from './Button';
import calculate from '../logic/calculate';
import './style/style.scss';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: null,
      // eslint-disable-next-line react/no-unused-state
      operations: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const cal = this.state;
    this.setState(calculate(cal, buttonName));
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="container main">
        <Display value={next || total || '0'} />
        <div className="button-panel">
          <RenderCol clickHandler={this.handleClick} btn0="AC" btn1="+/-" btn2="%" btn3="÷" />
          <RenderCol clickHandler={this.handleClick} btn0="7" btn1="8" btn2="9" btn3="x" />
          <RenderCol clickHandler={this.handleClick} btn0="4" btn1="5" btn2="6" btn3="-" />
          <RenderCol clickHandler={this.handleClick} btn0="1" btn1="2" btn2="3" btn3="+" />
          <div className="btn-col">
            <Button clickHandler={this.handleClick} buttonName="0" wide="wide" color="grey" />
            <Button clickHandler={this.handleClick} buttonName="." color="grey" />
            <Button clickHandler={this.handleClick} buttonName="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
