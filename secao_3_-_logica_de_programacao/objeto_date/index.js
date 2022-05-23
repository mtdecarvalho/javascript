// const data = new Date(0); // 01/01/1970 Timestamp unix ou écopa unix

// const tresHoras = 60 * 60 * 3 * 1000; // 60 segs * 60 segs = 1 hora * 3 = 3 horas
// const umDia = 60 * 60 * 24 * 1000; // 60 segs * 60 segs = 1 hora * 24 horas = 1 dia
// const data = new Date(0 + tresHoras - umDia);
// console.log(data.toString());

// const data = new Date(2022, 6, 31, 15, 14, 27); // a, m, d, h, M, s, ms
// const data = new Date('2022-09-04 20:20:20')
// console.log('Dia', data.getDate())
// console.log('Mes', data.getMonth() + 1) // mes começa do zero
// console.log('Ano', data.getFullYear())
// console.log('Hora', data.getHours())
// console.log('Minuto', data.getMinutes())
// console.log('Segundo', data.getSeconds())
// console.log('ms', data.getMilliseconds())
// console.log('Dia semana', data.getDay()) // 0 - domingo, 6 - sabado
// console.log(data.toString());
// console.log(Date.now())

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}` 
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);