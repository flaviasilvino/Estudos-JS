// Declaração de função (Function Hoisting)
function FalaOi() {
    console.log('Oie');
}
FalaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function 
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar(){
        console.log('Estou falando...');
    }
};
obj.falar();