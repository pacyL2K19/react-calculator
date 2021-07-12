import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, clickHandler, wide,
}) => {
  const handleClick = (name) => {
    clickHandler(name);
  };

  const colorBtn = (wideBool) => {
    if (wideBool) {
      return `${color} button-zero`;
    }
    return `${color}`;
  };

  return <div className={colorBtn(wide)} onClick={() => handleClick(name)}><span className="text">{name}</span></div>;
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: 'button btn-primary',
  wide: false,
};

export default Button;