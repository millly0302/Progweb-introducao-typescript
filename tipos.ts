//===TIPOS EM TIPESCRIPT===\\

//TIPOS PREMITIVOS\\
let texto: string = 'ola, mundo!';
let numero: number = 24;
let ativo: boolean = true;

//ARRAY\\
let numeros: number[] = [1, 2, 3];
let palavras: Array<string> = ["typescript", "é", "massa!"];
//TUPLAS\\
let pessoa: [string, number] = ['Camilly', 17]

//enum -- enunciado\\
enum cores {
    verde,
    azul,
    vermelho,
    roxo,
    preto
}
let corFavorita: cores = cores.preto;

//any(evitar sempre qu possivel)\\
let dadoAleatorio: any = 6;
dadoAleatorio = 'texto';
dadoAleatorio = true;

//unknow(tipo mais seguro que any)\\
let dadoDesconhecido: unknown = 10;


//void\\
function mostrarAlerta() : void{
    console.log("alerta! preste atenção")
}

//null e undefined\\
let nada: null = null;
let indefinido: undefined = undefined;

//never (usado quando a funçao nunca retorna)\\
function erroFatal("mensagem: string"): never;