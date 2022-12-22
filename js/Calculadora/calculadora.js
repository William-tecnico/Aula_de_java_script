function calculadora () {
    const operacao = Number(prompt('escola uma operação: \n 1 - soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
     
    if (!operacao || operacao >= 7) {
        alert ("escolha um númeo válido")
        calculadora();
        } else {
    let n1 = Number(prompt('insira o primeiro valor:'));
    let n2 = Number(prompt('insira o segundo valor'));
    let resultado;

    if (!n1 || !n2) {
        alert ('erro - Escolha um número válido')
        calculadora();
        }else{

       
        function soma() {
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            comecarDeNovo();
        }
        function subtracao() {
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            comecarDeNovo();
        }
        function multiplicacao() {
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            comecarDeNovo();
        }
        function divisaoReal() {
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            comecarDeNovo();
        }
        function divisaoInteiro() {
            resultado = n1 % n2;
            alert(`A sobra de ${n1} e ${n2} é igual a ${resultado}`)
            comecarDeNovo();
        }
        function potenciacao() {
            resultado = n1 ** n2;
            alert(`${n1} elevado á ${n2} = ${resultado}`)
            comecarDeNovo();
        }
       
        function comecarDeNovo() {
            let opcao = prompt('Deseja fazer uma nova conta?\n escolha uma opção: \n 1 = sim \n 2 = não');
        
            if (opcao == 1) {
            calculadora();
            }else if (opcao == 2) {
            alert ('até mais')
            }else {
            comecarDeNovo();
            }
        }
    }   
}
    if (operacao == 1) {
        soma();
    } else if (operacao == 2) {
        subtracao();
    } else if (operacao == 3) {
        multiplicacao();
    } else if (operacao == 4) {
        divisaoReal();
    } else if (operacao == 5) {
        divisaoInteiro();
    } else if (operacao == 6) {
        potenciacao();
    }

}
calculadora();

