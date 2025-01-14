// (condição) ? 'Valor para verdadeiro' : 'Valor para falso';

// Exemplo simplificado:
const pontuacaoUsuario = 999;
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = 'Pink';
const corPadrao = corUsuario || 'Preto';

console.log(nivelUsuario, corPadrao);

// Exemplo normal:
/*const pontuacaoUsuario = 3000;
if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
}
*/