import React from 'react';
import PropTypes from 'prop-types';

const Button = () => (
  <div>{this.props.name}</div>

);

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
