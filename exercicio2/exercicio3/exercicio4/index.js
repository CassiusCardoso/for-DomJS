// Escrever uma função que receberá dois valores e vai retornar o maior deles
const input = document.querySelectorAll("input");
const container = document.querySelector(".container");

input.addEventListener("submit", twoValues())

function twoValues (n1, n2) {
    const retornarValorMaior = Math.max(input);
    return retornarValorMaior;
}

function criarP(){
    document.createElement("p")
    container.appendChild("p");   
}

console.log(retornarValorMaior)