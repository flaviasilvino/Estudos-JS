function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {  // Essa função para a execução do codigo anterior e executa o seu próprio por um tempo determinado.
    clearInterval(timer);
}, 10000); // 10 segundos!

setTimeout(function () {  // Essa função também pode imprimir uma mensagem quando atinge determinado tempo. 
    console.log('Olá mundo!');
}, 5000);
