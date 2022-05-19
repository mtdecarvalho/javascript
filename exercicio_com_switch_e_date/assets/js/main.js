
//                  MINHA SOLUÇÃO

const header = document.querySelector('.container h1');
const data = new Date();

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function getDiaDaSemana(num){
    const diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira',
            'Quinta-feira', 'Sexta-feira', 'Sábado'];

    return diaSemana[num];
}

function getMes(num){
    const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
            'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return meses[num];
}

function gerarData(){
    const diaSemana = getDiaDaSemana(data.getDay());
    const mes = getMes(data.getMonth());

    const dia = zeroAEsquerda(data.getDate());
    const ano = data.getFullYear();
    const hr = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());

    return `${diaSemana}, ${dia} de ${mes} de ${ano} ${hr}:${min}`
}

header.innerHTML = gerarData();

//      SOLUÇÃO USANDO A DOCUMENTAÇÃO COMO BASE
// const header = document.querySelector('.container h1');
// const data = new Date();

// header.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'short', })