function* geradora1() {
    // algum código...
    yield 'Valor 1';
    // algum código...
    yield 'Valor 2';
    // algum código...
    yield 'Valor 3';
}

console.log('GERADORA 1');
const g1 = geradora1();
for (let valor of g1) {
    console.log(valor);
}

function* geradora2() {
    let i = 0;
    while(true) {
        yield i;
        i++;
    }
}

console.log('GERADORA 2');
const g2 = geradora2();
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);

function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

console.log('GERADORA 3 E 4');
const g4 = geradora4();
for (let valor of g4) {
    console.log(valor);
}


console.log('GERADORA 5');
function* geradora5() {
    yield function() {
        console.log('Vim do y1');
    }
    // algum codigo...

    yield function() {
        console.log('Vim do y2');
    }
}
const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();