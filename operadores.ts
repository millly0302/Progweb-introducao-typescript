//===  OPERADORES ===//

let A: number = 10;
let B: number = 5;

//Aritméticos\\

console.log("soma = ", A + B);
console.log("subtração = ", A - B);
console.log("multiplicação = ", A * B);
console.log("divisão = ", A / B);
console.log("resto = ", A % B);
console.log("potencia = ", A ** B);

//Relacionais\\
console.log("Igual = ", A == B);
console.log("diferente = ", A != B);
console.log("maior = ", A > B);
console.log("maior ou igual = ", A >= B);
console.log("menor = ", A < B);
console.log("menor ou igual = ", A <= B);

//Indentidade estrita\\
     
console.log("indentico = ", A === B);
console.log(" não indentico = ", A !== B);

//Lógicos\\
let x: boolean = true;
let y: boolean = false;

console.log("AND", x && y);
console.log("OR", x || y);
console.log("NOR", !x);

//operador condicional (ternario)\\

let idade: number = 17;
let acesso = idade >= 18 ? "pode beijar na boca" : "não pode"; // valor if true or vallr if false
