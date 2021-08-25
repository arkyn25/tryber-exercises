const readline = require('readline-sync');

function calculaVelocidade() {
  const distancia = readline.questionInt('Distancia: ');
  const tempo = readline.questionInt('tempo: ');

  const velocidade = (distancia / tempo).toFixed(2);

  console.log(`Velocidade: ${velocidade} m/s`);
}

calculaVelocidade();