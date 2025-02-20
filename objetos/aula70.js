/*const pessoa1 = new Object();
pessoa1.nome = 'Ana';
pessoa1.sobrenome = 'Oliveira';
pessoa1.idade = 22;
pessoa1.falarNome = function() {
    return (`${this.nome} está falando seu nome.`);
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

for (let chave in pessoa1) {
    console.log(pessoa1[chave]);
}
*/

// Factory functions / Constructor functions / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        }
    };
}

const p1 = criaPessoa('Ana', 'Flávia');
console.log(p1.nomeCompleto());
