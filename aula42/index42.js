// Escreva uma função chamada ePaisagem
// que recebe dois argumentos, largura e altura
// de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

function ePaisagem (largura, altura) { // A função recebe dois argumentos.

    if (largura > altura){ // A função retorna true se a condição está dentro dos parâmetros. 
        return true;
    } else {               // Retorna falso se não estiver dentro dos parâmetros.
        return false;
    }
}
console.log(ePaisagem(1920, 1080)); // O resultado é imprimido aqui, de acordo com o valor que recebe.
