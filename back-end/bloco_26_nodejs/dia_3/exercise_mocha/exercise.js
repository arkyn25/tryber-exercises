const fs = require('fs');

// Exercício 1 : Estruture os testes utilizando mocha e chai para um função que irá dizer se um número é "positivo", "negativo" ou "neutro":
// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";
// Descreva todos os cenário de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se os retornos de cada cenário tem o tipo e o valor esperado.
// Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number .
// Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
// Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
// Implemente em sua função tal validação para que o teste passe.

function testNumber(number) {
  if(typeof number !== 'number') {
    return 'o parametro deve ser um numero'
  }

  if (number > 0) {
    return 'positivo'
  }

  if (number < 0) {
    return 'negativo'
  }

  return 'neutro';
}

testNumber()



function escrevaArquivo(nomeDoArquivo, conteudoDoArquivo) {
  fs.writeFileSync(`./${nomeDoArquivo}`, conteudoDoArquivo);
  
  return 'ok'
}

module.exports = {testNumber, escrevaArquivo }