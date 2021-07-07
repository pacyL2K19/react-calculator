import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const handleClick = (name) => {
    clickHandler(name);
  };
  return (
    name === '=' ? <div className="button button-equal" onClick={() => handleClick(name)}><span className="text">{name}</span></div> : <div className="button" onClick={() => handleClick(name)}><span className="text">{name}</span></div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
