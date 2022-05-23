// --> MINHA SOLUÇÃO <--

// function criarElemento(tag) {
//     const elemento = document.createElement(tag);
//     return elemento;
// }

// const elementos = [
//     {tag: 'p', texto: 'Frase 1'},
//     {tag: 'div', texto: 'Frase 2'},
//     {tag: 'footer', texto: 'Frase 3'},
//     {tag: 'section', texto: 'Frase 4'}
// ];

// const container = document.querySelector('.container');
// const div = document.createElement('div');
// container.appendChild(div);

// for (let i = 0 ; i < elementos.length ; i++) {
//     const elemento = criarElemento(elementos[i]['tag']);
//     elemento.innerHTML = elementos[i]['texto'];
//     div.appendChild(elemento);
// }

// --> SOLUÇÃO PROPOSTA DO CURSO <--

const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0 ; i < elementos.length ; i++) {
    let { tag, texto } = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoNode = document.createTextNode(texto);
    tagCriada.appendChild(textoNode);
    // tagCriada.innerHTML = texto;
    // tagCriada.innerText = texto;

    div.appendChild(tagCriada);
}

container.appendChild(div);