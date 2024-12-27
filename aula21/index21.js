/*
Operadores de comparação:
> maior que 
>= maior que ou igual a 
< menor que 
<= menor que ou igual 
== igualdade (valor) - Não utilizado!
=== igualdade estrita (valor e tipo)
!= diferente (valor) - Não utilizado!
!== diferente estrito (valor e tipo)
*/

// const comp = 10 > 5;
// console.log(comp); // Maior que 

// const comp = 10 >= 10;  // Maior ou igual = só UM precisa ser verdade para retornar true. 
// console.log(comp);

// const comp = 10 < 5;
// console.log(comp); // Menor que

/* const num1 = 10;  // Podemos usar variáveis assim...
const num2 = 11;
const comp = num1 <= num2;  // Menor ou igual = só UM precisa ser verdade para retornar true.
console.log(comp);
*/

/* const num1 = 10;
const num2 = 10;
const comp = num1 == num2;  // Igualdade: O número um é =igual= ao número 2 ?
console.log(comp);
*/

/* const num1 = 10; // number (valor)
const num2 = '10'; // string (tipo)
const comp = num1 === num2;  // Igualdade estrita: vai checar tanto o valor quanto o tipo.
console.log(comp);
*/

/* const num1 = 10;
const num2 = '10';
const comp = num1 != num2;  // Diferente: Vai checar se as duas variáveis são diferentes ou não.
console.log(comp);
*/

const num1 = 10; // number (valor)
const num2 = '10'; // string (tipo)
const comp = num1 !== num2;  // Diferente estrito: Vai checar se as duas variáveis são diferentes ou não, valor e tipo.
console.log(comp);
