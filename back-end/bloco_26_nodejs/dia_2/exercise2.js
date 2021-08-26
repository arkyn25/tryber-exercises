const fs = require('fs').promises;

// Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .

function readSimps() {
  return fs.readFile('./simpsons.json', 'utf-8')
    .then((fileName) => {
      return JSON.parse(fileName);
    })
    .then((simpsons) => {
      return simpsons.map(({id, name}) => `${id} - ${name}`)
    })
    .then((str)=> {
      str.forEach((key) => console.log(key))
    })
}

readSimps();
// // Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".

async function getSimpsons(id) {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
  .then((fileName) => JSON.parse(fileName));

  const findId = simpsons.find((simps) => simps.id === id)

  if (findId) {
    throw new Error('id nao encontrado')
  }
  return findId
}

getSimpsons(3);

// // Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function removeSimpsons() {
  const simpsons = await fs.readFile('./simpsons.json', 'utf-8')
  .then((fileName) => JSON.parse(fileName));
  
  const removeSimpsons = simpsons.filter(simp => simp.id !== '10' && simp.id !== '6')
  await fs.writeFile('./simpsons.json', JSON.stringify(removeSimpsons));
}

removeSimpsons();


// Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
async function createSimpsonsFamily() {
  const simpsons = await fs
    .readFile('./simpsons.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    const simpsonsFamily = simpsons.filter(simpson => [1, 2, 3, 4].includes(simpson.id));

    await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}


// Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
async function addNelsonToFamily() {
  const simpsonsFamily = await fs
    .readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent));

    simpsonsFamily.push({ "id": "8","name": "Nelson Muntz" });
    await fs.writeFile('./simpsonsFamily.json', simpsonsFamily);
}

// Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json .
// Importamos o módulo de promises do fs
function replaceNelson () {
  // Realizamos a leitura do arquivo
  return fs.readFile('./simpsonsFamily.json', 'utf-8')
    // Interpretamos o conteúdo como JSON
    .then((fileContent) => JSON.parse(fileContent))
    // Filtramos o array para remover o personagem Nelson
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    // Criamos um novo Array contendo a personagem Maggie
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ id: '8', name: 'Maggie Simpson' }]))
    // Escrevemos o novo array no arquivo
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}