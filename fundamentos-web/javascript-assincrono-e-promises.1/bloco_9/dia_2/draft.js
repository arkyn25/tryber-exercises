const fetchPromise = () => {
  const promises = new Promise((resolve, reject) => {
    const arrays = Array.from(
      { length: 10 },
      () => Math.floor(Math.random() * 50) + 1
    );
    const soma = arrays.map(number => number * number).reduce((number, acc) => number + acc, 0);
    (soma < 8000) ? resolve(soma) : reject();
  });

  promises.then(soma => [2, 3, 5, 10].map(number => soma / number)).catch(() =>
  console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  );
}

fetchPromise();

