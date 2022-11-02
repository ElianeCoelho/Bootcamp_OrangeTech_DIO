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

