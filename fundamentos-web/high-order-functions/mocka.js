function randomRgbColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
module.exports = { randomRgbColor };

// Fazendo o teste para saber se a função é chamada, temos:

const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

// vamos utilizar o jest.fn() para testar a chamada dessa função:
const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Queremos saber se ela foi chamada e ponto final.
  service.randomRgbColor = jest.fn();

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
});

const service = require('./service');

test("#randomRgbColor", () => {
  // testando se a função foi chamada e qual seu retorno
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255, 255, 255)");

  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
  expect(service.randomRgbColor()).toBe("rgb(255, 255, 255)");
});