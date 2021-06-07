const number = require('./exercise1');

describe('testando mutiplicacao de 3 parametros', () => {
  test('testando numero aleatorio e se foi chamado', () => {
    number.randomNumber = jest.fn().mockImplementationOnce((a, b, c) => a * b * c);
  
    expect(number.randomNumber(2, 2, 2)).toBe(8);
    expect(number.randomNumber).toHaveBeenCalled();
    expect(number.randomNumber).toHaveBeenCalledWith(2, 2, 2);
  });

  test('testando seu dobro', () => {
    number.randomNumber.mockReset();
    expect(number.randomNumber).toHaveBeenCalledTimes(0);

    number.randomNumber.mockImplementation(a => a * 2);

    expect(number.randomNumber(2)).toBe(4);
    expect(number.randomNumber).toHaveBeenCalled();
    expect(number.randomNumber).toHaveBeenCalledTimes(1);
    expect(number.randomNumber).toHaveBeenCalledWith(2);
  })
})
