function compararNumeros(num1, num2){
    let iguais;
    if (num1 == num2){
        iguais = "São iguais";
    }
    else {
        iguais = 'Não são iguais';
    }
    let soma = num1 + num2;

    let compara10 = soma > 10 ? "A soma é maior que 10" : "A soma não é maior que 10";
    let compara20 = soma > 20 ? "A soma é maior que 20 " : "A soma não é maior que 20";

    return `A soma é ${soma}, ${iguais}, ${compara10} e ${compara20}`; 

}
console.log(compararNumeros(5,3));
console.log(compararNumeros(10,10));
console.log(compararNumeros(15,10));
console.log(compararNumeros(20,30));