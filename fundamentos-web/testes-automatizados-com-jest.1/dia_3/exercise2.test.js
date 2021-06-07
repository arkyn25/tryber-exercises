const number = require('./exercise1');

test('testando numero aleatorio e se foi chamado', () => {
  number.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(number.randomNumber(8, 4)).toBe(2);
  expect(number.randomNumber).toHaveBeenCalled();
  expect(number.randomNumber).toHaveBeenCalledWith(8, 4);
})