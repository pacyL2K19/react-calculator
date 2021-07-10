import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler, color, wide,
}) => {
  const handleClick = (name) => {
    clickHandler(name);
  };
  const addClass = () => {
    if (wide) return 'button-zero';
    return '';
  };
  return (
    name === '=' ? <div className="button" onClick={() => handleClick(name)} onKeyDown={() => handleClick(name)} tabIndex={0} role="button"><span className="text">{name}</span></div> : <div className={color ? 'symbol' : `button ${addClass()}`} onClick={() => handleClick(name)} onKeyDown={() => handleClick(name)} tabIndex={0} role="button"><span className="text">{name}</span></div>
  );
};

Button.defaultProps = {
  wide: false,
  color: '',
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

export default Button;
