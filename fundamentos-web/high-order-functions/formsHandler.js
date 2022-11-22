// O truque é o seguinte:
// Dê a cada elemento um nome que seja igual à respectiva chave no estado do componente
// No handler, recupere a partir do parâmetro event o nome do componente que disparou o evento e o valor associado ao disparo.
// Interpole o nome do componente como chave do estado numa sintaxe como a acima.

handleChange ({ target }) {
  const { name } = target;
  const value = target.type === 'checkbox' ? target.checked : target.value;

  this.setState({
    [name]: value,
  });
}

function lotery() {
  let result = [];
  for (let i = 1; i <= 6; i++) {
    result.push(Math.floor(Math.random() * 60));
  }

  return result
}


console.log(lotery());