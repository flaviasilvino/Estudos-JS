// Continue - continua para o próxima iteração.
// Break - sai do laço.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros){
    if (numero == 2){
        i++;
        continue;
    }
    if (numero === 7){
        i++;
        break;
    }
    console.log(numero);
}