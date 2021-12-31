function calculadora () {
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real(/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));

    if(operacao >= 7) {
        alert("ERRO! Operação selecionada inválida.");
        calculadora();
    }
    let n1 = Number(prompt("Insira o primeiro valor: "));
    let n2 = Number(prompt("Insira o segundo valor: "));
    let resultado;

    function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOpcao();
    }

    function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOpcao();
    }

    function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
        novaOpcao();
    }

    function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
        novaOpcao();
    }

    function divisaoInteiro() {
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
        novaOpcao();
    }

    function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2} = ${resultado}`);
        novaOpcao();
    }

    function novaOpcao() {
        let opcao = prompt("Deseja realizar uma nova operação?\n 1 - Sim\n 2 - Não");
        if (opcao == 1) {
            calculadora();
        }else if (opcao == 2){
            alert("Até mais!");
        }else {
            alert("ERRO! informe uma opção válida");
            novaOpcao();
        }
    }

        if(operacao == 1) {
            soma();
        }else if (operacao == 2) {
            subtracao();
        }else if (operacao == 3) {
            multiplicacao();
        }else if (operacao == 4) {
            divisaoReal();
        }else if (operacao == 5) {
            divisaoInteiro();
        }else if (operacao == 6) {
            potenciacao();
        }
}
calculadora();