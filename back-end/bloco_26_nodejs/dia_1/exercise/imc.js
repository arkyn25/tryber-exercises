const readline = require('readline-sync');

function calculaIMC() {
const peso = readline.questionFloat('Qual seu peso?');
const altura = readline.questionInt('Qual sua altura?');

console.log(`Peso: ${peso}, Altura: ${altura}`);

const imc = (peso / Math.pow(altura / 100, 2)).toFixed(2);

console.log(`Imc: ${imc}`)

  if (imc < 18.5) {
    console.log('Situacao: Abaixo do peso(magreza)')
    return;
  }

  if (imc >= 18.5 && imc < 25) {
    console.log('Situacao: Peso normal')
    return;
  }

  if (imc >= 25 && imc < 30) {
    console.log('Situacao acima do peso (sobrepeso)');
  }

  if (imc >= 30 && imc < 35) {
    console.log('Situacao: Obesidade grau I')
    return;
  }

  if (imc >= 35 && imc < 40) {
    console.log('Situacao: Obesidade grau II')
    return;
  }

  console.log('Situacao: Obesidade graus III e IV');
}

calculaIMC();