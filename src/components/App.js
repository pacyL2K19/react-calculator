import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  calculate({ total: 0, operation: '+', next: 0 });
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
};

export default App;
