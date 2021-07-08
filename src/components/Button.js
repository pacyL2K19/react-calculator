import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler }) => {
  const symbols = ['AC', '+/-', '%', '/', 'X', '−', '+'];
  const handleClick = (name) => {
    clickHandler(name);
  };
  return (
    name === '=' ? <div className="button button-equal" onClick={() => handleClick(name)} onKeyDown={() => handleClick(name)} tabIndex={0} role="button"><span className="text">{name}</span></div> : <div className={symbols.includes(name) ? 'symbol' : 'button'} onClick={() => handleClick(name)} onKeyDown={() => handleClick(name)} tabIndex={0} role="button"><span className="text">{name}</span></div>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
