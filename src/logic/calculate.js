import operate from './operate';

const calculate = (data, name) => {
  const { total, operation, next } = data;
  let res;

  switch (name) {
    case '+/-':
      if (total.includes('-')) {
        res = (prevState) => ({ total: (parseFloat(prevState.total) * -1).toString() });
      } else {
        res = ((prevState) => ({ total: '-'.concat(prevState.total) }));
      }
      return res;
    case 'AC':
      res = ({
        total: '0',
        next: '',
        operation: '',
      });
      return res;
    case '=':
      if (parseFloat(total, 10) !== 0 && operation !== '=' && operation !== '' && operation !== '%') {
        res = ({
          total: operate(parseFloat(total, 10), parseFloat(next, 10), operation),
          next: '',
          operation: '=',
        });
      }
      return res;
    case '+':
    case '−':
    case '/':
    case 'X':
    case '@':
      if (parseFloat(total, 10) !== 0) {
        return ({ operation: name });
      }
      break;
    case '%':
      res = ({
        total: operate(parseFloat(total, 10), '100', '%'),
        next: '',
        operation: '%',
      });
      return res;
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
    case '0':
      if (operation !== '') {
        return ((prevState) => ({ next: prevState.next + name }));
      }
      if (total === '0' && operation === '') {
        res = { total: name };
      } else if (next === '' && operation === '') {
        res = ((prevState) => ({ total: prevState.total + name }));
      }
      return res;
    case '.':
      if (operation !== '' && !next.includes('.')) {
        return ((prevState) => ({ next: prevState.next + name }));
      }
      if (total === '0' && operation === '') {
        res = ({ total: name });
      } else if (next === '' && operation === '' && !total.includes('.')) {
        res = ((prevState) => ({ total: prevState.total + name }));
      }
      return res;
    default:
      break;
  }
  return null;
};

export default calculate;
