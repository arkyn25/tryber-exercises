function calculator(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a  !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
      reject('Informe apenas numeros')
    }
      const result = (a + b) * c ;
    
    if (result < 50) {
      return reject(new Error("Valor muito baixo"))
    }

    if (result > 50) return resolve(result);
  })
  return promise;
}

// calculator(10, 10, 10)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`error: ${err}`));

// calculator(4, 5, 'b')
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`error: ${err}`));

// calculator(2, 1, 3)
//   .then(result => console.log(`sucesso: ${result}`))
//   .catch(err => console.log(`error: ${err}`));



function randomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

function callback() {
  const a = randomNumber();
  const b = randomNumber();
  const c = randomNumber();

  calculator(a, b, c)
  .then(result => console.log(`sucesso: ${result}`))
  .catch(err => console.log(`error: ${err}`));
}

callback();
