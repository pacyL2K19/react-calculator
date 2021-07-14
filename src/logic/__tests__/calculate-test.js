import calculate from '../calculate';

describe('all calculator buttons works correctly', () => {
  it('click of any button should display the correct number', () => {
    const data = { total: '0', operation: null, next: null };
    expect(calculate(data, '5').total).toBe('5');
  });

  it('click of any button should display the correct number', () => {
    const data = { total: '0', operation: null, next: null };
    expect(calculate(data, '5').total).not.toBe('6');
  });

  it('AC resets calculator state', () => {
    const data = { total: '3', operation: '+', next: '3' };
    expect(calculate(data, 'AC')).toEqual({ total: '0', next: null, operation: null });
  });

  it('AC resets calculator state', () => {
    const data = { total: '3', operation: '+', next: '3' };
    expect(calculate(data, 'AC')).not.toEqual({ total: 0, next: null, operation: null });
  });

  it('+/- clicked', () => {
    const data = { total: '9', operation: '+/-', next: null };
    expect(calculate(data, '+/-')).toEqual({ total: -9, next: null, operation: null });
  });

  it('+/- clicked', () => {
    const data = { total: '9', operation: '+/-', next: null };
    expect(calculate(data, '+/-')).not.toEqual({ total: 9, next: null, operation: null });
  });

  it('% clicked', () => {
    const data = { total: '6', operation: '%', next: null };
    expect(calculate(data, '%')).toEqual({ total: '6', next: '0.06', operation: '%' });
  });

  it('÷ clicked', () => {
    const data = { total: '6', operation: '÷', next: '2' };
    expect(calculate(data, '÷')).toEqual({ total: '6', next: '2', operation: '÷' });
  });

  it('X symbol clicked', () => {
    const data = { total: '6', operation: 'X', next: '2' };
    expect(calculate(data, 'X')).toEqual({ total: '6', next: '2', operation: 'X' });
  });

  it('X clicked', () => {
    const data = { total: '6', operation: 'X', next: '2' };
    expect(calculate(data, 'X')).not.toEqual({ total: '12', next: '2', operation: 'X' });
  });

  it('− symbol clicked', () => {
    const data = { total: '12', operation: '−', next: '2' };
    expect(calculate(data, '−')).toEqual({ total: '12', next: '2', operation: '−' });
  });

  it('+ clicked', () => {
    const data = { total: '120', operation: '+', next: '20' };
    expect(calculate(data, '+')).toEqual({ total: '120', next: '20', operation: '+' });
  });

  it('should return the real value for total and null for next and operation', () => {
    const data = { total: '20', next: '4', operation: '+' };
    expect(calculate(data, '=')).toEqual({ total: '24', next: null, operation: null });
  });

  it('should return the same result if next contains .', () => {
    const data = { total: '6', next: '3.', operation: '+' };
    expect(calculate(data, '.')).toEqual({ total: '6', next: '3.', operation: '+' });
  });

  it('should add a . to the total value if both next and operation are null', () => {
    const data = { total: '5', next: null, operation: null };
    expect(calculate(data, '.')).toEqual({ total: '5.', next: null, operation: null });
  });

  it('should add a . to the next value', () => {
    const data = { total: '5', next: '4', operation: '+' };
    expect(calculate(data, '.')).toEqual({ total: '5', next: '4.', operation: '+' });
  });
});
