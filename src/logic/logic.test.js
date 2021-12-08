import calculate from './calculate';

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

describe('Any number button should append the number to next', () => {
  const object = {
    total: null,
    next: '15',
    operation: null,
  };
  test('all values of the object should be null', () => {
    expect(calculate(object, '+')).toEqual({ total: '15', next: null, operation: '+' });
  });
});
