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