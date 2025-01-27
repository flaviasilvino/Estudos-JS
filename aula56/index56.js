// Função fábrica (Factory Functions)

function criaPessoa(nome, sobrenome, a, p) {
    return {
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const p1 = criaPessoa('Ana', 'Silvino', 1.8, 80);
console.log(p1.imc());
const p2 = criaPessoa('Fernando', 'Araujo', 1.6, 42);
console.log(p2.imc());