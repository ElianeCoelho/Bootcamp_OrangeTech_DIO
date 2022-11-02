//function nome da função e corpo com cheves
function test(name) {
    return name * 2;
}

//usando main para todos os programas
(function() {
    console.log(test(6));
    console.log(test(9));
    console.log(test(12));
//chamando função para cálculo de IMC
console.log('-------cálculo do IMC------------');

calcularIMC(80 , 1.76);

})();

function calcularIMC(peso, altura){
    const calculoIMC = peso / Math.pow(altura, 2);
    
    if(calculoIMC < 18.5){
        let classificaIMC = 'abaixo do peso';    
    }else if(calculoIMC >=18.5 && calculoIMC < 25){
        classificaIMC = 'Peso Normal';
    }else if(calculoIMC >=25 && calculoIMC < 30){
        classificaIMC = 'Sobrepeso';
    }else if(calculoIMC >=30 && calculoIMC < 40){
        classificaIMC = 'Obeso';
    }else{
        classificaIMC = 'Consulte Médico';
    }
    console.log('seu IMC é:', calculoIMC.toFixed(2) , 'classificado como:', classificaIMC);
    
}


