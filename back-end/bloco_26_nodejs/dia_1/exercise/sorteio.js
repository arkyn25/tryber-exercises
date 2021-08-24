const readline = require('readline-sync');

function sorteio(numero, resultado) {
  if (numero !== resultado) {
    return console.log(`Opa, não foi dessa vez. O número era ${numero}`)
  }

  return console.log(`Parabéns, número correto!`);
}

function jogo() {
  const numero = parseInt(Math.random() * 10);

  const resultado = readline.questionInt('Digite um numero entre 0 e 10: ');

  sorteio(numero, resultado);

  const novamente = readline.question('Quer jogar novamente? (Digite s para sim, outro coisa para nao) ');

  if (novamente !== 's') return console.log('Ate mais!');

  jogo();
}

jogo();