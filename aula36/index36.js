// For in - Lê os índices ou chabes do objeto

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Flávia',
    idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}