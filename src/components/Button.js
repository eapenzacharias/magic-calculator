import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    color, wide, buttonName, clickHandler,
  } = props;
  return (
    <button onClick={() => clickHandler(buttonName)} className={`btn ${wide} bg-${color}`} type="button">
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
  wide: PropTypes.string,
  color: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: 'small',
  color: 'orange',
};

export default Button;
