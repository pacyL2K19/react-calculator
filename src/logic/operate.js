import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const nbrOne = Big(numberOne);
  const nbrTwo = Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '+':
      result = nbrOne.plus(nbrTwo);
      break;

    case '−':
      result = nbrOne.minus(nbrTwo);
      break;

    case 'X':
      result = nbrOne.times(nbrTwo);
      break;

    case '%':
      result = nbrOne.div(nbrTwo);
      break;

    case '÷':
      result = nbrOne.div(nbrTwo);
      break;

    case '+/-':
      result = numberTwo ? nbrTwo * -1 : nbrOne * -1;
      break;

    case 'AC':
      result = 0;
      break;

    case '.':
      result = 0.0;
      break;

    default:
      break;
  }
  return result.toString();
};

export default operate;
