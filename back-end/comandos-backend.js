Comandos mais comuns
1. Por convenção, utilizamos as palavras chave do SQL em caixa alta para diferenciar das indicações de tabelas e colunas. Ah, é fundamental utilizar o ; (ponto e vírgula) ao final de cada comando SQL, caso contrário ele não irá funcionar.
1. O comando USE serve pra definir a referência do banco de dados que será utilizado na query :

USE nome_do_banco_de_dados_que_quero_conectar;
-- EX: USE trybe;

1.1 Uma outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela :

SELECT * FROM banco_de_dados.tabela;
-- EX: SELECT * FROM trybe.students;

2. Para retornar todas as tabelas inicializadas no seu server:
SHOW TABLES;

3. Visualizar estrutura de uma tabela:
DESCRIBE nome_da_tabela;
-- EX: DESCRIBE students;

4. Criar um banco de dados:

// CREATE DATABASE nome_do_banco_de_dados;
// -- EX: CREATE DATABASE trybe;

// DDL : Data Definition Language - todos os comandos que lidam com o esquema, a descrição e o modo como os dados devem existir em um banco de dados:
// CREATE : Para criar bancos de dados, tabelas, índices, views, procedures, functions e triggers
// ALTER : Para alterar a estrutura de qualquer objeto
// DROP : Permite deletar objetos
// TRUNCATE : Apenas esvazia os dados dentro de uma tabela, mas a mantém no banco de dados
// DML : Data Manipulation Language - Comandos que são usados para manipular dados. São utilizados para armazenar, modificar, buscar e excluir dados em um banco de dados. Os comandos e usos mais comuns nesta categoria são:
// SELECT : usado para buscar dados em um banco de dados
// INSERT : insere dados em uma tabela
// UPDATE : altera dados dentro de uma tabela
// DELETE : exclui dados de uma tabela
// DCL : Data Control Language - Focado mais nos comandos que concedem direitos, permissões e outros tipos de controle ao sistema de banco de dados.
// GRANT : concede acesso a um usuário
// REVOKE : remove acessos concedidos através do comando GRANT
// TCL : Transactional Control Language - Lida com as transações dentro de suas pesquisas.
// COMMIT : muda suas alterações de temporárias para permanentes no seu banco de dados
// ROLLBACK : desfaz todo o impacto realizado por um comando
// SAVEPOINT : define pontos para os quais uma transação pode voltar. É uma maneira de voltar para pontos específicos de sua query
// TRANSACTION : comandos que definem onde, como e em que escopo suas transações são executadas