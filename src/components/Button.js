import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { color, wide, buttonName } = props;
  return (
    <button className={`btn ${wide} bg-${color}`} type="button">
      {buttonName}
    </button>
  );
};

Button.propTypes = {
  buttonName: PropTypes.string,
  wide: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  buttonName: '0',
  wide: 'small',
  color: 'orange',
};

export default Button;
