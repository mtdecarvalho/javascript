// Escreva uma função chamada ePaisagem que recebe dois argumentos:
// largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem.

const ePaisagem = (largura, altura) => largura > altura;
//                                      retorno implícito /\

console.log(ePaisagem(1600, 900));
console.log(ePaisagem(600,900));