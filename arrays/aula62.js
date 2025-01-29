// Índice        0        1        2         3
// const nomes = ['Ana', 'Flávia', 'Edson', 'Fernando'];

const nomes = new Array('Ana', 'Flávia', 'Fernando');
nomes[2] = 'Edson';
delete nomes[2];
console.log(nomes);