/*
FALSY VALUES -> valores que retornam false em JS.
false
0
'' "" ``
null / undefined
NaN

console.log('Luiz' && 'Maria')
Usando de exemplo a linha acima, como nenhum dos valores passados é falso,
será retornado então o último valor percorrido, que nesse caso é Maria.

console.log('Luiz' && undefined && 'Maria')
Já nesta linha undefined é uma falsy value, logo o que será retornado ao rodar essa linha será o undefined.
*/


// function falaOi(){
//     return 'Oi';
// }

// let vaiExecutar = 'Joaozinho'

// console.log(vaiExecutar && falaOi());


console.log(0 || false || null || 'Matheus' || true);

const corUsuario = null;
const corPadrao = corUsuario || 'preto'; // uma forma mais eficiente de substituir if e else.

console.log(corPadrao)