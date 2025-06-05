//=== Tipos em typescript ===//

let nuum: number = 1; //! muda durante o codigo
const num2: number = 2; //! não muda durante a rodagem do codigo

//tipos primitivos\\
let texto: string = "hello wolrd";
let numero: number = 17;
let ativo: boolean = true;


//Array\\
let numeros: number[] = [1,2,3]
let palavras: Array<string> = ["Beringela", "Abobora"]


//Tupla\\
let pessoa: [string,number] = ["Joao" , 15]


//Enum\\
enum Cores{
        verde,
        azul,
        vermelho,
        preto

}

let corFavorita: Cores = Cores.preto;

//Any (Sempre evitar) quando for receber um dado aleatorio\\
let dadoaleatorio: any = 5;
dadoaleatorio = "txt";
dadoaleatorio = false;

//Unknown (Tipo mais seguro)\\
let dadoDesconhecido: unknown = 10;

//Void\\
function mostrarAlerta() : void{
    console.log("Alerta de terremoto");
}

//Null\\
let nada: null = null;
let indefinido: undefined = undefined;

//Never (usado quando a função nunca retorna, usado em tratamento de erros)\\
function erroFatal(mesagem:string) : never{
        throw new Error(mesagem)
}


//Aliases\\
type Usuario = {
    nome: string;
    idade: number;

}
let usuario1: Usuario = {nome: "João", idade : 15}