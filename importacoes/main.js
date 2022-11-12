//const funcoes = require ('./funcoes-auxiliares');
//destruct na importação
const {gets, print, getExercicio} = require ('./funcoes-auxiliares');
print('eliane');

/*console.log(funcoes);
console.log(funcoes.gets());
funcoes.print('eu sou demais!');
//como criar objetos
const pessoa ={
    nome: 'Joaquim'
};

//const {nome} = pessoa;

const nome = pessoa.nome;
console.log(nome);
*/

/*EXERCICIOS
1. Uma sala contém 5 alunos e para cada aluno foi sorteado um número de 1 -100
Faça um programa que receba os 5 números sorteados e mostre o maior número sorteado.
DADOS DE ENTRADA
5
50
10
90
23
SAÍDA ESPERADA
90
*/
const quantidadeDeAlunos = getExercicio();
let numeroMaior = 0;

for (let i = 0; i < 5; i++) {
   const numero = getExercicio();  
   //console.log(numero);    
    if(numero > numeroMaior){
        numeroMaior = numero;
        } 
    }
    
    
    console.log('Resultado Exercício maior número:', numeroMaior);


