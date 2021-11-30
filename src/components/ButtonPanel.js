import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const RenderCol = (props) => {
  const {
    btn0, btn1, btn2, btn3,
  } = props;
  return (
    <div className="btn-col">
      <Button buttonName={btn0} color="grey" />
      <Button buttonName={btn1} color="grey" />
      <Button buttonName={btn2} color="grey" />
      <Button buttonName={btn3} />
    </div>
  );
};

RenderCol.propTypes = {
  btn0: PropTypes.string.isRequired,
  btn1: PropTypes.string.isRequired,
  btn2: PropTypes.string.isRequired,
  btn3: PropTypes.string.isRequired,
};

export default RenderCol;
