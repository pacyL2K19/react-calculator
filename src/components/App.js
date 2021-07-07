import React from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: '0',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.resultHander = this.resultHander.bind(this);
  }

  handleClick = (buttonName) => {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  };

  resultHander = (total, next) => {
    if (next) {
      return next;
    }
    return total;
  };

  render() {
    const { total, next } = this.state;
    return (
      <div>
        <Display result={this.resultHander(total, next)} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
