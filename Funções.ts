//===Funções===//

//funçao tradicional\\

function saudacao(nome: string): string {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Camilly"));

// Arrow function\\

const Soma = (x: number, y: number): number => x + y;
console.log('soma:',Soma(2, 3));

//funcao com valor padrao\\
function Mensagem(texto: string = 'bem vindo(a)!'){
    console.log(texto);
}

//Funçao com parametros opcionais\\
function apresentar(nome?: string): void {
    if (nome) {
        console.log(`Olá, ${nome}!`);
    } else {
        console.log("Olá, visitante!");
    }
} 
