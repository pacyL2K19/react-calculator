import operate from './operate';

const operations = ['+', '−', '×', '÷', '%', 'AC', '=', '+/-', '.'];

const calculate = (data, buttonName) => {
  const { total, operation, next } = data;
  let totalGen;
  if (operations.includes(buttonName)) {
    totalGen = operate(total, next, buttonName);
    return { totalGen, next, buttonName };
  }
  const newNext = buttonName;
  return { total, newNext, operation };
};

export default calculate;
