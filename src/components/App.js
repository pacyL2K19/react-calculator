import React, { useState } from 'react';
import calculate from '../logic/calculate';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

const App = () => {
  const state = {
    total: '0',
    next: '',
    operation: '',
  };

  const [myState, setMyState] = useState(state);

  const handleClick = (buttonName) => {
    const result = calculate(myState, buttonName);
    setMyState(result);
  };

  const resultHander = (total, next) => {
    if (next) {
      return next;
    }
    return total;
  };

  return (
    <div>
      <Display result={resultHander(myState.total, myState.next)} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default App;
