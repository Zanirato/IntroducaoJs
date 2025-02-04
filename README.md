# IntroducaoJs
 
Atividades de introdução de JavaScript 


## 1. O que é o JavaScript

   O JavaScript é uma linguagem de programação que permite tornar uma página web mais dinâmica, implementar itens mais complexos. É uma linguagem usada junto ao HTML - que faz a estrutura de um site - ao CSS - responsável pela estilização da página - complementando essas linguagens, tornando a página mais atraente visualmente. Outras funções do JavaScript são:
   
   * Armazenas conteúdos em variáveis;
   * Fazer operações utilizando textos;
   * Declarar funções;
   * Executar o código depois de certos eventos na página;
   * Entre outras funcionalidades.

<br>

## 2. Comandos de JavaScript

   * `let` = Definição de variável;
   * `const` = Definição de variável que se repete;
   * `prompt` = Exibe uma caixa de diálogo com uma mensagem;
   * `function` = Um conjunto de instruções que executa uma tarefa ou calcula um valor;
   * `console.log` = Emite uma mensagem para o console;
   * `console.log` = Emite uma mensagem para o console;
   * `alert` ou `window.alert` = Mostra ao usuário uma mensagem e um botão de confirmação;
   * `parseInt` = Aceita números inteiros;
   * `parseFlow` = Aceita números decimais;
   * `document.getElementById` = Procurar nos documentos e pegar um elemento por Id (normalmente usado para interligar um elemento do HTML com o JavaScript);
   * `.value` = Retorna valores númericos;
   * `.innerText` = Altera o conteúdo de um elemento de sua página (DOM) com o conteúdo tratado apenas como texto;

<br>

## 3. Atividade de exemplo JavaScript

   * **Atividade 1** - Primeiro exemplo de Js;
   * **Atividade 2** - Exemplo chrome;
   * **Atividade 3** - Exemplo variável;
   * **Atividade 4** - Exemplo prompt;
   * **Atividade 5** - Exemplo soma;
   * **Atividade 6** - Exemplo soma prompt;
   * **Atividade 7** - Exemplo function;
   * **Atividade 8** - Exemplo function soma;
   * **Atividade 9** - Atividade Calculadora;

<br>

## 4. Projeto da Calculadora 

  Foi produzido uma calculadora para testar os conhecimentos que foram ensinados em aula. Nessa atividade - Atividade 9 - utilizamos o HTML, CSS e JavaScript para a criação de uma calculadora que multiplica, soma, subtrai e divide dois números, esses que serão adicionados pelo usuário no formulário da página. O resultado do cálculo aparecerá como uma mensagem na tela. O código de JavaScript que foi feito para essa calculadora estará a seguir:

~~~JavaScript
const soma = ()=>{
    
    let nu1 =  parseFloat(document.getElementById("n1").value)
    let nu2 =  parseFloat(document.getElementById("n2").value)
    let resultados = (nu1) + (nu2)

    window.alert("Olá, a soma dos números é " + resultados)
}

const subtracao = ()=>{
    
    let nu1 =  parseFloat(document.getElementById("n1").value)
    let nu2 =  parseFloat(document.getElementById("n2").value)
    let resultadosub = (nu1) - (nu2)

    window.alert("Olá, a subtração dos números é " + resultadosub)
}

const multiplicacao = ()=>{
    
    let nu1 =  parseFloat(document.getElementById("n1").value)
    let nu2 =  parseFloat(document.getElementById("n2").value)
    let resultadomul = (nu1) * (nu2)

    window.alert("Olá, a multiplicação dos números é " + resultadomul)
}

const divisao = ()=>{
    
    let nu1 =  parseFloat(document.getElementById("n1").value)
    let nu2 =  parseFloat(document.getElementById("n2").value)
    let resultadodiv = (nu1) / (nu2)

    window.alert("Olá, a divisão dos números é " + resultadodiv)
}
