// Aula
let variavel = 10 / 10;

console.log(variavel);

/*desafio desta aula
faça um programa para calcular o valor de combustível gasto em uma viagem.
você terá três variáveis
 */

const precoEtanol = 3.99;
const precoGasolina = 5.79;
const consumoLitroGasolina = 10;
const consumoLitroEtanol = 8;
const kmPercorrido = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidosEtanol = kmPercorrido / consumoLitroEtanol;
const litrosConsumidosGasolina = kmPercorrido / consumoLitroGasolina;

if (tipoCombustivel === 'Gasolina') {

    const gastoTotal = litrosConsumidosEtanol * precoEtanol;
    console.log(gastoTotal.toFixed(2));

} else {
    const gastoTotal = litrosConsumidosGasolina * precoGasolina;
    console.log(gastoTotal.toFixed(2));
}

//Questionário
/*Tendo em vista o código abaixo, qual seria o 
    resultado esperado da sua execução no terminal?*/
const nomeDoProfessor = 'Renan Johannsen de Paula';
console.log(nomeDoProfessor);

//corrigindo exercício:constantes não permitem alteração do valor atribuído.
const nomeDoProfessor1 = 'Vitor Johansen Guerra';
console.log(nomeDoProfessor);



//testando para responder questionário
const numero = 5 + 1;

if (numero % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número ímpar');
}



const num = 10;
const numeroEmTexto = '10';
console.log(numero === numeroEmTexto);

/*Tendo em vista o código abaixo, qual seria o 
resultado esperado da sua execução no terminal?*/

let nomeDoAluno = 'Renan Johannsen de Paula';
console.log(nomeDoAluno);

nomeDoAluno = 'Vitor Johansen Guerra';
console.log(nomeDoAluno);

/*Estruturas condicionais permitem que um programa execute 
diferentes comandos de acordo com as condições estabelecidas.
Mediante o código abaixo qual é o resultado esperado de sua execução 
pelo terminal?*/


const numero3 = 10;

if (numero3 >= 10) {
    console.log('Sucesso demais!');
}


