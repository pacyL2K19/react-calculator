import Big from 'big.js';

const operate = (firstNumber, secondNumber, operation) => {
  const nbrOne = Big(firstNumber);
  const nbrTwo = Big(secondNumber);
  let result = 0;

  switch (operation) {
    case '+':
      result = nbrOne.plus(nbrTwo);
      break;

    case '-':
      result = nbrOne.minus(nbrTwo);
      break;

    case 'x':
      result = nbrOne.times(nbrTwo);
      break;

    case '%':
      result = nbrOne.mod(nbrTwo);
      break;

    case '/':
      result = nbrOne.div(nbrTwo);
      break;

    case '+/-':
      result = secondNumber ? nbrTwo * -1 : nbrOne * -1;
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
  return result;
};

export default operate;
