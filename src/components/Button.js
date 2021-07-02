import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <div>{this.props.name}</div>

    );
  }
}

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
