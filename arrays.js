//push -> insere dados na última posição
//pop -> deleta dados da ultima posição
//length -> tamanho da lista
const notas = [];
notas.push(5);
notas.push(8);
notas.push(6);
notas.push(7);
notas.push(9);
console.log('média de notas é:', (notas[0] + notas[1] + notas[2] + notas [3] + notas[4])/notas.length);


//for imprimir notas

for (let i = 0; i < notas.length; i++) {
    console.log('imprimindo notas', notas[i]);    
}

//array e for para ler array de nome
const nome = 'José Rodolfo De Jesus';

for (let index = 0; index < nome.length; index++) {
console.log(nome[index]);    
}

//calculando notas com for
const notasComFor = [];
notasComFor.push(5);
notasComFor.push(10);
notasComFor.push(10);

let somaNotasComFor = 0;
for (let i = 0; i < notasComFor.length; i++) {
    const nota = notasComFor[i];
    somaNotasComFor = nota + somaNotasComFor; 
}
const mediaComFor = somaNotasComFor/notasComFor.length;

console.log('média de notas usando estrutura for é:', mediaComFor);

//EXERCÍCIOS
//crie um programa que dado o número, imprima sua tabuada
let num = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num * i);
}

//crie um progrma que seja capaz de percorrer uma lista de numeros e
// imprima cadanúmero par encontrado.

console.log('------------ exercício dois ------------');
const numeros = [13,2, 6,7,9,5,48];

for (let i = 0; i < numeros.length; i++) {

    if(numeros[i]%2 ===0){
        console.log(numeros[i]);
    }   
}


const numerosPares =[];
for(let i = 0; i<10; i++){
    const numeroPar = i% 2 ===0;
    if(numeroPar){
        numerosPares.push(i);
        }
}
console.log(numerosPares);


const exercicio =[];
for(let i = 0; i<10;i= i+2){
  
        exercicio.push(i);
        }

console.log(exercicio);