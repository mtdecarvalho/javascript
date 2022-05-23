const paragrafos = document.querySelector('.paragrafos');
const ps = document.querySelectorAll('.paragrafos p');

const estilosBody = getComputedStyle(document.body);
// seleciona tudo de css que foi computado pelo navegador do body
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = '#FFFFFF';
    // color -> cor do texto
}
