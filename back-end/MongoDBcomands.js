// Para utilizar o banco
use nomeDoBanco

//cria uma coleção direto no dataBase
db.createCollection( "nomeDaColecao", { collation: { locale: "pt" } } );

// insere dados dentro da coleção
db.nomeDaColecao.insertOne( { x: 1 })

//inserindo varios dados
db.nomeDaColecao.insertMany( 
  { "chave1": "valor1"},
    { "chave2": "valor2"},
    { "chave3": "valor3"}
)

//Procurar  um dado na coleção
db.collection.findOne("chave": "valor")

//Procurar  mais dados na coleção
db.collection.find("chave": "valor")

//Procurar um ou mais dados na coleção onde:
// a query define os filtros a ser consultado
// o projection define o retorno da sua consulta
db.collection.find(query, projection)

//Para filtragem dos campos solicitados
dbdb.collection.find({}, {"chave": 1, _id:0})

// Retorna o número de documentos de uma coleção
db.collection.count()

//limitar o número de documentos retornados por uma consulta
// db.collection.find(<query>).limit(<número>)
db.bios.find().limit(5)

// deixar os resultados exibidos mais legíveis
db.bios.find().limit(5).pretty()

//determinará quantos documentos serão "pulados" antes de começar a retornar
db.bios.find().skip(2)
db.bios.find().limit(10).skip(5)

// Utilizar os operadores de comparação

// $lt ( less than , menor que, <)
db.inventory.find({ qty: { $lt: 20 } })

// $lte ( less than or equal , menor ou igual a, <=)
db.inventory.find({ qty: { $lte: 20 } })

// $gt ( greater than , maior que, >)
db.inventory.find({ qty: { $gt: 20 } })

// $gte ( greater than or equal , maior ou igual a, >=)
db.inventory.find({ qty: { $gte: 20 } })

// $eq ( equal , igual a, =)
db.inventory.find({ qty: { $eq: 20 } })

// $ne ( not equal , diferente de, !=, <>)
db.inventory.find({ qty: { $ne: 20 } })

// $in ( in , dentro de)
db.inventory.find({ qty: { $in: [ 5, 15 ] } })

// $nin ( not in , não está dentro de)
db.inventory.find( { qty: { $nin: [ 5, 15 ] } } )

{/* Utilizar os operadores lógicos */}

{/* $and ( and , se todas as condições forem verdadeiras retorna true ) */}
// { $and: [{ <expressão1> }, { <expressão2> } , ... , { <expressãoN> }] }
db.inventory.find({
  $and: [
          { price: { $ne: 1.99 } },
          { price: { $exists: true } }
      ]
  })

{/* $or ( or , se apenas uma condição for verdadeira retorna true ) */}
// { $or: [{ <expression1> }, { <expression2> }, ... , { <expressionN> }] }
db.inventory.find({ $or: [{ qty: { $lt: 20 } }, { price: 10 }] })

{/* Compor filtros avançados com */}
{/* $not ( not , inverte o resultado da expressão) */}
// { campo: { $not: { <operador ou expressão> } } }
db.inventory.find({ price: { $not: { $gt: 1.99 } } })

{/* $nor ( not or , semelhante ao or , porém trabalha com a condição false ) */}
{/* { $nor: [ { <expressão1> }, { <expressão2> }, ...  { <expressãoN> } ] } */}
db.inventory.find({ $nor: [{ price: 1.99 }, { sale: true }] })

db.filmes.find({ titulo: /i/ }); //like '%i%'
db.filmes.find({ titulo: /^Me/ }); //like 'Me%'
db.filmes.find({ titulo: /as$/ }); //like '%as' 


{/* $exists ( exists , verifica a existência de um atributo) */}
{/* Operador $exists */}
{/* { campo: { $exists: <boolean> } } */}
db.inventory.find({ qty: { $exists: true } })
db.inventory.find({ qty: { $exists: true, $nin: [ 5, 15 ] } })

{/* sort() ( sort , ordenar) */}
{/* Método sort() */}
db.colecao.find().sort({ "campo": "1 ou -1"})
db.example.find({}, { value, name }).sort({ value: -1 }, { name: 1 })

{/* Removendo documentos */}

{/* deleteOne() */}
// remove o primeiro documento da coleção inventory em que o atributo status é igual a D 
db.inventory.deleteOne({ status: "D" })

{/* deleteMany() */}
// remove todos os documentos da coleção inventory em que o atributo status é igual a A :
db.inventory.deleteMany({ status : "A" })

// Para remover todos os documentos da coleção,
// basta não passar nenhum parâmetro para o método deleteMany(
db.inventory.deleteMany({})

{/* Apagando uma coleção */}
db.nomeDaColecao.drop()

{/* Apagando um banco de dados */}

db.dropDatabase()