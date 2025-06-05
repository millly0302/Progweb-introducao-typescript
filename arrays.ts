//=== Arrays e metodos de manipulaçao ===//
let notas: number[] = [6,7,8,9,3,2,7];

//forEach
//realiza a interaçao de coleções como arrays ou listas\\
notas.forEach(n => console.log('Nota:', n));

//map
//cria um novo array com os resultados da chamada de uma função para cada elemento do array original\\
let notasajustadas: number[] = notas.map(n => n + 0.5);

//filter
//ele filtra os valores de um array com base de uma condiçao fornecida \\
let Aprovadas = notas.filter(n => n >= 6);

//push
//adiciona um ou mais elementos ao final de um array e retorna o novo comprimento do array\\
notas.push(10);//adiciona um elemento ao final do array
notas.pop();//remove o último elemento do array e retorna esse elemento

//unshift
//adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array\\
notas.unshift(5);//adiciona um elemento ao início do array

//shift 
//remove o primeiro elemento de um array e retorna esse elemento\\
notas.shift();//remove o primeiro elemento do array

//splice
//altera o conteúdo de um array removendo ou substituindo elementos existentes e/ou adicionando novos elementos no lugar\\
notas.splice(2, 1, 7.5); //remove o elemento na posição 2 e adiciona o elemento 7.5

//concat
//é usado para unir dois ou mais arrays. Este método não altera os arrays existentes, mas retorna um novo array\\
let notas2: number[] = [10, 9, 8];
let todasAsNotas: number[] = notas.concat(notas2); //une os dois arrays

//includes
//verifica se um array contém um determinado elemento, retornando true ou false conforme o caso\\
let temNota5: boolean = notas.includes(5); //verifica se o array contém o elemento 5

//indexOf
//retorna o primeiro índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente\\
let indiceNota7: number = notas.indexOf(7); //retorna o índice do elemento 7 no array, ou -1 se não estiver presente

//lastIndexOf
//retorna o último índice em que um determinado elemento pode ser encontrado no array, ou -1 se não estiver presente\\
let ultimoIndiceNota7: number = notas.lastIndexOf(7); //retorna o último índice do elemento 7 no array, ou -1 se não estiver presente

//sort
//ordena os elementos de um array in-place e retorna o array ordenado. A ordenação é feita de acordo com a conversão dos elementos para strings\\
notas.sort((a, b) => a - b); //ordena o array em ordem crescente

//reverse
//inverte a ordem dos elementos de um array in-place e retorna o array invertido\\
notas.reverse(); //inverte a ordem dos elementos do array

//slice
//retorna uma cópia superficial de uma parte de um array em um novo array selecionado do início até o final (fim não incluído)\\
let notasSlice: number[] = notas.slice(1, 4); //retorna uma cópia do array do índice 1 ao 3 (4 não incluído)