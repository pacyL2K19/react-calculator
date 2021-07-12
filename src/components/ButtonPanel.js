import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (name) => {
    props.clickHandler(name);
  };

  // const symbols = ['AC', '+/-', '%', '/'];
  // const firstGroup = ['7', '8', '9', 'X'];
  // const secondGroup = ['4', '5', '6', '−'];
  // const thirdGroup = ['1', '2', '3', '+'];

  return (
    <div>
      <div>
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="7" color="button" clickHandler={handleClick} />
        <Button name="8" color="button" clickHandler={handleClick} />
        <Button name="9" color="button" clickHandler={handleClick} />
        <Button name="X" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="4" color="button" clickHandler={handleClick} />
        <Button name="5" color="button" clickHandler={handleClick} />
        <Button name="6" color="button" clickHandler={handleClick} />
        <Button name="−" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="1" color="button" clickHandler={handleClick} />
        <Button name="2" color="button" clickHandler={handleClick} />
        <Button name="3" color="button" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="0" wide color="button" clickHandler={handleClick} />
        <Button name="." color="button" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  clickHandler: 0,
};

export default ButtonPanel;
