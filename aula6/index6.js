let nome = 'Ana'; // Declaração da variável. 

console.log(nome, 'nasceu em 2002');
console.log('Em 2019', nome, 'conheceu Fernando');
console.log(nome, 'irá se casar com Fernando em 2027');
console.log('Fernando terá 1 filho com', nome, 'em 2029');
console.log('O filho de', nome, 'se chamará Benjamim.');

/*
Não podemos declarar ariáveis reservadas.
Exemplos:
let let 
let console
let if
let else...
*/

//Variáveis precisam ter nomes significativos, para orgaização!

let nomeCliente = 'João';
console.log(nomeCliente);

// Não pode começar o nome de variável com um número!
let no1me;

// Não pode conter espaços ou traços!
let nome-Cliente;
let nome Cliente;

// Utilizamos camelCase.
let nomeCompletoDoCliente = 'Ana Flávia';
console.log(nomeCompletoDoClient);

// As variáveis são Case-sensitive, ou seja, as letras minúsculas ou maiúsculas fazem diferença e os valores das variáveis mudam!
let nomeCliente = 'Ana';
let nomecliente = 'Flávia';
console.log(nomeCliente, nomecliente);

// Não podemos redeclarar a variável let mais de uma vez!
let nomeCliente = 'Ana';
nomeCliente = 'Flávia';
console.log(nomeCliente);

//Não utilize VAR, utilize LET!