// IIFE - Immediately invoked function expression 
// Expressão de função invocada imediatamente
// Diferente da função normal, essa função funciona em parenteses ()!

(function(idade, peso, altura) {

    const sobrenome = "Silvino";
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

function falaNome() {
    console.log(criaNome('Ana'));
}
falaNome();
console.log(idade, peso, altura);
})(22, 64, 1.59);