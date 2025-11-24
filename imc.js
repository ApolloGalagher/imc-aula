function calcularEVerificarIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultadoElemento = document.getElementById("resultado");
    const resultadoClassificacaoElemento = document.getElementById("classificacao");
    const indice = peso / (altura * altura);
    const imcFormatado = indice.toFixed(2);
    let classificacao = "";

    // Classificação do IMC
    if (indice < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (indice < 24.9) {
        classificacao = "Peso normal";
    } else if (indice < 29.9) {
        classificacao = "Sobrepeso";
    } else if (indice < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (indice < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III (Mórbida)";
    }

    // Exibição dos Resultados
    const mensagemFinal = "Seu Índice de Massa Corporal (IMC) é: " + imcFormatado;
    const mensagemFinal2 =" Você está classificado como: " + classificacao;
    resultadoElemento.innerHTML = mensagemFinal + "<br>" + mensagemFinal2;  
    
    // Exibe no console
    console.log(mensagemFinal);
    console.log("Classificação: " + classificacao);
}