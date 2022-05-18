let umaString = 'Um texto';

console.log(umaString[5]);
console.log(umaString.charAt(5));

console.log(umaString.concat(' ', 'sei la'));

console.log(umaString.indexOf('texto'));
console.log(umaString.indexOf('Texto'));
console.log(umaString.indexOf('o', 7));

console.log(umaString.indexOf('t'));
console.log(umaString.lastIndexOf('t'));

let outraString = 'O rato roeu a roupa do rei de roma.';

console.log(outraString.match(/[a-z]/g));
console.log(outraString.search(/r/));
console.log(outraString.replace(/r/, '#'));
console.log(outraString.replace(/r/g, '#'));

console.log(outraString.length);
console.log(outraString.length - 3);

console.log(outraString.slice(2, 5));
console.log(outraString.slice(2, 6));
console.log(outraString.slice(-5, outraString.length -1));
console.log(outraString.substring(outraString.length - 5, outraString.length - 1));

console.log(outraString.split(' ', 2));

console.log(outraString.toUpperCase());
console.log(outraString.toLowerCase());