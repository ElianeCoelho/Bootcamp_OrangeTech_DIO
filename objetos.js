class Pessoa {
    nome = 'luiz';
    idade = 25;

    descrever() {
        console.log(`Meu nome é ${this.nome}`);
        console.log(`${this.idade}`);
        console.log(`${this.nome}`);
    }
}
const pessoa = new Pessoa();
pessoa.descrever();

//EXERCÍCIOS

/* 1 - Crie uma classe para representar carros.
Os Carros possuem uma marca, uma cor e uma gasto médio de combustível por Quilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível, mostre em
reais o valor que será gasto.
*/
class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoViagem(kmViagem, precoCombustivel) {
        return kmViagem * this.gastoMedioPorKm * precoCombustivel;
    }

}


const carroUm = new Carros('Uno', 'Branco', 1 / 10);
const carroDois = new Carros('Mercedes', 'Azul', 1 / 5);

console.log(carroUm.marca, 'gastará:', carroUm.calcularGastoViagem(250, 5.08), 'reais');
console.log(carroDois.marca, 'gastará:', carroDois.calcularGastoViagem(250, 5.08), 'reais');


/* 2 - crie uma classe para representar pessoas, com os seguintes atributos: 
nome, peso, altura.
Calcule o IMC: (IMC = peso / (altura * altura))
Instancie uma pessoa com nome josé, 70 kg e 1,75 de altura e calcule o IMC de josé.
*/

class Pessoas{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calculoIMC(){
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC(){
        const imc = this.calculoIMC();
        if(imc < 18.5){
            return 'abaixo do peso';    
        }else if(imc >=18.5 && imc < 25){
            return 'Peso Normal';
        }else if(imc >=25 && imc < 30){
            return 'Sobrepeso';
        }else if(imc >=30 && imc < 40){
           return'Obeso';
        }else{
           return 'Consulte Médico';
        }
    }

}
const p1 = new Pessoas('Eliane', 89, 1.76);
new Pessoas('Rafael', 15, 1.05);

console.log(p1.calculoIMC());
console.log(p1.classificarIMC());
console.log(p1.calculoIMC());
console.log(p1.classificarIMC());
