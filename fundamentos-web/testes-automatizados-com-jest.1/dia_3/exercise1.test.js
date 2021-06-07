const number = require('./exercise1');

test('testando numero aleatorio e se foi chamado', () => {
  number.randomNumber = jest.fn().mockReturnValue(10);

  expect(number.randomNumber()).toBe(10);
  expect(number.randomNumber).toHaveBeenCalled();
  expect(number.randomNumber).toHaveBeenCalledTimes(1);
})