import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const handleClick = (name) => {
    props.clickHandler(name);
  };

  const symbols = ['AC', '+/-', '%', '/'];
  const firstGroup = ['7', '8', '9', 'X'];
  const secondGroup = ['4', '5', '6', '−'];
  const thirdGroup = ['1', '2', '3', '+'];

  return (
    <div>
      <div>
        {
          symbols.map((btn) => (
            <Button key={btn} name={btn} clickHandler={handleClick} />
          ))
        }
      </div>
      <div>
        {
          firstGroup.map((btn) => (
            <Button key={btn} name={btn} clickHandler={handleClick} />
          ))
        }
      </div>
      <div>
        {
          secondGroup.map((btn) => (
            <Button key={btn} name={btn} clickHandler={handleClick} />
          ))
        }
      </div>
      <div>
        {
          thirdGroup.map((btn) => (
            <Button key={btn} name={btn} clickHandler={handleClick} />
          ))
        }
      </div>
      <div>
        <Button name="0" clickHandler={handleClick} />
        <Button name="." clickHandler={handleClick} />
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
