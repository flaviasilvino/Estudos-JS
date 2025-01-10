// Capturar evento de submite de formulário

const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento previnido.');
    setResultado('Olá!');
});

function setResultado (msg) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = `<p>${msg}</p>`;
}