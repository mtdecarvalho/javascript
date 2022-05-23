let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// minha solução
// const varATemp = varA;

// varA = varB;
// varB = varC;
// varC = varATemp;

// solução mais eficiente proposta pelo curso

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC);