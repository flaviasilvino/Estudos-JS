const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Clique no iniciar.';
});

pausar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Clique no pausar.';
});

zerar.addEventListener('click', function(event) {
    relogio.innerHTML = 'Clique no zerar.';
});
