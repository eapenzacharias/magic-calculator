import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('AC button should clear the object passed', () => {
  const object = {
    total: 10,
    next: null,
    operation: '+',
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, 'AC')).toEqual({ total: null, next: null, operation: null });
  });
});

describe('Any number button should append the number to next', () => {
  const object = {
    total: null,
    next: '1',
    operation: null,
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, '5').next).toEqual('15');
  });
});

describe('Adding operation', () => {
  const object = {
    total: null,
    next: '15',
    operation: null,
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, '+')).toEqual({ total: '15', next: null, operation: '+' });
  });
});

describe('Testing operations', () => {
  test('Multplication', () => {
    expect(operate(3, 2, 'x')).toEqual('6');
  });
  test('Division', () => {
    expect(operate(3, 3, '÷')).toEqual('1');
  });
  test('Division by 0', () => {
    expect(operate(3, 0, '÷')).toEqual('Can\'t divide by 0.');
  });
  test('Addition', () => {
    expect(operate(3, 2, '+')).toEqual('5');
  });
  test('Subtraction', () => {
    expect(operate(3, 2, '-')).toEqual('1');
  });
  test('Modulus', () => {
    expect(operate(3, 2, '%')).toEqual('1');
  });
  test('Modulus', () => {
    expect(operate(3, 3, '%')).toEqual('0');
  });
});
