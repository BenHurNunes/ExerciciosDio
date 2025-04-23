function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtracao (-)\n 3 - Multiplicacao (*)\n 4 - Divisao (/)\n 5 Divisao inteira (%)\n 6 - potenciacao (**)"));

    if (operacao < 1 || operacao > 6) {
        alert("Operação inválida! Tente novamente.");
        calculadora();
        return;
        
    } else {let n1 = Number(prompt("Digite o primeiro valor: "));
        let n2 = Number(prompt("Digite o segundo valor: "));
        let resultado;
        
        function soma(params) {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
        }
        function subtracao(params) {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
        }
        function multiplicacao(params) {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
        }
        function divisao(params) {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
        }   
        function divisaoInteira(params) {
            resultado = n1 % n2;
            alert(`${n1} % ${n2} = ${resultado}`);
        }
        function potenciacao(params) {
            resultado = n1 ** n2;
            alert(`${n1} ** ${n2} = ${resultado}`);
        }
        
        function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");
            if (opcao == 1){
                calculadora();
            }else if(opcao == 2){
                alert("Até mais!");
            }else{
                alert("Digite uma opção válida!");
                novaOperacao();
            }
        }
        
        if (operacao == 1){
            soma();
        }
        if (operacao == 2){
            subtracao();
        }       
        if (operacao == 3){
            multiplicacao();
        }   
        if (operacao == 4){
            divisao();
        }
        if (operacao == 5){
            divisaoInteira();
        }
        if (operacao == 6){
            potenciacao();
        }
    }
}
calculadora();
